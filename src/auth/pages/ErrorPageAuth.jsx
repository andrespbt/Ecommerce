import { useRouteError } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

// TODO: style page

export const ErrorPageAuth = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <AuthLayout>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </AuthLayout>
  );
};
