import { AuthRoutes, childAuthRoutes } from '@/auth/routes/AuthRoutes';
import { childEcommerceRoutes, EcommerceRoutes } from '@/ecommerce/routes/EcommerceRoutes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/auth/*',
      element: <AuthRoutes />,
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
