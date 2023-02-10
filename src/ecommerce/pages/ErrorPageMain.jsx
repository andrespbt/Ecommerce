import { useRouteError } from 'react-router-dom';
import { EcommerceLayout } from '../layout/EcommerceLayout';

// TODO: style page

export const ErrorPageMain = () => {
  const error = useRouteError();
  return (
    <EcommerceLayout>
      <main>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </EcommerceLayout>
  );
};
