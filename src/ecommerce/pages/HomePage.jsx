import { Slider, ShopByCategory } from '../components/main/home';
import { EcommerceLayout } from '../layout/EcommerceLayout';

export const HomePage = () => {
  return (
    <EcommerceLayout>
      <Slider />
      <ShopByCategory />
    </EcommerceLayout>
  );
};
