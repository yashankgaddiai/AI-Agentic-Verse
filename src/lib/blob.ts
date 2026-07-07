/**
 * Uploads a file to Vercel Blob via the local API proxy.
 * @param file The file to upload.
 * @returns The blob object containing the URL.
 */
export async function uploadToBlob(file: File) {
  const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
    method: "POST",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Upload failed");
  }

  return response.json();
}
