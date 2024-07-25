import { useState } from 'react';
import leftArrow from '../../assets/personalProfileIcons/leftArrow.svg';
import rightArrow from '../../assets/personalProfileIcons/rightArrow.svg';
import { datingAdviceArray } from '../../utils/mainContentData';

const DatingTips = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 2;

  const handleNext = () => {
    if (currentIndex < datingAdviceArray.length - cardsPerPage) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  return (
    <>
      <p className="text-[20px] lg:text-[25px] sm:text-[22px] md:text-[25px] text-center text-black font-bold pt-6 lg:pt-12">
        Dating Advice
      </p>
      <p className="lg:text-lg text-black pt-4 text-center w-full">
        Starting a journey in the world of dating can be both exciting and daunting.
        <br /> Here are some tips to help you navigate this journey and build a successful and meaningful relationship:
      </p>
      <div className="flex justify-center mt-12">
        <div className="flex  sm:gap-4 lg:gap-8">
          <div className="mt-52">
            <button
              className="bg-blue-500 rounded-3xl sm:w-8  md:h-9 md:w-9 sm:h-8 w-7 h-7 lg:w-12 lg:h-12"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <img src={leftArrow} alt="Left" className="w-5 h-5 ml-1 lg:ml-4 invert" />
            </button>
          </div>
          {datingAdviceArray
            .slice(currentIndex, currentIndex + cardsPerPage)
            .map((datingAdviceItem, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg  lg:w-72 mb-14">
                <img src={datingAdviceItem.img} alt={datingAdviceItem.name} className="" />
                <p className="text-black lg:text-lg text-center pt-1 font-semibold">
                  {datingAdviceItem.name}
                </p>
                <p className="lg:text-md text-black text-center pl-2 pr-2 pb-3  ">{datingAdviceItem.data}</p>
              </div>
            ))}
          <div className="mt-52">
            <button
              className="bg-blue-500 rounded-3xl w-7 h-7 sm:w-8 sm:h-8 md:h-9 md:w-9 lg:w-12 lg:h-12"
              onClick={handleNext}
              disabled={currentIndex >= datingAdviceArray.length - cardsPerPage}
            >
              <img src={rightArrow} alt="Right" className="ml-1 w-5 h-5 lg:ml-4 invert" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatingTips;
