import dynamic from "next/dynamic";
import parse from "html-react-parser";
import { sanitize } from "isomorphic-dompurify";
import { DownIcon } from "@components/dynamic-imports";
import { downIconCss, heroHeadingCss, heroWrapperCss } from "@modules/home/hero/styles";
import { HomeHeroProps } from "@modules/home/hero/types";
const HomeHeroVideo = dynamic(() => import("@modules/home/hero/video"), { ssr: false, loading: () => <></> });

export default function HomeHeroSection(props: HomeHeroProps) {
  const { heroMainText = "", heroPlaceholderText = "", posterUrl, videoUrl } = props;
  const placeholder = "<PLACEHOLDER>";
  const headingHtml = heroMainText.replace(placeholder, `<span>${heroPlaceholderText}</span>`);
  const cleanH1 = sanitize(headingHtml);
  const parsedH1 = parse(cleanH1);

  return (
    <section css={heroWrapperCss}>
      <HomeHeroVideo posterUrl={posterUrl} videoUrl={videoUrl} />
      <h1 css={heroHeadingCss}>{parsedH1}</h1>
      <DownIcon className="down-icon" css={downIconCss} />
    </section>
  );
}
