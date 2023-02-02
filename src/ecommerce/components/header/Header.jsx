import { LeftNavBar } from './LeftNavBar';
import { RightNavBar } from './RightNavBar';
import { SubNavbar } from './SubNavbar';

export const Header = () => {
  const currentPath =
    window.location.pathname.slice(1) === '' ? null : window.location.pathname.slice(1) === 'women' ? 'women' : 'men';

  return (
    <header className=" block bg-darkGray md:h-24">
      <nav className="flex h-[8vh] flex-nowrap items-center justify-between  px-8 py-8 md:h-full md:py-0 xl:justify-center">
        <LeftNavBar />
        <RightNavBar />
      </nav>
      {/* Sub navbar */}
      {(window.location.pathname.includes('women') || window.location.pathname.includes('men')) && (
        <SubNavbar currentPath={currentPath} />
      )}
    </header>
  );
};
