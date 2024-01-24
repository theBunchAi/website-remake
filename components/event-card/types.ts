export interface EventCardProps {
  date: Date;
  imgSrc: string;
  imgAlt?: string;
  className?: string;
  isNotHighlighted?: boolean;
  title: string;
  description: string;
  location: string;
  link: string;
}
