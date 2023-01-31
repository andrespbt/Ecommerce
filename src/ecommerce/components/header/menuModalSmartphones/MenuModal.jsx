import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Transition } from '@headlessui/react';
import { NavHamburgerIcon } from '@/ecommerce/icons/header/index';
import AddUserImage from '@/assets/images/addPhotoUser.png';
import { ItemListMenuModal } from './ItemListMenuModal';

export const MenuModal = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const { photoURL, displayName, logged } = useSelector(state => state.auth);

  return (
    <>
      <NavHamburgerIcon
        className="h-[2.5em] w-[2.5em] min-w-[40px] fill-white hover:cursor-pointer sm:basis-1/12 md:hidden"
        onClick={() => setIsMenuActive(!isMenuActive)}
      />
      <Transition
        show={isMenuActive}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        onClick={() => setIsMenuActive(false)}
        className={`absolute left-0 top-0 z-10 h-screen w-full overflow-x-hidden overflow-y-hidden bg-black/40 md:hidden`}>
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
          className={`z-20 h-full w-80 overflow-y-scroll bg-lightGrayBlue`}
          onClick={e => e.stopPropagation()}>
          {/* Header menu */}

          <div className="flex h-40 w-full items-center justify-center gap-5 bg-gray-200">
            <img
              className="h-16 w-16 min-w-[64px] rounded-full border-2 border-gray-200 ring-4 ring-gray-700 ring-offset-4 hover:cursor-pointer"
              src={photoURL ? photoURL : AddUserImage}
              alt="Profile photo user"
            />

            <span className={`${displayName?.length > 16 ? 'text-base' : 'text-lg'} max-w-[200px]`}>
              {displayName ? displayName : 'User'}
            </span>
          </div>

          {/* Body menu */}

          <ItemListMenuModal />

          {/* Footer menu */}
        </Transition.Child>
      </Transition>
    </>
  );
};
