import { ReactNode } from "react";
import { PageWrapperProps } from "@components/page-wrapper/types";

export interface BannerPageWrapperProps {
  pageName: string;
  pageMeta?: PageWrapperProps["meta"];
  heading: string;
  bannerDetails?: {
    date: Date;
    location: string;
  };
  img: {
    src: string;
    alt: string;
  };
  secondChild?: ReactNode;
  className?: string;
  bottomBar?: BannerPageWrapperBottomBar | null;
}

export interface BannerPageWrapperBottomBar {
  cost: number;
  link: string;
  buttonText?: string;
}
