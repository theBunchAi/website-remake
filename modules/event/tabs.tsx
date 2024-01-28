import { MouseEventHandler, useEffect, useRef } from "react";
import ContentfulDocument from "@components/contentful-document";
import {
  tabButtonCss,
  tabIndicatorCss,
  tabsButtonsWrapperCss,
  tabsContentWrapperCss,
  tabsWrapperCss
} from "@modules/event/styles";
import { EventDetailsItem } from "@modules/event/types";

const Tabs = (props: EventDetailsItem["tabsCollection"]) => {
  const { items } = props;

  const tabsContentWrapperRef = useRef<HTMLDivElement>(null);
  const tabsButtonsWrapperRef = useRef<HTMLDivElement>(null);
  const tabIndicatorRef = useRef<HTMLDivElement>(null);

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
      <button css={tabButtonCss} className="tab-btn" key={`tab-btn-${index}`} data-index={index} onClick={clickHandler}>
        {tabTitle}
      </button>
    );
  };

  useEffect(() => {
    tabIndicatorRef.current?.style?.setProperty("width", `${100 / items.length}%`);
    (tabsButtonsWrapperRef.current?.firstChild as HTMLButtonElement)?.classList?.add("active");
  }, [items]);

  useEffect(() => {
    const target = tabsContentWrapperRef.current;
    if (target) {
      const observerOptions: IntersectionObserverInit = {
        root: target,
        threshold: 0.51
      };
      const observerCallback: IntersectionObserverCallback = (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting)?.target;
        const index = Number(intersectingEntry?.getAttribute("data-index") ?? 0);
        const t = tabsButtonsWrapperRef.current?.children[index] as HTMLButtonElement;
        tabIndicatorRef.current?.style?.setProperty("left", `${(100 / items.length) * index}%`);
        for (const button of Array.from(tabsButtonsWrapperRef.current?.children ?? [])) {
          button.classList.remove("active");
        }
        t?.classList.add("active");
      };
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      for (const item of Array.from(target.children)) {
        observer.observe(item);
      }
      return () => observer.disconnect();
    }
    return;
  }, [items]);

  const tabContentMapper = (item: TabItemType, index: number) => {
    const { tabText } = item;
    return (
      <div key={`tab-content-${index}`} data-index={index}>
        <ContentfulDocument {...tabText} />
      </div>
    );
  };

  return (
    <div css={tabsWrapperCss}>
      <div ref={tabsButtonsWrapperRef} css={tabsButtonsWrapperCss}>
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
