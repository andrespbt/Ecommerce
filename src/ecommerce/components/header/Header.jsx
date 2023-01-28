import { LeftNavBar } from './LeftNavBar';
import { RightNavBar } from './RightNavBar';

export const Header = () => {
  return (
    <header>
      <nav className="flex h-[8vh] items-center justify-between bg-orange py-8  ">
        <LeftNavBar />
        <RightNavBar />
      </nav>
    </header>
  );
};
