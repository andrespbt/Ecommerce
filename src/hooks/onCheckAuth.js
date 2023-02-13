import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, startAnonymusLogin } from '../store/auth';
import { startLoadingProducts } from '../store/ecommerce/thunks';

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async user => {
      if (!user) return dispatch(startAnonymusLogin());
      const { uid, email, displayName, photoURL, logged } = user;
      if (!window.location.pathname.includes('/auth/register')) {
        dispatch(login({ uid, email, displayName, photoURL, logged }));
        dispatch(startLoadingProducts(uid));
      }
    });
  }, []);

  return status;
};
