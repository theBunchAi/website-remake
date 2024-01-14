import { useRef } from "react";
import { navBarContent } from "@common-data";
import FullWidthWrapper from "@components/full-width-wrapper";
import Nav from "@modules/header/nav";
import {
  hamContainerCss,
  headerContainerCss,
  headerWrapperCss,
  locationContainerCss,
  logoContainerCss,
  otherContentCss
} from "./styles";

export default function Header() {
  const { leftText, locationText } = navBarContent;
  const hamRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const hamClickHandler = () => {
    const targetOne = hamRef.current;
    const targetTwo = navRef.current;
    if (targetOne && targetTwo) {
      targetOne.classList.toggle("active");
      targetTwo.classList.toggle("active");
    }
  };
  return (
    <FullWidthWrapper
      element="header"
      wrapperCss={headerWrapperCss}
      secondContainer={<Nav ref={navRef} />}
      css={headerContainerCss}
    >
      <div className="logo" css={logoContainerCss}>
        <span>{leftText}</span>
      </div>
      <div className="other-content" css={otherContentCss}>
        <div className="location-container" css={locationContainerCss}>
          <span>{locationText}</span>
          <span>to be decided</span>
        </div>
        <div className="ham-btn" css={hamContainerCss} onClick={hamClickHandler} ref={hamRef}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </FullWidthWrapper>
  );
}
