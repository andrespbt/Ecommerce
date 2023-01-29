import { NavHamburgerIcon } from '@/ecommerce/icons/header/index';
import { useState } from 'react';

export const MenuModal = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <>
      <NavHamburgerIcon
        className="h-[2.5em] w-[2.5em] min-w-[40px] fill-white hover:cursor-pointer sm:basis-1/12 md:hidden"
        onClick={() => setIsMenuActive(!isMenuActive)}
      />
      <div
        onClick={() => setIsMenuActive(false)}
        className={`absolute left-0 top-0 z-10 h-screen w-full bg-black/25  md:hidden ${
          isMenuActive ? 'block' : 'hidden'
        }`}>
        <div
          className="z-20 h-screen w-80 animate-slideInLeft bg-gray-300"
          onClick={e => e.stopPropagation()}>
          {/* Header menu */}

          {/* Body menu */}

          {/* Footer menu */}
        </div>
      </div>
    </>
  );
};
