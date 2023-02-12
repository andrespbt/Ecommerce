import { ProductCard } from '../ProductCard';

export const LikeInfoSection = ({ cart, likes }) => {
  return (
    <section className="my-10 mx-6">
      <h2 className="my-6 text-center text-lg font-bold">Products that you like</h2>
      <ul className="flex h-full w-full flex-wrap justify-center gap-4">
        {likes?.map(product => (
          <li key={`${product.id}`}>
            <ProductCard
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              discount={Math.floor(product.discountPercentage)}
              isLiked={true}
              isInCart={cart.some(cartProduct => cartProduct.id === product.id)}></ProductCard>
          </li>
        ))}
      </ul>
    </section>
  );
};
