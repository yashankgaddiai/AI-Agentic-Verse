import { useBlobAssets } from "../hooks/useBlobAssets";

interface OptimizedImageProps {
  filename: string;
  fallback?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
  priority?: boolean;
}

/**
 * OptimizedImage component that implements responsive images using srcset and lazy loading.
 * It automatically looks for -400.webp, -800.webp, and -1200.webp versions of the image.
 */
export default function OptimizedImage({ 
  filename, 
  fallback, 
  alt, 
  className, 
  loading = "lazy",
  sizes = "(max-width: 768px) 100vw, 1200px",
  priority = false
}: OptimizedImageProps) {
  const { getBlobUrl } = useBlobAssets();
  
  // Strip extension to get base name
  const lastDotIndex = filename.lastIndexOf('.');
  const baseName = lastDotIndex !== -1 ? filename.substring(0, lastDotIndex) : filename;
  
  const url400 = getBlobUrl(`${baseName}-400.webp`);
  const url800 = getBlobUrl(`${baseName}-800.webp`);
  const url1200 = getBlobUrl(`${baseName}-1200.webp`);
  const originalUrl = getBlobUrl(filename, fallback || null);

  // Construct srcset
  const srcSetParts = [];
  if (url400) srcSetParts.push(`${url400} 400w`);
  if (url800) srcSetParts.push(`${url800} 800w`);
  if (url1200) srcSetParts.push(`${url1200} 1200w`);
  
  const srcSet = srcSetParts.length > 0 ? srcSetParts.join(', ') : undefined;
  
  // Use 800px version as default src if it exists, otherwise original
  const mainSrc = url800 || originalUrl || '';

  return (
    <img
      src={mainSrc}
      srcSet={srcSet}
      sizes={sizes}
      loading={priority ? "eager" : loading}
      alt={alt}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}
