import { Link, NavLink } from 'react-router-dom';

import { MenuModal, SearchBigScreenModal } from './index';

export const LeftNavBar = () => {
  return (
    <div className="w-30 flex flex-nowrap items-center justify-center gap-1 sm:grow sm:justify-start md:ml-0 md:h-full md:gap-0 md:text-center xl:mr-10 xl:max-w-7xl">
      <MenuModal />
      <Link
        to="/"
        className="min-w-[50px] sm:basis-1/12 md:relative md:mr-2 md:h-full md:w-10 md:basis-[10%] lg:ml-2 lg:w-full xl:mr-0">
        <img
          className="pointer-events-none h-10 max-h-[50px] w-full min-w-[40px] max-w-[65px] md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:m-auto md:mr-2 md:h-full md:min-w-[65px] xl:mr-8 xl:min-h-[60px] xl:min-w-[70px]"
          src="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675806988/ecommerceImages/logo_single_w98dcf.png"
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

      <SearchBigScreenModal />
    </div>
  );
};
