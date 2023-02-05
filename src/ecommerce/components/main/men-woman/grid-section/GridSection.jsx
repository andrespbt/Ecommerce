import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ManImageShirts from '../../../../../assets/images/man-manwoman-grid-section-1.webp';
export const GridSection = () => {
  const modalRef = useRef();
  const textContainerRef = useRef();

  const onMouseEnterCard = () => {
    modalRef.current.classList.remove('hidden');
    textContainerRef.current.classList.add('text-white', 'z-50');
  };

  const onMouseLeaveCard = () => {
    modalRef.current.classList.add('hidden');
  };
  return (
    <section className="my-40 grid lg:grid-cols-12 lg:grid-rows-3">
      {/* Text */}
      <div className="flex h-[400px] w-full flex-col items-center justify-evenly bg-latteFroth">
        <h3 className="text-3xl font-bold uppercase">Men's New Arrivals</h3>
        <div className="font-semibold">
          <span className="block">Our latest best-selling essentials,</span>
          <span>updated in new colors for the season.</span>
        </div>
      </div>

      {/* Cards */}
      <div
        className="relative hover:cursor-pointer"
        onMouseEnter={onMouseEnterCard}
        onMouseLeave={onMouseLeaveCard}>
        <Link to="/men/category/shirts">
          <img
            className="peer"
            src={ManImageShirts}
            alt="Man shirt model"
          />
          <div
            ref={textContainerRef}
            className="absolute bottom-36 left-10 font-semibold">
            <h3 className="mb-6 text-xl">SHIRTS</h3>
            <span className="text base">Discover now</span>
          </div>
          <div
            ref={modalRef}
            className="absolute inset-0 hidden animate-fade-in bg-black/25"></div>
        </Link>
      </div>
    </section>
  );
};
