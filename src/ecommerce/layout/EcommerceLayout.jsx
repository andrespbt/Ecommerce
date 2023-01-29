import { Header } from '../components/header/Header';

export const EcommerceLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
