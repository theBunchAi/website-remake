/* eslint-disable max-len */
import BannerPageWrapper from "@components/banner-page-wrapper";

export default function About() {
  const b = {
    src: "https://images.ctfassets.net/qicozlwbeso5/1ZooQ32loycPWfKHyDOWSF/8f33750d52167ce091b00eb7085a6c9c/sunrise.jpg",
    alt: "dkasln"
  };
  return (
    <BannerPageWrapper pageName="about" heading="Heading One" cost={99} img={b}>
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
    </BannerPageWrapper>
  );
}
