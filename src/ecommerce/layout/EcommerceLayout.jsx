import { Header } from '../components/menu/Header';

export const EcommerceLayout = ({ children }) => {
  return (
    <>
      <div className="px-20 py-5">
        <Header />
        {children}
      </div>
    </>
  );
};
