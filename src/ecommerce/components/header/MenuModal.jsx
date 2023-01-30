import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavHamburgerIcon } from '@/ecommerce/icons/header/index';
import AddUserImage from '../../../assets/images/addPhotoUser.png';

export const MenuModal = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { photoURL, displayName, logged } = useSelector(state => state.auth);

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
          className={`z-20 h-screen w-80 animate-slideInLeft bg-gray-300`}
          onClick={e => e.stopPropagation()}>
          {/* Header menu */}

          <div className="h-40 bg-gray-100">
            <img
              className="h-16 w-16 rounded-full border-2 border-gray-200 ring-4 ring-gray-700 ring-offset-4 "
              src={photoURL ? photoURL : AddUserImage}
              alt="Profile photo user"
            />

            <span>{}</span>
          </div>

          {/* Body menu */}

          {/* Footer menu */}
        </div>
      </div>
    </>
  );
};
