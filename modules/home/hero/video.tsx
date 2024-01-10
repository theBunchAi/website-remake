import { homeHeroContent } from "@modules/home/content";
import { heroVideoCss } from "@modules/home/hero/styles";

export default function HomeHeroVideo() {
  const { posterImg, videoLink } = homeHeroContent;
  return <video controls muted loop autoPlay playsInline src={videoLink} css={heroVideoCss} poster={posterImg}></video>;
}
