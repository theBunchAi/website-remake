import { useEffect, useRef } from "react";
import { homeHeroContent } from "@modules/home/content";
import { heroVideoCss } from "@modules/home/hero/styles";

export default function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { posterImg, videoLink } = homeHeroContent;
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.src = videoLink;
    }
  }, [videoLink]);
  return <video muted loop autoPlay playsInline ref={videoRef} css={heroVideoCss} poster={posterImg}></video>;
}
