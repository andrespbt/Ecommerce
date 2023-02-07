import { EcommerceLayout } from '../layout';
import { ShipmentSection, GridSection, HeroSection } from '../components/main/men-woman';

const images = [
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675807855/ecommerceImages/man-woman-grid/man-manwoman-grid-section-0_lioodp.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675807855/ecommerceImages/man-woman-grid/man-manwoman-grid-section-4_ikttqh.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675807855/ecommerceImages/man-woman-grid/man-manwoman-grid-section-5_zulavr.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675807855/ecommerceImages/man-woman-grid/man-manwoman-grid-section-1_l2jpik.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675807855/ecommerceImages/man-woman-grid/man-manwoman-grid-section-2_utw8bn.webp',
  'https://res.cloudinary.com/dxirtcrxd/image/upload/v1675807855/ecommerceImages/man-woman-grid/man-manwoman-grid-section-3_mnvj4e.webp',
];

export const MenPage = () => {
  return (
    <EcommerceLayout>
      <HeroSection
        color="bg-blue-100"
        text="fresh gentleman's style"
        image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675808165/ecommerceImages/hero/man-hero-section_v0jiwy.webp"
        imageAlt="Man model photo"
      />
      <GridSection
        images={images}
        section="man"
        h3Text="Men's New Arrivals"
        category="shirts"
      />
      <ShipmentSection />
    </EcommerceLayout>
  );
};
