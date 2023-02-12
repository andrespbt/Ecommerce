import { Navigate, Outlet } from 'react-router-dom';
import {
  FavoritesPage,
  HomePage,
  MenPage,
  WomenPage,
  CartPage,
  ProductPage,
  CategoryPage,
  PurchasesPage,
  AccountPage,
} from '../pages/index';

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
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/product/:productId',
    element: <ProductPage />,
  },
  {
    path: '/purchases',
    element: <PurchasesPage />,
  },
  {
    path: '/account',
    element: <AccountPage />,
  },
  {
    path: '/*',
    element: <Navigate to="/" />,
  },
];
