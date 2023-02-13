import { useSelector } from 'react-redux';
import { CartSection } from '../components/main/cart/CartSection';
import { EcommerceLayout } from '../layout/EcommerceLayout';

export const CartPage = () => {
  const { cart } = useSelector(state => state.ecommerce);
  return (
    <EcommerceLayout>
      <main className={`${cart.length > 0 ? '' : 'flex items-center justify-center'}`}>
        <CartSection cart={cart} />
      </main>
    </EcommerceLayout>
  );
};
