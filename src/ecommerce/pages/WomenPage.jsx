import { HeroSection, GridSection, ShipmentSection } from '../components/main/men-woman';
import { EcommerceLayout } from '../layout/EcommerceLayout';

const images = [
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675809667/ecommerceImages/man-woman-grid/woman-manwoman-grid-section-0_u2ufol.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675809667/ecommerceImages/man-woman-grid/woman-manwoman-grid-section-1_auncs2.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675809667/ecommerceImages/man-woman-grid/woman-manwoman-grid-section-2_hizyi0.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675809667/ecommerceImages/man-woman-grid/woman-manwoman-grid-section-3_l2z4kp.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675809667/ecommerceImages/man-woman-grid/woman-manwoman-grid-section-4_ul8i8o.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675809667/ecommerceImages/man-woman-grid/woman-manwoman-grid-section-5_wutytq.webp',
];

export const WomenPage = () => {
  return (
    <EcommerceLayout>
      <HeroSection
        color="bg-pink-100"
        text="fresh lady's style"
        image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675808165/ecommerceImages/hero/woman-hero-section_i68ag3.webp"
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
