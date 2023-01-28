import { NavLink } from 'react-router-dom';

export const NavBarLink = ({ text, to }) => {
  return (
    <NavLink
      to={to}
      className="pointer-events-auto my-auto mt-1  text-lg text-darkGrayBlue 
      hover:divide-y-8"
      href="#">
      {text}
    </NavLink>
  );
};
