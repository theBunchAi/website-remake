import { StaticImageData } from "next/image";

export interface FeaturedCardProps {
  date: Date;
  hasLimitedSeates?: boolean;
  limitedSeatesText?: {
    top?: string;
    bottom?: string;
  };
  title: string;
  description: string;
  image: {
    src: string | StaticImageData;
    alt: string;
  };
  location: string;
  link: string;
  className?: string;
}

export interface FeaturedCardLocationProps {
  location: string;
  className?: string;
}
