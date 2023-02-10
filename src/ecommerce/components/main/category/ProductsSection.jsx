import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard';

export const ProductsSection = ({ data }) => {
  const products = data?.products;
  const { likes, cart } = useSelector(state => state.ecommerce);

  return (
    <section className="my-10 mx-6">
      <ul className="flex h-full w-full flex-wrap justify-center gap-4">
        {products?.map(product => (
          <li key={`${product.id}`}>
            <ProductCard
              id={product.id}
              title={product.title}
              img={product.thumbnail}
              price={product.price}
              discount={Math.floor(product.discountPercentage)}
              isLiked={likes.some(likedProduct => likedProduct.id === product.id)}
              isInCart={cart?.some(cartProduct => cartProduct.id === product.id)}></ProductCard>
          </li>
        ))}
      </ul>
    </section>
  );
};
