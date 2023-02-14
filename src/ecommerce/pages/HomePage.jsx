import { Slider, ShopByCategory, OutfitSection, BrandsSection } from '../components/main/home';
import { EcommerceLayout } from '../layout/EcommerceLayout';

export const HomePage = () => {
  return (
    <EcommerceLayout>
      <main>
        <Slider />
        <ShopByCategory />
        <OutfitSection />
        <BrandsSection />
      </main>
    </EcommerceLayout>
  );
};
