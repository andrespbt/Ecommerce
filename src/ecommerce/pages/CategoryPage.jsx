import { useLocation } from 'react-router-dom';
import { HeroSection, ProductsSection } from '../components/main/category';
import { EcommerceLayout } from '../layout';
import { useGetProductByCategoryQuery } from '../../store/apis/productsApi';

export const CategoryPage = () => {
  const location = useLocation();
  const section = location.pathname.split('/')[1];
  const category = location.pathname.split('/')[3];
  const { data } = useGetProductByCategoryQuery(`${section}s-${category}`);

  return (
    <EcommerceLayout>
      <HeroSection
        section={section}
        category={category}
      />
      {data && <ProductsSection data={data} />}
    </EcommerceLayout>
  );
};
