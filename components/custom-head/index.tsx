import { meta } from "@common-data";
import RawCustomHead from "@components/custom-head/raw-custom-head";

interface CustomHeadProps {
  page: string;
}

export default function CustomHead(props: CustomHeadProps) {
  const { page } = props;
  if (!meta[page]) throw new Error(`Meta data for page ${page} not found`);
  return <RawCustomHead page={page} meta={meta[page] as never} />;
}
