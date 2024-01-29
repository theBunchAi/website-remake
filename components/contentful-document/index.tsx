import Image from "next/image";
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { companyName } from "@common-data";
import { CommonAssetLink, CommonDocument } from "@modules/common/types";

interface ContentfulDocumentProps extends CommonDocument {
  extraOptions?: Options;
}

export default function ContentfulDocument(props: ContentfulDocumentProps) {
  const { json, links, extraOptions } = props;
  const getAssetData = (assetId: string) => {
    const data = links?.assets?.block?.find((asset) => asset.sys.id === assetId);
    return data as CommonAssetLink;
  };
  const documentRenderingOptions: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (props) => {
        const assetId = props.data.target.sys.id;
        const assetData = getAssetData(assetId);
        const { contentType, description, height, url, width } = assetData;
        if (contentType.includes("image")) {
          return <Image alt={description || companyName} height={height} src={url} width={width} />;
        }
        if (contentType.includes("video")) {
          return <video autoPlay muted src={url} loop />;
        }
        return <></>;
      }
    },
    ...extraOptions
  };
  return <>{documentToReactComponents(json, documentRenderingOptions)}</>;
}
