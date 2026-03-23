import Lottie from "lottie-react";
import { useEffect, useState } from "react";

interface LottiePlayerProps {
  url: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export default function LottiePlayer({ url, className, loop = true, autoplay = true }: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        const contentType = res.headers.get("content-type");
        if (!res.ok || !contentType || !contentType.includes("application/json")) {
          throw new Error(`Failed to load JSON from ${url}. Status: ${res.status}, Content-Type: ${contentType}`);
        }
        return res.json();
      })
      .then((data) => setAnimationData(data))
      .catch((err) => {
        console.error("LottiePlayer Error:", err);
        setAnimationData(null);
      });
  }, [url]);

  if (!animationData) return <div className={className} />;

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      className={className}
    />
  );
}
