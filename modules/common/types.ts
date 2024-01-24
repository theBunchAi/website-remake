export interface CommonAsset {
  url: string;
}

export interface CommonEventItem {
  eventDate: string;
  eventName: string;
  shortDescription: string;
  venue: string;
  eventPoster: CommonAsset;
}

export interface FeaturedEventItem extends CommonEventItem {
  limitedSeats: boolean;
  limitedSeatsTopText: string;
  limitedSeatsBottomText: string;
}

export interface ProjectItem {
  title: string;
  titlePrefix: string | null;
  titleSuffix: string | null;
  shortBrief: string;
  buttonText: string;
  projectImage: CommonAsset;
}

export interface ItemsWrapper<ItemType> {
  items: ItemType[];
}
