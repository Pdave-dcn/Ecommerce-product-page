import { useState } from "react";
import PreviousNextBtns from "./PreviousNextBtns";
import Thumbnails from "./Thumbnails";

const Gallery = () => {
  const images: string[] = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];

  const thumbnails: string[] = [
    "images/image-product-1-thumbnail.jpg",
    "images/image-product-2-thumbnail.jpg",
    "images/image-product-3-thumbnail.jpg",
    "images/image-product-4-thumbnail.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePreviousImage = () => {
    setCurrentImage((prevImage) => {
      return prevImage === 0 ? images.length - 1 : prevImage - 1;
    });
  };

  const handleNextImage = () => {
    setCurrentImage((prevImage) => {
      return prevImage === images.length - 1 ? 0 : prevImage + 1;
    });
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImage(index);
  };

  const handleOpenLightbox = () => {
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="relative z-0 -top-9 lg:top-0 lg:ml-48 lg:mr-20">
      <img
        src={`${images[currentImage]}`}
        alt={`image ${currentImage + 1}`}
        onClick={() => handleOpenLightbox()}
        className="w-full h-auto bg-cover lg:rounded-lg lg:mb-6 lg:w-[350px] lg:cursor-pointer"
      />

      {/* Thumbnails */}
      <Thumbnails
        thumbnails={thumbnails}
        handleThumbnailClick={handleThumbnailClick}
        customStyle={"hidden lg:flex lg:w-auto lg:justify-between"}
        currentImage={currentImage}
        overlayStyle={"absolute border-2 border-orange inset-0 rounded-lg"}
        display=""
      />

      {/* Buttons */}
      <PreviousNextBtns
        handlePreviousImage={handlePreviousImage}
        handleNextImage={handleNextImage}
        customStyle={"px-4 lg:hidden"}
        dimension={"w-10 h-10"}
        buttonClass=""
        iconClass=""
      />

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center -mt-4">
            <button
              type="button"
              className="self-end mb-5"
              onClick={() => {
                handleCloseLightbox();
              }}
            >
              <img
                src="images/icon-close.svg"
                alt="Close icon"
                className="close__lightbox"
              />
            </button>

            {/* lightbox displayed image */}
            <div className="relative">
              <img
                src={`${images[currentImage]}`}
                alt={`image ${currentImage + 1}`}
                onClick={() => handleOpenLightbox()}
                className="max-w-md rounded-lg"
              />

              {/* lightbox buttons */}
              <PreviousNextBtns
                handlePreviousImage={handlePreviousImage}
                handleNextImage={handleNextImage}
                customStyle={"-left-6 -right-6"}
                dimension={"w-12 h-12"}
                buttonClass={"lightbox__btns"}
                iconClass={"lightbox__nav--btns"}
              />
            </div>

            {/* lightbox thumbnails */}
            <Thumbnails
              thumbnails={thumbnails}
              handleThumbnailClick={handleThumbnailClick}
              customStyle={"flex gap-7 mt-7"}
              currentImage={currentImage}
              overlayStyle={"bg-white bg-opacity-50"}
              display={"flex"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
