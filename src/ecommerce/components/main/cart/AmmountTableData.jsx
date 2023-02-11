import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCounter } from '../../../../hooks/useCounter';
import { startUpdatingAmmount } from '../../../../store/ecommerce/thunks';

export const AmmountTableData = ({ id, title, img, price, discount, ammount }) => {
  const dispatch = useDispatch();
  const { counter, increment, decrement } = useCounter(ammount);

  useEffect(() => {
    if (ammount !== counter) {
      dispatch(startUpdatingAmmount({ id, title, img, price, discount, ammount: counter }));
    }
  }, [counter]);
  return (
    <div className="mx-auto flex w-[80px] items-center justify-around md:w-full md:border-0">
      <div className="flex w-[100px] items-center justify-between">
        <button
          className="h-[40px] w-full bg-gray-500 text-lg font-bold text-white"
          onClick={() => decrement(1)}>
          -
        </button>
        <div className="flex h-[40px] w-full items-center justify-center bg-gray-300 text-lg font-bold">
          <span>{counter}</span>
        </div>
        <button
          className="h-[40px] w-full bg-gray-500 text-lg font-bold text-white"
          onClick={() => increment(1)}>
          +
        </button>
      </div>
    </div>
  );
};
