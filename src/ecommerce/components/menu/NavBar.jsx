import { NavBarLink } from './NavBarLink';
import LogoSneakers from '@/assets/images/logo.svg';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="mt-[3rem] mb-[4rem] flex gap-6 ">
      <Link to="/">
        <img
          className="pointer-events-none h-8"
          src={LogoSneakers}
          alt="Logo"
        />
      </Link>

      <NavBarLink
        to={'/Collections'}
        text={'Collections'}
      />
      <NavBarLink
        to={'/Men'}
        text={'Men'}
      />
      <NavBarLink
        to={'/Women'}
        text={'Women'}
      />
      <NavBarLink
        to={'/About'}
        text={'About'}
      />
      <NavBarLink
        to={'/Contact'}
        text={'Contact'}
      />
    </nav>
  );
};
