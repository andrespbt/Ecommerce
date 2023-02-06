import { useRef } from 'react';
import { Link } from 'react-router-dom';

export const CardGridSection = ({ image, imageAlt, category, textContainerClass, textH3, textSpan, gridPosition }) => {
  const modalRef = useRef();
  const textContainerRef = useRef();
  const spanTextRef = useRef();

  const onMouseEnterCard = () => {
    modalRef.current.classList.remove('hidden');
    textContainerRef.current.classList.add('text-white', 'z-50', 'translate-x-[5%]', 'text-center');
    spanTextRef.current.classList.add('underline');
  };

  const onMouseLeaveCard = () => {
    modalRef.current.classList.add('hidden');
    textContainerRef.current.classList.remove('text-white', 'z-50', 'translate-x-[5%]', 'text-center');
    spanTextRef.current.classList.remove('underline');
  };

  return (
    <div
      className={`${gridPosition} relative hover:cursor-pointer`}
      onMouseEnter={onMouseEnterCard}
      onMouseLeave={onMouseLeaveCard}>
      <Link to={`/men/category/${category}`}>
        <img
          className="h-full max-h-[600px] w-full object-cover lg:max-h-[1000px]"
          src={image}
          alt={imageAlt}
        />
        <div
          ref={textContainerRef}
          className={`${textContainerClass} absolute bottom-36 left-0 right-0 w-full px-5 font-semibold transition duration-200 ease-linear`}>
          <h3 className="mb-6 text-xl uppercase md:text-4xl">{textH3 ? textH3 : category}</h3>
          <span
            className={`text-base md:text-lg`}
            ref={spanTextRef}>
            {textSpan ? textSpan : 'Discover Now'}
          </span>
        </div>
        <div
          ref={modalRef}
          className="absolute inset-0 hidden animate-fade-in bg-black/25"></div>
      </Link>
    </div>
  );
};
