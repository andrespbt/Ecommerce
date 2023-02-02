import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Search } from './index';
import { startLogOut } from '../../../store/auth';
import { NavHeartIcon, NavSearchIcon, NavShopIcon, NavUserIcon, NavCaretUpIcon } from '../../icons/header';

export const RightNavBar = () => {
  const { status } = useSelector(state => state.auth);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(startLogOut());
  };

  const onSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="ml-3 flex h-full w-40 items-center justify-between gap-3 text-xl md:justify-evenly xl:basis-1/6 xl:justify-start xl:gap-8">
      <NavSearchIcon
        className="h-[1.4em] w-[1.4em] fill-white stroke-black stroke-[0.1px] hover:cursor-pointer sm:hidden"
        onClick={onSearchClick}
      />
      <Search
        setOpen={onSearchClick}
        isOpen={isSearchOpen}
      />

      <div className="inline-block h-full">
        <div className="relative flex h-full items-center hover:cursor-pointer">
          <NavUserIcon className="peer h-[1.6em] w-[1.6em] items-center fill-white stroke-[0.1px] hover:cursor-pointer md:h-[1.8em] md:w-[1.8em]" />
          <div className="peer/user right-30 absolute top-0 h-[96px] w-10 peer-hover:block"></div>
          {/* User menu on hover */}

          <div className="absolute left-[-127px] top-[25px] hidden h-fit w-72 animate-fade-in overflow-hidden bg-transparent md:top-[65px] md:left-[-120px] md:hover:inline-block md:peer-hover/user:inline">
            <NavCaretUpIcon className="relative left-[127px] top-3 h-fit animate-fade-in fill-gray-200 peer-hover/user:inline peer-hover/menu:inline" />
            <div
              className={`${
                status === 3 ? 'table w-full text-center' : 'flex'
              } h-14 items-center justify-center bg-gray-200`}>
              <Link
                onClick={status === 3 ? onLogOut : ''}
                to={'/auth/login'}
                className={`w-full ${
                  status === 3
                    ? 'table-cell border-none align-middle text-lg'
                    : 'border-r-2 border-r-gray-400 text-base'
                } text-center  text-gray-400 hover:cursor-pointer hover:underline`}>
                {status === 3 ? 'Logout' : 'Sign In'}
              </Link>
              <Link
                to={'/auth/register'}
                className="w-full text-center text-base text-gray-400 hover:cursor-pointer hover:underline ">
                {status === 3 ? '' : 'Join'}
              </Link>
            </div>

            {/* End User menu on hover */}

            <div className="bg-gray-5 grid grid-cols-10 grid-rows-5 bg-gray-50">
              {/*  */}
              <div className="col-start-2 col-end-8 row-start-2 row-end-3 flex flex-row-reverse items-center justify-end hover:cursor-pointer hover:fill-gray-400 hover:text-gray-400">
                <span className="peer text-base xl:text-lg ">My Account</span>
                <NavUserIcon className="mr-2 h-[1.1em] w-[1.1em] stroke-black stroke-[0.1px] lg:h-[1.3em] lg:w-[1.3em]" />
              </div>
              {/*  */}
              <div className="col-start-2 col-end-8 row-start-4 row-end-5 flex flex-row-reverse items-center justify-end hover:cursor-pointer hover:fill-gray-400 hover:text-gray-400">
                <span className="peer text-base xl:text-lg">My orders</span>
                <NavShopIcon className="mr-2 h-[1.1em] w-[1.1em] stroke-black stroke-[0.1px] lg:h-[1.3em] lg:w-[1.3em]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NavHeartIcon className="h-[1.4em] w-[1.4em] fill-white stroke-[0.1px] hover:cursor-pointer  md:h-[1.6em] md:w-[1.6em]" />
      <NavShopIcon className="h-[1.4em] w-[1.4em] fill-white stroke-[0.1px] hover:cursor-pointer  md:h-[1.6em] md:w-[1.6em]" />
    </div>
  );
};
