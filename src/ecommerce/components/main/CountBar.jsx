export const CountBar = ({ counter, increment, decrement, price }) => {
  return (
    <div className="flex h-[120px] items-center justify-around border-b-2 md:w-full md:border-0">
      <div>
        <span className="text-xl font-bold">${price * counter}</span>
      </div>
      <div className="flex w-[140px] items-center justify-between">
        <button
          className="h-[40px] w-full bg-gray-500 text-lg font-bold text-white"
          onClick={() => decrement(1)}>
          -
        </button>
        <div className="flex h-[40px] w-full items-center justify-center bg-gray-300 text-lg font-bold">
          <span className="">{counter}</span>
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
