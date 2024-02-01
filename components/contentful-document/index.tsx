import Image from "next/image";
import { Options, documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { companyName } from "@common-data";
import { anchorCss, listContainerCss, paragraphCss } from "@components/contentful-document/styles";
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
  const { renderNode, ...restExtraOptions } = extraOptions || {};
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
          return <video controls muted src={url} loop />;
        }
        return <></>;
      },
      [BLOCKS.OL_LIST]: (_, children) => <ol css={listContainerCss}>{children}</ol>,
      [BLOCKS.UL_LIST]: (_, children) => <ul css={listContainerCss}>{children}</ul>,
      [BLOCKS.PARAGRAPH]: (_, children) => <p css={paragraphCss}>{children}</p>,
      [INLINES.HYPERLINK]: (data, children) => (
        <a target="_blank" rel="noopener noreferrer" css={anchorCss} href={data.data.uri}>
          {children}
        </a>
      ),
      ...renderNode
    },
    ...restExtraOptions
  };
  return <>{documentToReactComponents(json, documentRenderingOptions)}</>;
}
