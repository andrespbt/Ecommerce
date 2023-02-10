import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCounter } from '../../../../hooks/useCounter';
import { startNewCartProduct } from '../../../../store/ecommerce/thunks';

const imageCascade =
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1676062996/ecommerceImages/image-cascade_yst1u6.webp';

export const ProductSection = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { brand, description, images, price, thumbnail, title, discountPercentage, id } = data;
  const [imagePosition, setImagePosition] = useState({
    main: thumbnail,
    sub1: images[0] || imageCascade,
    sub2: images[1] || imageCascade,
    sub3: images[2] || imageCascade,
  });

  const { counter, increment, decrement } = useCounter(1);

  const onImageclick = e => {
    const name = e.target.name;
    const imageSrc = e.target.src;
    const temp = imagePosition.main;

    setImagePosition({ ...imagePosition, [name]: temp, main: imageSrc });
  };

  const onCartAddClick = () => {
    const img = thumbnail;
    const discount = discountPercentage;
    const ammount = counter;

    dispatch(startNewCartProduct(id, title, img, price, discount, ammount));
    navigate('/purchases');
  };

  return (
    <section className="my-10 grid grid-cols-8 grid-rows-[1fr_.3fr_.3fr_.7fr] gap-6 text-center">
      <div className="col-start-2 col-end-8 border-2 hover:cursor-pointer">
        <img
          src={imagePosition.main}
          alt={title}
          name="main"
        />
      </div>
      <div className="col-start-2 col-end-8 row-start-2 row-end-3 flex justify-between">
        <img
          onClick={onImageclick}
          className="h-[80px] w-[80px] border-2 hover:cursor-pointer"
          src={imagePosition.sub1}
          alt={title}
          name="sub1"
        />
        <img
          onClick={onImageclick}
          className="h-[80px] w-[80px] border-2 hover:cursor-pointer"
          src={imagePosition.sub2}
          alt={title}
          name="sub2"
        />
        <img
          onClick={onImageclick}
          className="h-[80px] w-[80px] border-2 hover:cursor-pointer"
          src={imagePosition.sub3}
          alt={title}
          name="sub3"
        />
      </div>

      <div className="col-start-2 col-end-8 row-start-3 row-end-4 flex flex-col gap-5">
        <h2 className="text-2xl font-bold">{brand}</h2>
        <p className="text-lg">{description}</p>
      </div>

      <div className="col-start-2 col-end-8 row-start-4 row-end-5 flex flex-col border-2">
        <div className="flex h-[120px] items-center justify-around border-b-2">
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
        <div className="flex h-full items-center justify-center">
          <button
            className="h-[50px] w-[180px] rounded-xl bg-darkGray font-bold text-white"
            onClick={onCartAddClick}>
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};
