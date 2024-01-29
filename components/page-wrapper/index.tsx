import { PropsWithChildren } from "react";
import CustomHead from "@components/custom-head";
import RawCustomHead from "@components/custom-head/raw-custom-head";
import { PageWrapperProps } from "@components/page-wrapper/types";

export default function PageWrapper(props: PropsWithChildren<PageWrapperProps>) {
  const { name, children, meta } = props;
  return (
    <div className="page-wrapper">
      {name && !meta && <CustomHead page={name} />}
      {name && meta && <RawCustomHead page={name} meta={meta} />}
      {children}
    </div>
  );
}
