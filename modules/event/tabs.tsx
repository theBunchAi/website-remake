import { MouseEventHandler, useRef } from "react";
import ContentfulDocument from "@components/contentful-document";
import {
  tabButtonCss,
  tabIndicatorCss,
  tabPanelCss,
  tabsButtonsWrapperCss,
  tabsContentWrapperCss,
  tabsWrapperCss
} from "@modules/event/styles";
import { EventDetailsItem } from "@modules/event/types";
import useTabs from "@modules/event/use-tabs";

const Tabs = (props: EventDetailsItem["tabsCollection"]) => {
  const { items } = props;

  const tabsContentWrapperRef = useRef<HTMLDivElement>(null);
  const tabsButtonsWrapperRef = useRef<HTMLDivElement>(null);
  const tabIndicatorRef = useRef<HTMLDivElement>(null);

  useTabs({
    tabsContentWrapperRef,
    tabsButtonsWrapperRef,
    tabIndicatorRef,
    items
  });

  type TabItemType = EventDetailsItem["tabsCollection"]["items"][0];

  const tabButtonMapper = (item: TabItemType, index: number) => {
    const { tabTitle } = item;
    const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
      const contentWrapper = tabsContentWrapperRef.current;
      const contentWrapperOnScreenWidth = contentWrapper?.getBoundingClientRect().width ?? 0;
      contentWrapper?.scroll({
        left: contentWrapperOnScreenWidth * index,
        behavior: "smooth"
      });
    };
    return (
      <button
        key={`tab-btn-${index}`}
        css={tabButtonCss}
        className="tab-btn"
        role="tab"
        type="button"
        aria-controls={"tab-content-" + tabTitle}
        id={"tab-btn-" + tabTitle}
        onClick={clickHandler}
        data-index={index}
      >
        {tabTitle}
      </button>
    );
  };

  const tabContentMapper = (item: TabItemType, index: number) => {
    const { tabText, tabTitle } = item;
    return (
      <div
        key={`tab-content-${index}`}
        data-index={index}
        aria-labelledby={"tab-btn-" + tabTitle}
        id={"tab-content-" + tabTitle}
        role="tabpanel"
        className={tabTitle.toLowerCase().trim() === "highlights" ? "highlights" : undefined}
        css={tabPanelCss}
      >
        <ContentfulDocument {...tabText} />
      </div>
    );
  };

  return (
    <div css={tabsWrapperCss}>
      <div ref={tabsButtonsWrapperRef} css={tabsButtonsWrapperCss} role="tablist">
        {items.map(tabButtonMapper)}
        <div ref={tabIndicatorRef} css={tabIndicatorCss}></div>
      </div>
      <div ref={tabsContentWrapperRef} css={tabsContentWrapperCss}>
        {items.map(tabContentMapper)}
      </div>
    </div>
  );
};
export default Tabs;
