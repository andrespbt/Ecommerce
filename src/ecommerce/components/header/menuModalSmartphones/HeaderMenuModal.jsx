import { useSelector } from 'react-redux';
import AddUserImage from '../../../../assets/images/addPhotoUser.png';
import { NavMenuModalCloseIcon } from '../../../icons/header';

export const HeaderMenuModal = ({ onClick }) => {
  const { photoURL, displayName, logged } = useSelector(state => state.auth);

  return (
    <div className="flex h-40 w-full items-center justify-center gap-5 bg-gray-200">
      <NavMenuModalCloseIcon
        className="absolute top-2 right-2 h-[3em] w-[3em] hover:cursor-pointer"
        onClick={onClick}
      />
      <img
        className="h-16 w-16 min-w-[64px] rounded-full border-2 border-gray-200 ring-4 ring-gray-700 ring-offset-4 hover:cursor-pointer"
        src={photoURL ? photoURL : AddUserImage}
        alt="Profile photo user"
      />

      <span className={`${displayName?.length > 16 ? 'text-base' : 'text-lg'} max-w-[200px]`}>
        {displayName ? displayName : 'User'}
      </span>
    </div>
  );
};
