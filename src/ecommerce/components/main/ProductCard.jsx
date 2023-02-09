import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startDeleteLikedProduct, startNewLikedProduct } from '../../../store/ecommerce/thunks';
import { NavHeartIcon } from '../../icons/header';
import { ProductCardHeartFill } from '../../icons/main/product-card/ProductCardHeartFill';

export const ProductCard = ({ id, title, img, price, discount, isLiked }) => {
  const dispatch = useDispatch();
  const { uid } = useSelector(state => state.auth);
  const { isSaving } = useSelector(state => state.ecommerce);

  const onNewLikedNote = (id, title, img, price, discount) => {
    // TODO: Alert user to login
    if (!uid) {
      return;
    }

    dispatch(startNewLikedProduct(id, title, img, price, discount));
  };

  const onDeleteLikedNote = id => {
    dispatch(startDeleteLikedProduct(id));
  };

  return (
    <div className="flex h-[350px] w-[224px] flex-col rounded-md border-[1px] shadow-lg transition-opacity duration-300 ease-in hover:cursor-pointer hover:shadow-3xl">
      <div className="relative h-full max-h-[224px] w-full max-w-[224px] border-b-[1px]">
        <img
          className="h-full w-full select-none"
          src={img}
          alt={title}
        />
        {isLiked ? (
          <ProductCardHeartFill
            className="absolute top-2 right-1 h-[2rem] w-[2rem] stroke-black stroke-1 hover:cursor-pointer"
            viewBox="-2 -2 25 25"
            onClick={() => onDeleteLikedNote(id)}
            disabled={isSaving}
          />
        ) : (
          <NavHeartIcon
            className="absolute top-2 right-1 h-[2rem] w-[2rem] stroke-black stroke-1 hover:cursor-pointer"
            viewBox="-2 -2 25 25"
            onClick={() => onNewLikedNote(id, title, img, price, discount)}
            disabled={isSaving}
          />
        )}
      </div>

      <div className="mt-3 flex flex-col justify-center gap-4 px-2 text-center">
        <span className="font-semibold capitalize">{title.toLowerCase()}</span>
        <span className="self-start text-lg font-semibold">
          {`$${price}`}
          <span className="ml-5 h-full align-text-top text-sm font-medium text-red-700">
            {discount ? `${discount}% OFF` : ''}
          </span>
        </span>
      </div>
    </div>
  );
};
