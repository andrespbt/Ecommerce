import { FavoritesSection } from '../components/main/favorites/FavoritesSection';
import { EcommerceLayout } from '../layout/EcommerceLayout';

export const FavoritesPage = () => {
  return (
    <EcommerceLayout>
      <main className="flex items-center">
        <FavoritesSection />
      </main>
    </EcommerceLayout>
  );
};
