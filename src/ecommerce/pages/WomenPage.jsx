import { HeroSection } from '../components/main/men-woman/HeroSection';
import { EcommerceLayout } from '../layout/EcommerceLayout';
import WomanImage from '../../assets/images/woman-hero-section.webp';

export const WomenPage = () => {
  return (
    <EcommerceLayout>
      <HeroSection
        color="bg-pink-100"
        text="fresh lady's style"
        image={WomanImage}
        imageAlt="Woman model photo"
      />
    </EcommerceLayout>
  );
};
