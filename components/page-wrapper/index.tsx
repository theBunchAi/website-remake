import { PropsWithChildren, useEffect, useRef } from "react";
import CustomHead from "@components/custom-head";
import RawCustomHead from "@components/custom-head/raw-custom-head";
import { PageWrapperProps } from "@components/page-wrapper/types";

export default function PageWrapper(props: PropsWithChildren<PageWrapperProps>) {
  const { name, children, meta } = props;
  const pageWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const footerHeight = document?.querySelector("footer")?.getBoundingClientRect().height.toFixed(1);
    pageWrapperRef?.current?.style?.setProperty("min-height", `calc(100vh - ${footerHeight}px)`);
  }, []);
  return (
    <div className="page-wrapper" ref={pageWrapperRef}>
      {name && !meta && <CustomHead page={name} />}
      {name && meta && <RawCustomHead page={name} meta={meta} />}
      {children}
    </div>
  );
}
