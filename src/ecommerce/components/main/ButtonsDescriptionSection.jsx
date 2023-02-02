import IconCartButton from '../../../assets/images/icon-cartButton.svg';

export const ButtonsDescriptionSection = () => {
  return (
    <div className="mt-[3rem] grid h-10 grid-cols-3">
      <div className="col-start-1 col-end-2 mr-2 grid w-full max-w-[95%] grid-cols-3 items-center justify-around rounded-xl bg-lightGrayBlue">
        <button className="col-start-1 col-end-2 font-bold text-orange hover:cursor-pointer">-</button>
        <span className="col-start-2 col-end-3 text-center font-bold">0</span>
        <button className="col-start-3 col-end-4 font-bold text-orange hover:cursor-pointer">+</button>
      </div>

      <button className="col-start-2 col-end-4 flex items-center justify-center gap-5 rounded-xl bg-orange p-4 text-base text-white lg:mr-16">
        <img
          src={IconCartButton}
          alt="Cart"
        />
        Add to cart
      </button>
    </div>
  );
};
