import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadBoughtProducts, loadCartProducts, loadLikedProducts } from '../../helpers/loadProducts';
import {
  addNewBuys,
  addNewCartProduct,
  addNewLikedProduct,
  deleteCartProductById,
  deleteLikedProductById,
  isSaving,
  loadProducts,
  updateCartProductAmmount,
} from './ecommerceSlice';

export const startLoadingProducts = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const likedProducts = await loadLikedProducts(uid);
    const cartProducts = await loadCartProducts(uid);
    const boughtProducts = await loadBoughtProducts(uid);
    dispatch(loadProducts({ cartProducts, likedProducts, boughtProducts }));
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

export const startNewCartProduct = (id, title, img, price, discount, ammount) => {
  return async (dispatch, getState) => {
    dispatch(isSaving());

    const { uid } = getState().auth;

    const cartProduct = {
      title,
      img,
      price,
      discount,
      id,
      ammount,
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

export const startUpdatingAmmount = productUpdated => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { cart } = getState().ecommerce;
    let productFirebaseId = null;

    cart.forEach(product => {
      if (product.id === productUpdated.id) {
        productFirebaseId = product.firebaseId;
      }
    });

    const docRef = doc(FirebaseDB, `${uid}/ecommerce/cartProducts/${productFirebaseId}`);

    await setDoc(docRef, productUpdated, { merge: true });
    dispatch(updateCartProductAmmount(productUpdated));
    dispatch(startLoadingProducts());
  };
};

export const startAddingBuys = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { cart } = getState().ecommerce;

    cart.forEach(async product => {
      await addDoc(collection(FirebaseDB, `${uid}/ecommerce`, 'buys'), {
        ...product,
      });
    });

    dispatch(addNewBuys(cart));
  };
};

export const startDeletingCart = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { cart } = getState().ecommerce;

    cart.forEach(async product => {
      await deleteDoc(doc(FirebaseDB, `${uid}/ecommerce/cartProducts/${product.firebaseId}`));
    });

    dispatch(startLoadingProducts());
  };
};
