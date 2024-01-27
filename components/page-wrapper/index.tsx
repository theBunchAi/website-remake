import { PropsWithChildren } from "react";
import CustomHead from "@components/custom-head";

interface PageWrapperProps {
  name?: string | undefined;
}

export default function PageWrapper(props: PropsWithChildren<PageWrapperProps>) {
  const { name, children } = props;
  return (
    <div className="page-wrapper">
      {name && <CustomHead page={name} />}
      {children}
    </div>
  );
}
