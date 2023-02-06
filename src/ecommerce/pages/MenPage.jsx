import { EcommerceLayout } from '../layout';
import { ShipmentSection, GridSection, HeroSection } from '../components/main/men-woman';
import ManImage from '../../assets/images/man-hero-section.webp';
import ManImageModel from '../../assets/images/man-manwoman-grid-section-0.webp';
import ManImageShirts from '../../assets/images/man-manwoman-grid-section-1.webp';
import ManImageWatch from '../../assets/images/man-manwoman-grid-section-2.webp';
import ManImageShoes from '../../assets/images/man-manwoman-grid-section-3.webp';
import ManImageShirtModel from '../../assets/images/man-manwoman-grid-section-4.webp';
import ShirtImage from '../../assets/images/man-manwoman-grid-section-5.webp';

const images = [ManImageModel, ManImageShirtModel, ShirtImage, ManImageShirts, ManImageWatch, ManImageShoes];

export const MenPage = () => {
  return (
    <EcommerceLayout>
      <HeroSection
        color="bg-blue-100"
        text="fresh gentleman's style"
        image={ManImage}
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
