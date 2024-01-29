import Head from "next/head";

interface RawCustomHeadProps {
  meta: {
    title: string;
    description: string;
    og: {
      title: string;
      description: string;
    };
  };
  page: string;
}

export default function RawCustomHead(props: RawCustomHeadProps) {
  const { page, meta } = props ?? {};
  const { title, description, og = {} } = meta ?? {};
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
