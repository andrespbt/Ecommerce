import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { ErrorPageAuth } from '../auth/pages/ErrorPageAuth';
import { AuthRoutes, childAuthRoutes } from '../auth/routes/AuthRoutes';
import { ErrorPageMain } from '../ecommerce/pages';
import { childEcommerceRoutes, EcommerceRoutes } from '../ecommerce/routes/EcommerceRoutes';
import { useCheckAuth } from '../hooks/onCheckAuth';
import { CheckingAuth } from '../ui/components/CheckingAuth';

export const AppRouter = () => {
  const status = useCheckAuth();

  const isAuthenticated = status === 3;
  const isAnon = status === 5;

  if (status === 2) {
    return <CheckingAuth />;
  }

  const router = createBrowserRouter([
    {
      path: '/auth/*',
      element:
        isAuthenticated || (isAnon && window.location.pathname.includes('auth/login')) ? (
          <Navigate to="/home" />
        ) : (
          <AuthRoutes />
        ),
      children: childAuthRoutes,
      errorElement: <ErrorPageAuth />,
    },

    {
      path: '/',
      element: <EcommerceRoutes />,
      children: childEcommerceRoutes,
      errorElement: <ErrorPageMain />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
