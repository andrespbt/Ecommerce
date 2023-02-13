import { useSelector } from 'react-redux';
import { FavoritesSection } from '../components/main/favorites/FavoritesSection';
import { EcommerceLayout } from '../layout/EcommerceLayout';

export const FavoritesPage = () => {
  const { likes, cart } = useSelector(state => state.ecommerce);
  return (
    <EcommerceLayout>
      <main className="flex items-center">
        <FavoritesSection
          likes={likes}
          cart={cart}
        />
      </main>
    </EcommerceLayout>
  );
};
