import Head from "next/head";
import { meta } from "@common-data";

interface CustomHeadProps {
  page: string;
}

export default function CustomHead(props: CustomHeadProps) {
  const { page } = props;
  if (!meta[page]) throw new Error(`Meta data for page ${page} not found`);
  const { title, description, og = {} } = meta[page] ?? {};
  const mapper = (ogKey: string, index: number) => {
    const value = og[ogKey as keyof typeof og];
    return <meta key={`og-meta-${page}-${index}`} property={`og:${ogKey}`} content={value} />;
  };
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {Object.keys(og).map(mapper)}
    </Head>
  );
}
