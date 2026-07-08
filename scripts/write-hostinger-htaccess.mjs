import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const jsMimeRules = `<IfModule mod_mime.c>
  RemoveType .js .mjs .css
  AddType application/javascript .js .mjs
  AddType text/css .css
</IfModule>

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  <FilesMatch "\\.(js|mjs)$">
    Header set Content-Type "application/javascript; charset=utf-8"
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(css|png|jpe?g|webp|svg|ico)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
</IfModule>
`;

const distRules = `${jsMimeRules}
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
`;

mkdirSync("dist/assets", { recursive: true });
writeFileSync(join("dist", ".htaccess"), distRules);
writeFileSync(join("dist", "assets", ".htaccess"), jsMimeRules);
