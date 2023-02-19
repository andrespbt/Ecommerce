import { useContext } from 'react';
import { useEffect, useState, useRef } from 'react';
import { HeaderContext } from './context/HeaderContext';
import { LeftNavBar, SubNavbar, RightNavBar } from './';

export const Header = () => {
  const { isSearchingBigScreen } = useContext(HeaderContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNavBar, setShowNavBar] = useState(true);
  const headerRef = useRef();
  const path = window.location.href.split('/')[4];
  const currentPath = !path ? null : window.location.href?.split('/')[4].includes('women') ? 'women' : 'men';

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

  return (
    <header
      ref={headerRef}
      className={`will-change-scroll ${showNavBar ? 'sticky top-0 z-50' : ''} ${
        isSearchingBigScreen ? 'w-full' : ''
      } bg-darkGray md:block md:h-24`}>
      <nav className="flex h-[8vh] flex-nowrap items-center  justify-between px-8 py-8 md:h-full md:py-0 xl:justify-center">
        <LeftNavBar />
        <RightNavBar />
      </nav>
      {/* Sub navbar */}
      {(window.location.href?.includes('women') || window.location.href?.includes('men')) && (
        <SubNavbar
          currentPath={currentPath}
          isOpen={currentPath ? true : false}
        />
      )}
    </header>
  );
};
