import { LeftNavBar } from './LeftNavBar';
import { RightNavBar } from './RightNavBar';

export const Header = () => {
  return (
    <header className="bg-darkGray md:h-24">
      <nav className="flex h-[8vh] flex-nowrap items-center justify-between  px-4 py-8 md:h-full md:py-0 xl:justify-center">
        <LeftNavBar />
        <RightNavBar />
      </nav>
    </header>
  );
};
