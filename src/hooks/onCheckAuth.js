import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const useCheckAuth = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(state => state.auth);

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async user => {
      if (!user) return dispatch(logout());
      const { uid, email, displayName, photoURL, logged } = user;
      if (!window.location.pathname.includes('/auth/register')) {
        dispatch(login({ uid, email, displayName, photoURL, logged }));
      }
    });
  }, []);
  return status;
};
