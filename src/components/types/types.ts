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

export type BuyingSectionType = {
  quantity: number;
  cartQty: number;
  setQuantity: (value: number) => void;
  setCartQty: (value: number) => void;
};

export type NavBarType = {
  cartQty: number;
  setCartQty: (value: number) => void;
};

export type SneakerType = {
  cartQty: number;
  setCartQty: (value: number) => void;
};
