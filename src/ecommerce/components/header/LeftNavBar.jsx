import { Link, NavLink } from 'react-router-dom';
import { NavHamburgerIcon } from '../../icons/header';
import { NavSearchIcon } from '@/ecommerce/icons/header/index';
import logo from '../../../assets/images/logo.svg';

export const LeftNavBar = () => {
  return (
    <div className="flex items-center justify-between gap-5 sm:grow sm:justify-start md:ml-0 md:h-full md:gap-0 md:text-center xl:mr-10 xl:max-w-7xl">
      <NavHamburgerIcon className="mr-2 scale-150 sm:basis-1/12 md:hidden" />

      <Link
        to="/"
        className="sm:basis-1/12 md:relative md:mr-2 md:h-full md:w-10 md:basis-[10%] xl:mr-0">
        <img
          className="pointer-events-none h-10 max-h-[50px] w-full max-w-[65px] md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:m-auto md:block lg:h-full"
          src={logo}
          alt="Logo"
        />
      </Link>
      <ul className="hidden h-full items-center text-center font-bold text-white md:mr-4 md:flex md:basis-1/3 md:align-top lg:text-lg lg:font-semibold xl:basis-1/5">
        <li className=" table h-full w-full border-x-[1px] border-x-gray-600">
          {' '}
          <NavLink
            to="/men"
            className="table-cell align-middle">
            Men
          </NavLink>
        </li>

        <li className="table h-full w-full border-r-[1px] border-r-gray-600">
          <NavLink
            to="/women"
            className="table-cell align-middle">
            Women
          </NavLink>
        </li>
      </ul>
      <div className="relative mr-8 hidden w-[80%] sm:inline md:mx-auto md:mr-0 lg:w-[65%] xl:mx-0 xl:max-w-4xl xl:focus-within:w-full xl:active:w-full">
        <input
          className="w-full rounded-xl px-2 text-center placeholder:text-xs focus:placeholder:text-transparent sm:basis-10/12 md:h-7 lg:h-11 lg:max-w-4xl lg:rounded-2xl lg:placeholder:text-lg xl:h-12 xl:basis-6/12 xl:rounded-3xl xl:text-lg"
          type="text"
          placeholder="Search for items and brands"
        />
        <button>
          <NavSearchIcon className="absolute top-1 right-2 mx-auto hidden fill-black text-center sm:inline md:top-[.3rem] lg:top-[.6em] lg:right-[1em] lg:h-[1.6em] lg:w-[1.6em]" />
        </button>
      </div>
    </div>
  );
};
