import { useState, useEffect, useRef, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { startLogOut } from '../../../store/auth';
import { NavHeartIcon, NavSearchIcon, NavShopIcon, NavUserIcon, NavCaretUpIcon } from '../../icons/header';
import { HeaderContext } from './context/HeaderContext';
import { Search } from './menuModalSmartphones';

export const RightNavBar = () => {
  const { email } = useSelector(state => state.auth);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const divUserIconRef = useRef();

  const { isMenuActive } = useContext(HeaderContext);

  const onRezise = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', onRezise);
    if (windowWidth > 768 || isMenuActive) {
      setIsUserMenuOpen(false);
    }

    return () => window.removeEventListener('resize', onRezise);
  }, [windowWidth, isMenuActive]);

  const onLogOut = () => {
    dispatch(startLogOut());
  };

  const onSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const onUserIconClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className="ml-3 flex h-full w-[11rem] items-center justify-between gap-3 text-xl md:justify-evenly xl:basis-1/6 xl:justify-start xl:gap-8">
      <NavSearchIcon
        className="h-[1.6em] w-[1.6em] fill-white stroke-black stroke-[0.1px] hover:cursor-pointer sm:hidden"
        onClick={onSearchClick}
        viewBox="-3 -2 20 20"
      />
      <Search
        setOpen={onSearchClick}
        isOpen={isSearchOpen}
      />

      <div className="inline-block h-full">
        <div
          className="relative flex h-full items-center hover:cursor-pointer"
          onClick={windowWidth < 768 ? onUserIconClick : null}>
          <NavUserIcon className="peer h-[1.6em] w-[1.6em] items-center fill-white stroke-[0.1px] hover:cursor-pointer md:h-[1.8em] md:w-[1.8em]" />
          {/* User menu on hover */}
          <div className="peer/user right-30 absolute top-[-40px] h-[96px] w-10 peer-hover:block md:h-[136px]"></div>
          <div
            className={`${
              isUserMenuOpen ? 'top-[17.5px] left-[-122px] w-64' : 'top-[30px] left-[-127px] hidden w-72'
            } absolute  z-10   animate-fade-in select-none overflow-hidden bg-transparent md:top-[80px] md:left-[-120px] md:hover:inline-block md:peer-hover/user:inline`}
            ref={divUserIconRef}>
            <NavCaretUpIcon className="relative left-[127px] top-0 z-50 h-fit animate-fade-in fill-gray-200 peer-hover/user:inline peer-hover/menu:inline" />
            <div
              className={`${
                email ? 'table w-full text-center' : 'flex'
              } relative top-[-15px] h-14 items-center justify-center bg-gray-200`}>
              <Link
                onClick={email ? onLogOut : ''}
                to={'/auth/login'}
                className={`w-full ${
                  email ? 'table-cell border-none align-middle text-lg' : 'border-r-2 border-r-gray-400 text-base'
                } text-center  text-gray-400 hover:cursor-pointer hover:underline`}>
                {email ? 'Logout' : 'Sign In'}
              </Link>
              <Link
                to={'/auth/register'}
                className="w-full text-center text-base text-gray-400 hover:cursor-pointer hover:underline ">
                {email ? '' : 'Join'}
              </Link>
            </div>

            {/* End User menu on hover */}
            <div
              className={`${
                isUserMenuOpen ? 'relative bottom-4' : ''
              } bg-gray-5 grid grid-cols-10 grid-rows-5 bg-gray-50 md:relative md:top-[-15px]`}>
              {/*  */}
              <div className="col-start-2 col-end-8 row-start-2 row-end-3 flex flex-row-reverse items-center justify-end hover:cursor-pointer hover:fill-gray-400 hover:text-gray-400">
                <span className="peer text-base xl:text-lg ">My Account</span>
                <NavUserIcon className="mr-2 h-[1.1em] w-[1.1em] stroke-black stroke-[0.1px] lg:h-[1.3em] lg:w-[1.3em]" />
              </div>
              {/*  */}
              <div
                className="col-start-2 col-end-8 row-start-4 row-end-5 flex flex-row-reverse items-center justify-end hover:cursor-pointer hover:fill-gray-400 hover:text-gray-400"
                onClick={() => navigate('/purchases')}>
                <span className="peer text-base xl:text-lg">My Purchases</span>
                <NavShopIcon className="mr-2 h-[1.1em] w-[1.1em] stroke-black stroke-[0.1px] lg:h-[1.3em] lg:w-[1.3em]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End User menu on hover */}

      <Link to="/favorites">
        <NavHeartIcon
          className="h-[1.4em] w-[1.4em] fill-white stroke-[0.1px] hover:cursor-pointer  md:h-[1.6em] md:w-[1.6em]"
          viewBox="-2 -2 20 20"
        />
      </Link>
      <Link to="/cart">
        <NavShopIcon className="h-[1.4em] w-[1.4em] fill-white stroke-[0.1px] hover:cursor-pointer  md:h-[1.6em] md:w-[1.6em]" />
      </Link>
    </div>
  );
};
