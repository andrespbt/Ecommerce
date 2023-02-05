import { useContext, useEffect } from 'react';
import { Footer } from '../components/footer/Footer';
import { HeaderContext } from '../components/header/context/HeaderContext';
import { Header } from '../components/header/Header';

export const EcommerceLayout = ({ children }) => {
  const { isMenuActive } = useContext(HeaderContext);

  useEffect(() => {
    isMenuActive ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [isMenuActive]);

  return (
    <>
      <Header />
      <main className={`bg-gray-50`}>{children}</main>
      <Footer />
    </>
  );
};
