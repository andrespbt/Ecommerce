import { HeaderProvider } from './ecommerce/components/header/context/HeaderProvider';
import { AppRouter } from './router/AppRouter';

export const EcommerceApp = () => {
  return (
    <>
      <HeaderProvider>
        <AppRouter />
      </HeaderProvider>
    </>
  );
};
