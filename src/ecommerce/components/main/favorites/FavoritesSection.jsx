import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard';
import { EmptyFavoritesSection } from './EmptyFavoritesSection';

export const FavoritesSection = ({ likes, cart }) => {
  return (
    <section className={`${likes.length > 0 ? 'align-middle' : ''} h-full w-full bg-white py-10`}>
      {likes.length > 0 ? (
        <ul className="flex h-full w-full flex-wrap justify-center gap-4">
          {likes?.map(product => (
            <li key={`${product.id}`}>
              <ProductCard
                id={product.id}
                title={product.title}
                img={product.img}
                price={product.price}
                discount={Math.floor(product.discount)}
                isLiked={likes.some(likedProduct => likedProduct.id === product.id)}
                isInCart={cart?.some(cartProduct => cartProduct.id === product.id)}></ProductCard>
            </li>
          ))}
        </ul>
      ) : (
        <EmptyFavoritesSection />
      )}
    </section>
  );
};
