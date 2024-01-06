import dynamic from "next/dynamic";
import { homeHeroContent } from "@modules/home/content";
import { heroHeadingCss, heroWrapperCss } from "@modules/home/hero/styles";
const HomeHeroVideo = dynamic(() => import("@modules/home/hero/video"), { ssr: false });

export default function HomeHeroSection() {
  const { placeholder, text, placeholderText } = homeHeroContent;
  const headingHtml = text.replace(placeholder, `<span>${placeholderText}</span>`);

  return (
    <div css={heroWrapperCss}>
      <HomeHeroVideo />
      <h1 dangerouslySetInnerHTML={{ __html: headingHtml }} css={heroHeadingCss}></h1>
    </div>
  );
}
