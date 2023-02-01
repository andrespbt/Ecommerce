import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { NavHamburgerIcon } from '@/ecommerce/icons/header/index';
import { ItemListMenuModal } from './ItemListMenuModal';
import { HeaderMenuModal } from './HeaderMenuModal';
import { MenCategoryListMenuModal } from './MenCategoryListMenuModal';
import { WomenCategoryListMenuModal } from './WomenCategoryListMenuModal';

export const MenuModal = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isModalMenOpen, setIsModalMenOpen] = useState(false);
  const [isModalWomenOpen, setIsModalWomenOpen] = useState(false);

  const onMenuActive = () => {
    if (isModalMenOpen) setIsModalMenOpen(false);
    if (isModalWomenOpen) setIsModalWomenOpen(false);
    setIsMenuActive(!isMenuActive);
  };

  const onModalMenClick = () => {
    setIsModalMenOpen(!isModalMenOpen);
  };
  const onModalWomenClick = () => {
    setIsModalWomenOpen(!isModalWomenOpen);
  };

  return (
    <>
      <NavHamburgerIcon
        className="h-[2.5em] w-[2.5em] min-w-[40px] fill-white hover:cursor-pointer sm:basis-1/12 md:hidden"
        onClick={onMenuActive}
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

          <HeaderMenuModal onClick={onMenuActive} />

          {/* Body menu */}

          <ItemListMenuModal
            onModalMenClick={onModalMenClick}
            onModalWomenClick={onModalWomenClick}
          />

          {/* Footer menu */}
        </Transition.Child>
      </Transition>

      {/* Men Categories */}

      <Transition
        show={isModalMenOpen && isMenuActive}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute left-0 top-0 z-10 h-full w-80 overflow-x-hidden overflow-y-scroll bg-lightGrayBlue md:hidden">
        <HeaderMenuModal onClick={onMenuActive} />
        <MenCategoryListMenuModal onClick={onModalMenClick} />
      </Transition>

      {/* Women Categories */}

      <Transition
        show={isModalWomenOpen && isMenuActive}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className={`absolute left-0 top-0 z-10 h-full w-80 overflow-x-hidden overflow-y-scroll bg-lightGrayBlue md:hidden`}>
        <HeaderMenuModal onClick={onMenuActive} />
        <WomenCategoryListMenuModal onClick={onModalWomenClick} />
      </Transition>
    </>
  );
};
