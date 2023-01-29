import { Link, NavLink } from 'react-router-dom';
import { NavHamburgerIcon } from '../../icons/header';
import { NavSearchIcon } from '@/ecommerce/icons/header/index';
import logo from '../../../assets/images/logo.svg';

export const LeftNavBar = () => {
  return (
    <div className="w-30 flex h-full flex-nowrap items-center justify-center gap-5 sm:grow sm:justify-start md:ml-0 md:h-full md:gap-0 md:text-center xl:mr-10 xl:max-w-7xl">
      <NavHamburgerIcon className="h-[2.5em] w-[2.5em] min-w-[40px] fill-white sm:basis-1/12 md:hidden" />

      <Link
        to="/"
        className="min-w-[50px] sm:basis-1/12 md:relative md:mr-2 md:h-full md:w-10 md:basis-[10%] xl:mr-0">
        <img
          className="pointer-events-none h-10 max-h-[50px] w-full min-w-[40px] max-w-[65px] md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:m-auto md:block lg:h-full"
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
      <div className="relative mr-8 hidden w-[80%] sm:inline md:mx-auto md:mr-0 lg:w-[65%] xl:mx-0 xl:max-w-4xl xl:focus-within:w-full xl:active:w-full">
        <input
          className="w-full min-w-[300px] rounded-xl px-2 text-center placeholder:text-xs focus:placeholder:text-transparent sm:h-11 sm:max-w-4xl sm:basis-10/12 sm:rounded-2xl sm:placeholder:text-base lg:placeholder:text-lg xl:h-12 xl:basis-6/12 xl:rounded-3xl xl:text-lg"
          type="text"
          placeholder="Search for items and brands"
        />
        <button>
          <NavSearchIcon className="absolute top-[10px] right-3 mx-auto hidden h-[1.3em] w-[1.3em] fill-black text-center sm:inline md:top-[10.5px] lg:top-[.6em] lg:right-[1em] lg:h-[1.6em] lg:w-[1.6em]" />
        </button>
      </div>
    </div>
  );
};
