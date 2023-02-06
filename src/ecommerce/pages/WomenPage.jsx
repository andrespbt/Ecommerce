import { HeroSection, GridSection, ShipmentSection } from '../components/main/men-woman';
import { EcommerceLayout } from '../layout/EcommerceLayout';
import WomanImage from '../../assets/images/woman-hero-section.webp';
import WomanModelGridImage from '../../assets/images/woman-manwoman-grid-section-0.webp';
import WomanDressModelGridImageLeft from '../../assets/images/woman-manwoman-grid-section-1.webp';
import WomanDressModelGridImageRight from '../../assets/images/woman-manwoman-grid-section-2.webp';
import WomanDressModelGridImage from '../../assets/images/woman-manwoman-grid-section-3.webp';
import WomanWatchModelGridImage from '../../assets/images/woman-manwoman-grid-section-4.webp';
import WomanShoesModelGridImage from '../../assets/images/woman-manwoman-grid-section-5.webp';

const images = [
  WomanModelGridImage,
  WomanDressModelGridImageLeft,
  WomanDressModelGridImageRight,
  WomanDressModelGridImage,
  WomanWatchModelGridImage,
  WomanShoesModelGridImage,
];

export const WomenPage = () => {
  return (
    <EcommerceLayout>
      <HeroSection
        color="bg-pink-100"
        text="fresh lady's style"
        image={WomanImage}
        imageAlt="Woman model photo"
      />
      <GridSection
        images={images}
        section="woman"
        h3Text="Women's New Arrivals"
        category="dresses"
      />

      <ShipmentSection />
    </EcommerceLayout>
  );
};
