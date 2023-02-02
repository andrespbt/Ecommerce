import { useRouteError } from 'react-router-dom';
import { EcommerceLayout } from '../layout/EcommerceLayout';

// TODO: style page

export const ErrorPageMain = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <EcommerceLayout>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </EcommerceLayout>
  );
};
