import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PurchasesWalletIcon } from '../../../icons/main/purchases';

export const EmptyPurchasesSection = () => {
  const { logged } = useSelector(state => state.auth);

  return (
    <div className="absolute top-[45%] w-full translate-y-[-50%] text-center">
      <div className="mb-[.5rem] flex justify-center">
        {/* Icon */}
        <PurchasesWalletIcon
          className="h-[2rem] w-[2rem]"
          viewBox="0 0 20 20"
        />
      </div>

      <div className="mb-[.5rem]">
        <h2 className="text-lg font-bold">You haven't bought any item yet</h2>
      </div>

      <div>
        <p className="px-20">
          {logged
            ? 'Search for items you like and buy them first'
            : 'Sign in to sync your bought items across all your devices.'}
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
