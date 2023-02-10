import { useContext } from 'react';
import { useEffect, useState, useRef } from 'react';
import { HeaderContext } from './context/HeaderContext';
import { LeftNavBar } from './LeftNavBar';
import { RightNavBar } from './RightNavBar';
import { SubNavbar } from './SubNavbar';

export const Header = () => {
  const { isSearchingBigScreen } = useContext(HeaderContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavBar, setShowNavBar] = useState(true);
  const headerRef = useRef();
  const currentPath =
    window.location.pathname.slice(1) === '' ? null : window.location.pathname.includes('women') ? 'women' : 'men';

  const onScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > scrollPosition && !isSearchingBigScreen && scrollPosition > 700) {
        setShowNavBar(false);
      } else {
        if (!showNavBar) {
          headerRef.current?.addEventListener('animationend', removeAnimation);
        }
        setShowNavBar(true);
      }

      setScrollPosition(window.scrollY);
    }
  };

  const removeAnimation = () => {
    headerRef.current?.addEventListener('animationend', headerRef.current.classList.remove('animate-fade-in-down'));
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollPosition]);

  console.log(showNavBar);

  return (
    <header
      ref={headerRef}
      className={`will-change-scroll ${showNavBar ? 'sticky-top' : ''} ${
        isSearchingBigScreen ? 'w-full' : ''
      } bg-darkGray md:h-24`}>
      <nav className="flex h-[8vh] flex-nowrap items-center justify-between  px-8 py-8 md:h-full md:py-0 xl:justify-center">
        <LeftNavBar />
        <RightNavBar />
      </nav>
      {/* Sub navbar */}
      {(window.location.pathname.includes('women') || window.location.pathname.includes('men')) && (
        <SubNavbar
          currentPath={currentPath}
          isOpen={currentPath ? true : false}
        />
      )}
    </header>
  );
};
