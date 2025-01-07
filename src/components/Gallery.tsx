import { useState } from "react";

const Gallery = () => {
  const images: string[] = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

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

  return (
    <div className="relative z-0 -top-9 lg:top-0 lg:ml-48 lg:mr-20">
      <img
        src={`${images[currentImage]}`}
        alt={`image ${currentImage + 1}`}
        className="w-full h-auto bg-cover lg:rounded-lg lg:mb-6 lg:w-[350px]"
      />
      <div className="hidden lg:flex lg:w-auto justify-between">
        <img
          src="images/image-product-1-thumbnail.jpg"
          alt="Thumbnail 1"
          className="w-16 rounded-lg"
        />
        <img
          src="images/image-product-2-thumbnail.jpg"
          alt="Thumbnail 2"
          className="w-16 rounded-lg"
        />
        <img
          src="images/image-product-3-thumbnail.jpg"
          alt="Thumbnail 3"
          className="w-16 rounded-lg"
        />
        <img
          src="images/image-product-4-thumbnail.jpg"
          alt="Thumbnail 4"
          className="w-16 rounded-lg"
        />
      </div>
      <div className="absolute flex items-center justify-between inset-0 px-4">
        <button
          type="button"
          aria-label="Previous Image"
          className="w-10 h-10 bg-white rounded-full lg:hidden
          "
          onClick={handlePreviousImage}
        >
          <img
            src="images/icon-previous.svg"
            alt="Previous Icon"
            className="m-auto"
          />
        </button>
        <button
          type="button"
          aria-label="Next Image"
          className="w-10 h-10 bg-white rounded-full lg:hidden"
          onClick={handleNextImage}
        >
          <img src="images/icon-next.svg" alt="Next Icon" className="m-auto" />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
