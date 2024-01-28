import { PropsWithChildren, ReactNode } from "react";

export interface BannerPageWrapperProps extends PropsWithChildren {
  pageName?: string;
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
