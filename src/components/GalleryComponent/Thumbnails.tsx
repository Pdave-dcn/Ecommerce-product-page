import { ThumbnailsType } from "../types/types";

const Thumbnails = ({
  thumbnails,
  handleThumbnailClick,
  customStyle,
  overlayStyle,
  display,
  currentImage,
}: ThumbnailsType) => {
  return (
    <>
      <div className={`${customStyle}`}>
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            onClick={() => {
              handleThumbnailClick(index);
            }}
            className={`relative cursor-pointer ${display}`}
          >
            <img
              src={`${thumbnail}`}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 rounded-lg ${
                currentImage === index ? "opacity-50" : "hover:opacity-75"
              }`}
            />
            {currentImage === index && (
              <div
                className={`absolute border-2 border-orange inset-0 rounded-lg ${overlayStyle}`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Thumbnails;
