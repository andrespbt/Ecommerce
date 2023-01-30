import { useSelector } from 'react-redux';
import { AuthRoutes, childAuthRoutes } from '@/auth/routes/AuthRoutes';
import { childEcommerceRoutes, EcommerceRoutes } from '@/ecommerce/routes/EcommerceRoutes';
import { useCheckAuth } from '@/hooks/onCheckAuth';
import { CheckingAuth } from '@/ui/components/CheckingAuth';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

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
          <Navigate to="/" />
        ) : (
          <AuthRoutes />
        ),
      children: childAuthRoutes,
    },

    {
      path: '/',
      element: <EcommerceRoutes />,
      children: childEcommerceRoutes,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
