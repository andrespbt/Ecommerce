import { Navigate, Outlet } from 'react-router-dom';
import { FavoritesPage, HomePage, MenPage, WomenPage, PurchasesPage, ProductPage, CategoryPage } from '../pages/index';

export const EcommerceRoutes = () => {
  return <Outlet />;
};

export const childEcommerceRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
  {
    path: '/men',
    element: <MenPage />,
  },
  {
    path: '/men/category/:category',
    element: <CategoryPage />,
  },
  {
    path: '/women',
    element: <WomenPage />,
  },
  {
    path: '/women/category/:category',
    element: <CategoryPage />,
  },
  {
    path: '/purchases',
    element: <PurchasesPage />,
  },
  {
    path: '/product/:productId',
    element: <ProductPage />,
  },
  {
    path: '/*',
    element: <Navigate to="/" />,
  },
];
