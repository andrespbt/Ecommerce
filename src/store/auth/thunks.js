import {
  logInWithEmailPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInAnon,
  signUpWithGoogle,
} from '../../firebase/providers';
import { accountCreatedSuccesfully, isLoading, login, logout } from './authSlice';

export const startGoogleLogin = () => {
  return async dispatch => {
    dispatch(isLoading());

    const result = await signUpWithGoogle();

    if (!result.ok) return dispatch(logout(result.errorCode));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async dispatch => {
    dispatch(isLoading());

    const result = await registerUserWithEmailPassword({ email, password, displayName });

    if (!result.ok) return dispatch(logout(result));

    dispatch(accountCreatedSuccesfully());
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async dispatch => {
    dispatch(isLoading());

    const result = await logInWithEmailPassword({ email, password });

    if (!result.ok) return dispatch(logout(result));

    dispatch(login(result));
  };
};

export const startAnonymusLogin = () => {
  return async dispatch => {
    dispatch(isLoading());

    const result = await signInAnon();

    dispatch(login(result));
  };
};

export const startLogOut = () => {
  return async dispatch => {
    await logoutFirebase();

    dispatch(logout());
  };
};
