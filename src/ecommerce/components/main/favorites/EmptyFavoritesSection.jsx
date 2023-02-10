import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FavoriteHeartBreak } from '../../../icons/main/favorite';

export const EmptyFavoritesSection = () => {
  const { logged } = useSelector(state => state.auth);

  console.log(logged);

  return (
    <div className="absolute top-[45%] w-full translate-y-[-50%] text-center">
      <div className="mb-[.5rem] flex justify-center">
        {/* Icon */}
        <FavoriteHeartBreak
          className="h-[2rem] w-[2rem]"
          viewBox="0 0 20 20"
        />
      </div>

      <div className="mb-[.5rem]">
        <h2 className="text-lg font-bold">You have no Saved Items</h2>
      </div>

      <div>
        <p className="px-20">
          {logged
            ? 'Add items to favorites by clicking in the heart button'
            : 'Sign in to sync your Saved Items across all your devices.'}
        </p>
      </div>

      {!logged && (
        <div className="mt-[1rem] w-full">
          <Link to="/auth/login">
            <button className="h-[40px] w-[15rem] bg-[#2C2D2C] font-bold text-white">SIGN IN</button>
          </Link>
        </div>
      )}
    </div>
  );
};
