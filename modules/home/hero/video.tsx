import { heroVideoCss } from "@modules/home/hero/styles";

interface HomeHeroVideoProps {
  posterUrl: string;
  videoUrl: string;
}

export default function HomeHeroVideo(props: HomeHeroVideoProps) {
  const { posterUrl = "", videoUrl = "" } = props;
  return (
    <video preload="auto" muted loop autoPlay playsInline src={videoUrl} css={heroVideoCss} poster={posterUrl}></video>
  );
}
