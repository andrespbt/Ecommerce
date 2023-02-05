import { HeroSection } from '../components/main/men-woman/HeroSection';
import { EcommerceLayout } from '../layout';
import ManImage from '../../assets/images/man-hero-section.webp';
import { GridSection } from '../components/main/men-woman/grid-section/GridSection';

export const MenPage = () => {
  return (
    <EcommerceLayout>
      <HeroSection
        color="bg-blue-100"
        text="fresh gentleman's style"
        image={ManImage}
        imageAlt="Man model photo"
      />
      <GridSection />
    </EcommerceLayout>
  );
};
