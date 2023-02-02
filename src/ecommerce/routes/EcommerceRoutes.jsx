import { Navigate, Outlet } from 'react-router-dom';
import {
  AboutPage,
  FavoritesPage,
  HomePage,
  MenPage,
  WomenPage,
  PurchasesPage,
  SearchPage,
  ProductPage,
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
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/men',
    element: <MenPage />,
  },
  {
    path: '/men/:category',
    element: <MenPage />,
  },
  {
    path: '/women',
    element: <WomenPage />,
  },
  {
    path: '/women/:category',
    element: <WomenPage />,
  },
  {
    path: '/purchases',
    element: <PurchasesPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
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
