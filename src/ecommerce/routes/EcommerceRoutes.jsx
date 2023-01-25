import { Navigate, Outlet } from 'react-router-dom';
import { CollectionsPage } from '../pages/CollectionsPage';
import { AboutPage, ContactPage, MenPage, ProductPage, WomenPage } from '../pages/index';

export const EcommerceRoutes = () => {
  return <Outlet />;
};

export const childEcommerceRoutes = [
  {
    path: '/',
    element: <CollectionsPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/men',
    element: <MenPage />,
  },
  {
    path: '/women',
    element: <WomenPage />,
  },
  {
    path: '/product',
    element: <ProductPage />,
  },
  {
    path: '/*',
    element: <Navigate to="/" />,
  },
];
