import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import { MenuModal, SearchBigScreenModal } from './index';

import { NavSearchIcon } from '../../icons/header/NavSearchIcon.jsx';
import { useContext } from 'react';
import { HeaderContext } from './context/HeaderContext';

export const LeftNavBar = () => {
  const { isSearchingBigScreen, setIsSearchingBigScreen } = useContext(HeaderContext);

  return (
    <div className="w-30 flex h-full flex-nowrap items-center justify-center gap-5 sm:grow sm:justify-start md:ml-0 md:h-full md:gap-0 md:text-center xl:mr-10 xl:max-w-7xl">
      <MenuModal />
      <Link
        to="/"
        className="min-w-[50px] sm:basis-1/12 md:relative md:mr-2 md:h-full md:w-10 md:basis-[10%] xl:mr-0">
        <img
          className="pointer-events-none h-10 max-h-[50px] w-full min-w-[40px] max-w-[65px] md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:m-auto md:mr-2 md:h-full md:min-w-[65px] xl:mr-8 xl:min-h-[60px] xl:min-w-[70px]"
          src={logo}
          alt="Logo"
        />
      </Link>
      <ul className="hidden h-full items-center text-center font-bold text-white md:mr-4 md:flex md:basis-1/3 md:align-top md:text-lg lg:font-semibold xl:basis-1/5">
        <li className=" table h-full w-full min-w-[85px] border-x-[1px] border-x-gray-600">
          <NavLink
            to="/men"
            className="table-cell align-middle">
            Men
          </NavLink>
        </li>

        <li className="table h-full w-full min-w-[85px] border-r-[1px] border-r-gray-600">
          <NavLink
            to="/women"
            className="table-cell align-middle">
            Women
          </NavLink>
        </li>
      </ul>

      <div
        className={`${
          isSearchingBigScreen ? 'opacity-0' : 'bg-white'
        } relative mr-8 hidden w-[80%] min-w-[300px] divide-y overflow-hidden rounded-xl   shadow-2xl ring-1 ring-black/5 sm:inline md:mx-auto md:mr-0 lg:w-[65%] xl:mx-0 xl:max-w-4xl`}
        onClick={() => setIsSearchingBigScreen(true)}>
        <input
          className="w-full border-0 px-3 placeholder:text-xs focus:outline-0 sm:h-11 sm:max-w-4xl sm:basis-10/12 sm:rounded-2xl sm:placeholder:text-base xl:h-12 xl:basis-6/12 xl:rounded-3xl xl:text-lg"
          type="text"
          placeholder="Search for items and brands"
        />
        <button>
          <NavSearchIcon
            className="absolute top-[10px] right-3 mx-auto hidden h-[1.3em] w-[1.3em] fill-black stroke-black text-center sm:inline md:top-[10.5px] lg:top-[.6em] lg:right-[1em] lg:h-[1.6em] lg:w-[1.6em]"
            viewBox="-2 -2 20 20"
            onClick={() => setIsSearchingBigScreen(true)}
          />
        </button>
        <SearchBigScreenModal />
      </div>
    </div>
  );
};
