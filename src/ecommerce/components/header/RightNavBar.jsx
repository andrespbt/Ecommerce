import { NavHeartIcon, NavSearchIcon, NavShopIcon, NavUserIcon } from '@/ecommerce/icons/header';

export const RightNavBar = () => {
  return (
    <div className="mr-7 flex w-40 items-center justify-between text-xl sm:justify-around">
      <NavSearchIcon className="sm:hidden" />
      <NavUserIcon className="h-[1em] w-[1em] sm:h-[1.3em] sm:w-[1.3em]" />
      <NavHeartIcon className="h-[1em] w-[1em] sm:h-[1.1em] sm:w-[1.1em]" />
      <NavShopIcon className="h-[1em] w-[1em] sm:h-[1.2em] sm:w-[1.2em]" />
    </div>
  );
};
