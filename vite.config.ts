import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import url from 'url';
import {defineConfig, loadEnv} from 'vite';

function adaptMiddleware(handler: any) {
  return async (req: any, res: any, next: any) => {
    try {
      const parsedUrl = url.parse(req.url || '', true);
      req.query = parsedUrl.query;

      if (req.body === undefined) {
        req.body = await new Promise((resolve, reject) => {
          const chunks: any[] = [];
          req.on('data', (chunk: any) => chunks.push(chunk));
          req.on('end', () => {
            const buffer = Buffer.concat(chunks);
            const contentType = req.headers['content-type'] || '';
            if (contentType.includes('application/json')) {
              try {
                resolve(JSON.parse(buffer.toString('utf8')));
              } catch (e) {
                resolve({});
              }
            } else {
              resolve(buffer);
            }
          });
          req.on('error', (err: any) => reject(err));
        });
      }

      res.status = (code: number) => {
        res.statusCode = code;
        return res;
      };

      res.json = (data: any) => {
        if (!res.headersSent) {
          res.setHeader('Content-Type', 'application/json');
        }
        res.end(JSON.stringify(data));
        return res;
      };

      res.send = (data: any) => {
        if (typeof data === 'object') {
          return res.json(data);
        }
        res.end(data);
        return res;
      };

      await handler(req, res);
    } catch (err) {
      console.error('API Dev Server Middleware Error:', err);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      }
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(), 
      tailwindcss(),
      {
        name: 'vercel-api-dev-server',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url && req.url.startsWith('/api/')) {
              const pathname = req.url.split('?')[0];
              const relativePath = `.${pathname}.ts`;
              const absolutePath = path.resolve(process.cwd(), relativePath);

              if (fs.existsSync(absolutePath)) {
                try {
                  const module = await server.ssrLoadModule(relativePath);
                  if (module && module.default) {
                    const adapted = adaptMiddleware(module.default);
                    await adapted(req, res, next);
                    return;
                  }
                } catch (err) {
                  console.error(`Error loading API handler ${relativePath}:`, err);
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: `Internal error compiling API handler: ${pathname}` }));
                  return;
                }
              } else {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: `API route not found: ${pathname}` }));
                return;
              }
            }
            next();
          });
        }
      }
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
