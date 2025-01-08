export type PreviousNextBtnsType = {
  handlePreviousImage: () => void;
  handleNextImage: () => void;
  customStyle: string;
  dimension: string;
  iconClass: string;
  buttonClass: string;
};

export type ThumbnailsType = {
  thumbnails: string[];
  handleThumbnailClick: (value: number) => void;
  customStyle: string;
  overlayStyle: string;
  display: string;
  currentImage: number;
};
