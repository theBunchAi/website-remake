import dynamic from "next/dynamic";
import { heroHeadingCss, heroWrapperCss } from "@modules/home/hero/styles";
import { HomeHeroProps } from "@modules/home/hero/types";
const HomeHeroVideo = dynamic(() => import("@modules/home/hero/video"), { ssr: false });

export default function HomeHeroSection(props: HomeHeroProps) {
  const { heroMainText = "", heroPlaceholderText = "", posterUrl, videoUrl } = props;
  const placeholder = "<PLACEHOLDER>";
  const headingHtml = heroMainText.replace(placeholder, `<span>${heroPlaceholderText}</span>`);

  return (
    <section css={heroWrapperCss}>
      <HomeHeroVideo posterUrl={posterUrl} videoUrl={videoUrl} />
      <h1 dangerouslySetInnerHTML={{ __html: headingHtml }} css={heroHeadingCss}></h1>
    </section>
  );
}
