import { Link, NavLink } from 'react-router-dom';
import Image from '@/assets/images/logo_single.png';
import { NavHamburgerIcon } from '../../icons/header';
import { NavSearchIcon } from '@/ecommerce/icons/header/index';

export const LeftNavBar = () => {
  return (
    <div className="ml-7 flex items-center justify-between gap-5 sm:grow sm:justify-start md:h-full md:justify-between">
      <NavHamburgerIcon className="scale-150 sm:basis-1/12 md:hidden" />

      <Link
        to="/"
        className="sm:basis-1/12">
        <img
          className="pointer-events-none h-8"
          src={Image}
          alt="Logo"
        />
      </Link>

      <NavLink
        to="/men"
        className="hidden font-bold text-white md:inline">
        Men
      </NavLink>
      <NavLink
        to="/women"
        className="hidden font-bold text-white md:inline">
        Women
      </NavLink>
      <div className="relative mr-8 hidden w-[80%] sm:inline md:w-[60%]">
        <input
          className="w-full rounded-xl px-2 text-center placeholder:text-xs focus:placeholder:text-transparent sm:basis-10/12"
          type="text"
          placeholder="Search for items and brands"
        />
        <button>
          <NavSearchIcon className="absolute top-1 right-2 mx-auto hidden fill-black text-center sm:inline" />
        </button>
      </div>
    </div>
  );
};
