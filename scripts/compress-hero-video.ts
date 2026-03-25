import { list, put } from '@vercel/blob';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import 'dotenv/config';

async function compressHeroVideo() {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    console.error("❌ BLOB_READ_WRITE_TOKEN is missing in environment.");
    return;
  }

  try {
    console.log("🔍 Listing blobs to find herosection.mp4...");
    const { blobs } = await list({ token });
    const heroBlob = blobs.find(b => b.pathname.endsWith('herosection.mp4'));

    if (!heroBlob) {
      console.error("❌ herosection.mp4 not found in Vercel Blob storage.");
      return;
    }

    console.log(`📥 Downloading original video from: ${heroBlob.url}`);
    const response = await fetch(heroBlob.url);
    if (!response.ok) throw new Error(`Failed to download: ${response.statusText}`);
    
    const arrayBuffer = await response.arrayBuffer();
    const inputPath = path.join(process.cwd(), 'temp_input.mp4');
    const outputPath = path.join(process.cwd(), 'temp_output.mp4');
    
    fs.writeFileSync(inputPath, Buffer.from(arrayBuffer));
    console.log(`✅ Downloaded original video (${(arrayBuffer.byteLength / 1024 / 1024).toFixed(2)} MB)`);

    console.log("⚙️ Compressing video using FFmpeg...");
    // -vcodec libx264: use H.264
    // -crf 28: Constant Rate Factor (higher = smaller file, lower quality. 23-28 is good for web)
    // -preset slow: better compression efficiency
    // -an: remove audio (background video doesn't need it)
    // -y: overwrite output
    // -movflags +faststart: optimize for web streaming
    const command = `npx -y ffmpeg-static -i ${inputPath} -vcodec libx264 -crf 28 -preset slow -an -movflags +faststart -y ${outputPath}`;
    
    console.log(`Running: ${command}`);
    execSync(command, { stdio: 'inherit' });

    const compressedBuffer = fs.readFileSync(outputPath);
    console.log(`✅ Compression complete. New size: ${(compressedBuffer.length / 1024 / 1024).toFixed(2)} MB`);

    console.log("📤 Uploading optimized video back to Vercel Blob...");
    const newBlob = await put(heroBlob.pathname, compressedBuffer, {
      access: 'public',
      token,
      contentType: 'video/mp4',
      addRandomSuffix: false, // Overwrite if possible or keep same name
    });

    console.log(`🚀 Optimized video uploaded successfully: ${newBlob.url}`);

    // Cleanup
    fs.unlinkSync(inputPath);
    fs.unlinkSync(outputPath);
    console.log("🧹 Cleanup complete.");

  } catch (error) {
    console.error("❌ Error during video compression:", error);
  }
}

compressHeroVideo();
