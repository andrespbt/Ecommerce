import { useDispatch, useSelector } from 'react-redux';
import {
  startDeleteCartProduct,
  startDeleteLikedProduct,
  startNewCartProduct,
  startNewLikedProduct,
} from '../../../store/ecommerce/thunks';
import { NavHeartIcon } from '../../icons/header';
import {
  ProductCardCart,
  ProductCardCartChecked,
  ProductCardHeartFill,
  ProductCardZoom,
} from '../../icons/main/product-card';

export const ProductCard = ({ id, title, img, price, discount, isLiked, isInCart }) => {
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

  const onNewProductCart = (id, title, img, price, discount) => {
    dispatch(startNewCartProduct(id, title, img, price, discount));
  };

  const onDeleteProductCart = id => {
    dispatch(startDeleteCartProduct(id));
  };

  return (
    <div className="relative flex h-[350px] w-[224px] animate-fade-in flex-col rounded-md border-[1px] shadow-lg transition-opacity duration-300 ease-in hover:cursor-pointer hover:shadow-3xl">
      <div className="relative h-full max-h-[224px] w-full max-w-[224px] border-b-[1px]">
        <img
          className="h-full w-full select-none"
          src={img}
          alt={title}
        />

        {isLiked ? (
          <button
            className="absolute top-1 right-1 h-[33px] w-[33px] rounded-full bg-gray-300"
            onClick={() => onDeleteLikedNote(id)}
            disabled={isSaving}>
            <ProductCardHeartFill
              className="h-[2rem] w-[2rem] animate-fade-in fill-red-600 stroke-1 hover:cursor-pointer"
              viewBox="-4.7 -6 25 25"
            />
          </button>
        ) : (
          <button
            className="absolute top-1 right-1 h-[33px] w-[33px] rounded-full bg-gray-300"
            onClick={() => onNewLikedNote(id, title, img, price, discount)}
            disabled={isSaving}>
            <NavHeartIcon
              className="h-[2rem] w-[2rem] animate-fade-in stroke-red-600 stroke-1 hover:cursor-pointer"
              viewBox="-4.7 -6 25 25"
            />
          </button>
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
      <div className="absolute bottom-1 right-[-95px] flex w-full justify-center gap-3">
        {isInCart ? (
          <button onClick={() => onDeleteProductCart(id)}>
            <ProductCardCartChecked
              className="h-[2rem] w-[2rem] animate-fade-in fill-green-500"
              viewBox="0 0 20 20"
            />
          </button>
        ) : (
          <button onClick={() => onNewProductCart(id, title, img, price, discount)}>
            <ProductCardCart
              className="h-[2rem] w-[2rem] animate-fade-in"
              viewBox="0 0 20 20"
            />
          </button>
        )}
      </div>
    </div>
  );
};
