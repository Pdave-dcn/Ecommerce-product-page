import { PreviousNextBtnsType } from "../types/types";

const PreviousNextBtns = ({
  handleNextImage,
  handlePreviousImage,
  customStyle,
  dimension,
  iconClass,
  buttonClass,
}: PreviousNextBtnsType) => {
  return (
    <>
      <div
        className={`absolute flex items-center justify-between inset-0 ${customStyle}`}
      >
        <button
          type="button"
          aria-label="Previous Image"
          className={`${dimension} bg-white rounded-full ${buttonClass}`}
          onClick={handlePreviousImage}
        >
          <img
            src="images/icon-previous.svg"
            alt="Previous Icon"
            className={`m-auto ${iconClass}`}
          />
        </button>
        <button
          type="button"
          aria-label="Next Image"
          className={`${dimension} bg-white rounded-full ${buttonClass}`}
          onClick={handleNextImage}
        >
          <img
            src="images/icon-next.svg"
            alt="Next Icon"
            className={`m-auto ${iconClass}`}
          />
        </button>
      </div>
    </>
  );
};

export default PreviousNextBtns;
