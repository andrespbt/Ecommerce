import { Header } from '../components/header/Header';

export const EcommerceLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-gray-50">{children}</main>
    </>
  );
};
