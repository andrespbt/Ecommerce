import { useLocation } from 'react-router-dom';
import { ProductSection } from '../components/main/product/ProductSection';
import { EcommerceLayout } from '../layout/EcommerceLayout';
import { useGetProductByIdQuery } from '../../store/apis/productsApi';

export const ProductPage = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const { data } = useGetProductByIdQuery(productId);

  return (
    <>
      <EcommerceLayout>
        <main>{data && <ProductSection data={data} />}</main>
      </EcommerceLayout>
    </>
  );
};
