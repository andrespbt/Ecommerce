import { useEffect, useRef, useState } from 'react';
import { SliderArrowLeftIcon, SliderArrowRightIcon } from '../../../icons/main/slider';

const featuredImages = [
  'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1805411/pexels-photo-1805411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  'https://images.pexels.com/photos/609771/pexels-photo-609771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();

  const divStyle = {
    backgroundImage: `url(${featuredImages[`${currentIndex}`]})`,
  };

  const removeAnimation = () => {
    slideRef.current?.addEventListener('animationend', slideRef.current.classList.remove('animate-slideInRight'));

    slideRef.current?.addEventListener('animationend', slideRef.current.classList.remove('animate-slideInLeft'));
  };

  useEffect(() => {
    let timeout = setInterval(() => {
      slideRef.current?.classList.add('animate-slideInRight');
      setCurrentIndex((currentIndex + 1) % featuredImages.length);
    }, 5000);

    return () => {
      slideRef.current?.addEventListener('animationend', removeAnimation);
      clearTimeout(timeout);
    };
  }, [currentIndex]);

  const onPrevClick = () => {
    setCurrentIndex((currentIndex - 1 + featuredImages.length) % featuredImages.length);
    slideRef.current?.classList.add('animate-slideInRight');
  };

  const onNextClick = () => {
    setCurrentIndex((currentIndex + 1) % featuredImages.length);
    slideRef.current?.classList.add('animate-slideInLeft');
  };

  return (
    <div className="m-auto max-w-screen-xl lg:max-w-none">
      <div className="select-non relative">
        <div
          ref={slideRef}
          style={divStyle}
          className="peer relative h-[400px] w-full bg-cover bg-center bg-no-repeat md:h-[500px] lg:h-[600px]"></div>
        <div className="absolute top-1/2 hidden  w-full -translate-y-1/2 transform animate-fade-in items-start justify-between px-3  hover:flex peer-hover:flex md:justify-around md:gap-60 xl:justify-between xl:p-16 ">
          <button
            onClick={onPrevClick}
            className=" h-[50px] w-[50px]">
            <SliderArrowLeftIcon
              className="h-[2.5em] w-[2.5em] fill-white md:h-[3rem] md:w-[3rem] xl:h-[4rem] xl:w-[4rem]"
              viewBox="0 0 20 20"
            />
          </button>
          <div className="relative top-[180px] flex w-40 justify-between md:top-[220px] xl:top-[260px] xl:w-60">
            {featuredImages.map((slide, slideIndex) => (
              <button
                key={slideIndex}
                className={`${
                  slideIndex === currentIndex ? 'bg-black' : 'bg-white'
                } h-[.8rem] w-[.8rem] rounded-full xl:h-[1.2rem] xl:w-[1.2rem]`}
                onClick={() => {
                  slideRef.current?.classList.add('animate-slideInRight');
                  setCurrentIndex(slideIndex);
                }}></button>
            ))}
          </div>

          <button
            onClick={onNextClick}
            className="h-[50px] w-[50px]">
            {' '}
            <SliderArrowRightIcon
              className="h-[2.5em] w-[2.5em] fill-white md:h-[3rem] md:w-[3rem] xl:h-[4rem] xl:w-[4rem]"
              viewBox="0 0 20 20"
            />
          </button>
        </div>
      </div>
    </div>
  );
};