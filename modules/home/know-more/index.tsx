import Link from "next/link";
import FullWidthWrapper from "@components/full-width-wrapper";
import { knowMoreOuterWrapperCss, knowMoreWrapperCss } from "@modules/home/know-more/styles";

export default function HomeKnowMoreSection() {
  return (
    <FullWidthWrapper element="main" wrapperCss={knowMoreOuterWrapperCss} css={knowMoreWrapperCss}>
      <h2 className="heading">About TheBunch.ai</h2>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis incidunt dicta fuga, temporibus unde odio
        corrupti reiciendis consequuntur voluptatibus modi iste natus nemo voluptatum, consequatur, accusantium placeat
        maiores eaque fugit est laboriosam vel vero optio! Nisi minima, ratione aperiam saepe fuga expedita maiores
        doloremque, quae tempora culpa voluptate quos autem!
      </p>
      <Link href="/about" className="link">
        Know More
      </Link>
    </FullWidthWrapper>
  );
}
