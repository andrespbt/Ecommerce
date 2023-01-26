import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useHandlerError = ( setError, submitCount, setFocus) => {
  const { errorMessage } = useSelector(state => state.auth);

  const handleError = error => {
    if (error?.includes('wrong-password')) {
      setError('password', { type: 'custom', message: 'Wrong password' });
      setFocus('password');
    }
    if (error?.includes('user-not-found')) {
      setError('email', { type: 'custom', message: 'Email is not registered' });
      setFocus('email');
    }

    if (error?.includes('too-many-requests')) {
      setError('email', { type: 'custom', message: 'Account disabled. Please try again later.' });
      setFocus('email');
    }
  };

  useEffect(() => {
    if (errorMessage) {
      handleError(errorMessage);
      return;
    }
  }, [errorMessage, submitCount]);
};
