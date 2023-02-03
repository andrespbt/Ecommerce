import { NavLink } from 'react-router-dom';
import { Transition, Popover } from '@headlessui/react';

export const SubNavbar = ({ currentPath, isOpen }) => {
  const dynamicCategory = currentPath === 'men' ? 'Shirts' : 'Dresses';
  return (
    <Popover className="relative hidden animate-fade-in-down md:inline">
      <Transition
        show={isOpen}
        className="h-14 bg-lightGray">
        <Popover.Panel className="absolute inset-0 z-10 m-auto flex w-96 items-center justify-around gap-5 text-base font-bold text-white xl:text-lg">
          <NavLink
            to={`/${currentPath}/${dynamicCategory.toLowerCase()}`}
            className={({ isActive }) => (isActive ? 'inline-block w-full text-xl' : 'inline-block w-full ')}>
            {dynamicCategory}
          </NavLink>
          <NavLink
            to={`/${currentPath}/shoes`}
            className={({ isActive }) => (isActive ? 'inline-block w-full text-xl' : 'inline-block w-full ')}>
            Shoes
          </NavLink>
          <NavLink
            to={`/${currentPath}/watches`}
            className={({ isActive }) => (isActive ? 'inline-block w-full text-xl' : 'inline-block w-full ')}>
            Watches
          </NavLink>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
