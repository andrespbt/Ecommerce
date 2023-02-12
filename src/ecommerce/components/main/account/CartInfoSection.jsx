import { ProductCard } from '../ProductCard';

export const CartInfoSection = ({ cart, likes }) => {
  return (
    <section className="my-10 mx-6">
      <h2 className="my-6 text-center text-lg font-bold">Your products in cart</h2>
      <ul className="flex h-full w-full flex-wrap justify-center gap-4">
        {cart?.map(product => (
          <li key={`${product.id}`}>
            <ProductCard
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              discount={Math.floor(product.discountPercentage)}
              isLiked={likes.some(likedProduct => likedProduct.id === product.id)}
              isInCart={true}></ProductCard>
          </li>
        ))}
      </ul>
    </section>
  );
};
