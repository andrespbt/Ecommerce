import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadCartProducts, loadLikedProducts } from '../../helpers/loadProducts';
import {
  addNewCartProduct,
  addNewLikedProduct,
  deleteCartProductById,
  deleteLikedProductById,
  isSaving,
  loadProducts,
} from './ecommerceSlice';

export const startLoadingProducts = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const likedProducts = await loadLikedProducts(uid);
    const cartProducts = await loadCartProducts(uid);
    dispatch(loadProducts({ cartProducts, likedProducts }));
  };
};

export const startNewLikedProduct = (id, title, img, price, discount) => {
  return async (dispatch, getState) => {
    dispatch(isSaving());
    const { uid } = getState().auth;

    const likedProduct = {
      title,
      img,
      price,
      discount,
      id,
    };

    const resp = await addDoc(collection(FirebaseDB, `${uid}/ecommerce`, 'likedProducts'), {
      ...likedProduct,
    });

    likedProduct.firebaseId = resp.id;

    dispatch(addNewLikedProduct(likedProduct));
  };
};

export const startDeleteLikedProduct = id => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { likes } = getState().ecommerce;

    const productLikeToDelete = likes.filter(product => product.id === id);

    const docRef = doc(FirebaseDB, `${uid}/ecommerce/likedProducts/${productLikeToDelete[0].firebaseId}`);

    await deleteDoc(docRef);

    dispatch(deleteLikedProductById(id));
    dispatch(startLoadingProducts());
  };
};

export const startNewCartProduct = (id, title, img, price, discount) => {
  return async (dispatch, getState) => {
    dispatch(isSaving());

    const { uid } = getState().auth;

    const cartProduct = {
      title,
      img,
      price,
      discount,
      id,
    };

    const resp = await addDoc(collection(FirebaseDB, `${uid}/ecommerce`, 'cartProducts'), {
      ...cartProduct,
    });

    cartProduct.firebaseId = resp.id;

    dispatch(addNewCartProduct(cartProduct));
  };
};

export const startDeleteCartProduct = id => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { cart } = getState().ecommerce;

    const productCartToDelete = cart.filter(product => product.id === id);

    const docRef = doc(FirebaseDB, `${uid}/ecommerce/cartProducts/${productCartToDelete[0].firebaseId}`);

    await deleteDoc(docRef);

    dispatch(deleteCartProductById(id));
    dispatch(startLoadingProducts());
  };
};
