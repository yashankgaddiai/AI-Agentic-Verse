import fs from "fs";
import path from "path";

export default async function handler(req: any, res: any) {
  const imagesDir = path.join(process.cwd(), "public", "images");
  try {
    if (!fs.existsSync(imagesDir)) {
      return res.status(200).json([]);
    }
    const files = fs.readdirSync(imagesDir);
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ error: "Failed to list assets" });
  }
}
