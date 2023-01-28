import { AuthRoutes, childAuthRoutes } from '@/auth/routes/AuthRoutes';
import { childEcommerceRoutes, EcommerceRoutes } from '@/ecommerce/routes/EcommerceRoutes';
import { useCheckAuth } from '@/hooks/onCheckAuth';
import { CheckingAuth } from '@/ui/components/CheckingAuth';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

export const AppRouter = () => {
  const status = useCheckAuth();

  const isAuthenticated = status === 1;

  if (status === 2) {
    return <CheckingAuth />;
  }

  const router = createBrowserRouter([
    {
      path: '/auth/*',
      element: isAuthenticated ? <Navigate to="/" /> : <AuthRoutes />,
      children: childAuthRoutes,
    },

    {
      path: '/',
      element: isAuthenticated ? <EcommerceRoutes /> : <Navigate to="/auth/login" />,
      children: childEcommerceRoutes,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
