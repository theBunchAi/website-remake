import { PropsWithChildren, ReactNode } from "react";

export interface BannerWidthWrapperProps extends PropsWithChildren {
  pageName: string;
  heading: string;
  cost?: number;
  bannerDetails?: {
    date: Date;
    location: string;
  };
  img: {
    src: string;
    alt: string;
  };
  secondChild?: ReactNode;
}
