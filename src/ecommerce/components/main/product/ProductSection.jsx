import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCounter } from '../../../../hooks/useCounter';
import { startNewCartProduct } from '../../../../store/ecommerce/thunks';
import { CountBar } from '../CountBar';

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
    navigate('/cart');
  };

  return (
    <section className="my-10 mx-4 grid grid-cols-8 grid-rows-[1fr_.3fr_.3fr_.7fr] gap-6 text-center md:grid-cols-12 md:grid-rows-[5fr_3fr] md:gap-0 md:gap-y-10 lg:gap-y-20">
      {/* Main image */}
      <div className="col-start-2 col-end-8 h-[292px] w-full border-2 hover:cursor-pointer sm:h-[320px] md:col-end-9 md:h-[560px] lg:col-start-3 lg:col-end-8 lg:max-h-[560px] lg:max-w-[600px]">
        <img
          className="h-full w-full md:object-cover "
          src={imagePosition.main}
          alt={title}
          name="main"
        />
      </div>

      {/* Images */}
      <div className="col-start-2 col-end-8 row-start-2 row-end-3 flex h-[100px] justify-between md:col-start-10 md:col-end-12 md:row-start-1 md:row-end-2 md:h-[560px] md:flex-col lg:col-start-9 lg:col-end-11 lg:h-[560px]">
        <img
          onClick={onImageclick}
          className="w-[30%] border-2 hover:cursor-pointer sm:h-[120px] md:h-[150px] md:w-full lg:h-[183px] lg:w-full"
          src={imagePosition.sub1}
          alt={title}
          name="sub1"
        />
        <img
          onClick={onImageclick}
          className="w-[30%] border-2 hover:cursor-pointer sm:h-[120px] md:h-[150px] md:w-full lg:h-[183px] lg:w-full"
          src={imagePosition.sub2}
          alt={title}
          name="sub2"
        />
        <img
          onClick={onImageclick}
          className="w-[30%] border-2 hover:cursor-pointer sm:h-[120px] md:h-[150px] md:w-full lg:h-[183px] lg:w-full"
          src={imagePosition.sub3}
          alt={title}
          name="sub3"
        />
      </div>

      {/* Text */}

      <div className="col-start-2 col-end-8 row-start-3 row-end-4 flex flex-col gap-5 md:col-end-7 md:row-start-2 md:row-end-3 lg:col-start-4 lg:col-end-7">
        <h2 className="text-2xl font-bold capitalize">{title.toLowerCase()}</h2>
        <h2 className="text-lg font-bold">{brand}</h2>
        <p className="text-lg">{description}</p>
      </div>

      {/* Counter and price */}
      <div className="col-start-2 col-end-8 row-start-4 row-end-5 flex max-h-[260px] flex-col border-2 md:col-start-7 md:col-end-12 md:row-start-2 md:row-end-3 md:h-[100px] md:flex-row md:items-center md:justify-between md:rounded-2xl lg:col-start-8">
        <CountBar
          counter={counter}
          increment={increment}
          decrement={decrement}
          price={price}
        />

        {/* Button */}
        <div className="flex h-full items-center justify-center md:w-full">
          <button
            className="h-[50px] w-[50%] rounded-xl bg-darkGray font-bold text-white md:mx-4 md:w-full"
            onClick={onCartAddClick}>
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
};
