import { Fragment, Ref, forwardRef } from "react";
import Link from "next/link";
import { navBarContent } from "@common-data";
import { mainNavCss, navContainerCss, navWrapperCss } from "@modules/header/nav/styles";

function N(_: unknown, ref: Ref<HTMLDivElement>) {
  const { nav } = navBarContent;
  const { links } = nav;
  const navLinkMapper = (slink: (typeof links)[0], index: number) => {
    const { text, link } = slink;
    return (
      <Fragment key={"main-nav-link-" + index}>
        <Link href={link}>{text}</Link>
      </Fragment>
    );
  };
  return (
    <div className="nav-wrapper" css={navWrapperCss} ref={ref}>
      <div className="nav-container" css={navContainerCss}>
        {/* <span>{topText}</span> */}
        <nav css={mainNavCss}>{links.map(navLinkMapper)}</nav>
      </div>
    </div>
  );
}

const Nav = forwardRef(N);
export default Nav;
