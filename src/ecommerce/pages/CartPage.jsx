import { CartSection } from '../components/main/cart/CartSection';
import { EcommerceLayout } from '../layout/EcommerceLayout';

export const CartPage = () => {
  return (
    <EcommerceLayout>
      <main>
        <CartSection />
      </main>
    </EcommerceLayout>
  );
};
