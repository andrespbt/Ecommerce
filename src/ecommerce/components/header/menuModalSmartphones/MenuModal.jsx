import { Transition } from '@headlessui/react';
import { ItemListMenuModal } from './ItemListMenuModal';
import { HeaderMenuModal } from './HeaderMenuModal';
import { MenCategoryListMenuModal } from './MenCategoryListMenuModal';
import { WomenCategoryListMenuModal } from './WomenCategoryListMenuModal';
import { NavHamburgerIcon } from '../../../icons/header';
import { Search } from './Search';
import { useContext } from 'react';
import { HeaderContext } from '../context/HeaderContext';

export const MenuModal = () => {
  const {
    isMenuActive,
    setIsMenuActive,
    isModalMenOpen,
    setIsModalMenOpen,
    isModalWomenOpen,
    setIsModalWomenOpen,
    isSearching,
    setIsSearching,
  } = useContext(HeaderContext);

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

  const onSearchClick = () => {
    setIsSearching(!isSearching);
    setIsMenuActive(!isMenuActive);
  };

  return (
    <>
      <NavHamburgerIcon
        className="h-[2em] w-[2em] min-w-[40px] fill-white hover:cursor-pointer sm:basis-1/12 md:hidden"
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
          className={`fixed z-20 h-full w-80 overflow-y-scroll bg-lightGrayBlue`}
          onClick={e => e.stopPropagation()}>
          {/* Header menu */}

          <HeaderMenuModal onClick={onMenuActive} />

          {/* Body menu */}

          <ItemListMenuModal
            onModalMenClick={onModalMenClick}
            onModalWomenClick={onModalWomenClick}
            onSearchClick={onSearchClick}
            setIsMenuActive={setIsMenuActive}
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
        className="absolute left-0 top-0 z-10 h-screen w-80 overflow-x-hidden overflow-y-scroll bg-lightGrayBlue md:hidden">
        <HeaderMenuModal onClick={onMenuActive} />
        <MenCategoryListMenuModal
          onClick={onModalMenClick}
          setIsMenuActive={setIsMenuActive}
        />
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
        className={`absolute left-0 top-0 z-10 h-screen w-80 overflow-x-hidden overflow-y-scroll bg-lightGrayBlue md:hidden`}>
        <HeaderMenuModal onClick={onMenuActive} />
        <WomenCategoryListMenuModal
          onClick={onModalWomenClick}
          setIsMenuActive={setIsMenuActive}
        />
      </Transition>

      <Search
        setOpen={onSearchClick}
        isOpen={isSearching}
      />
    </>
  );
};
