import { ProductCard } from '../ProductCard';

export const BuysInfoSection = ({ buys, likes, cart }) => {
  const ids = buys.map(product => product.id);
  const buysFiltered = buys.filter(({ id }, index) => !ids.includes(id, index + 1));

  console.log(buysFiltered);
  return (
    <section className="my-10 mx-6">
      <h2 className="my-6 text-center text-lg font-bold">Products that you already have</h2>
      <ul className="flex h-full w-full flex-wrap justify-center gap-4">
        {buysFiltered?.map(product => (
          <li key={`${product.id}`}>
            <ProductCard
              id={product.id}
              title={product.title}
              img={product.img}
              price={product.price}
              discount={Math.floor(product.discountPercentage)}
              isLiked={likes.some(likedProduct => likedProduct.id === product.id)}
              isInCart={cart.some(cartProduct => cartProduct.id === product.id)}></ProductCard>
          </li>
        ))}
      </ul>
    </section>
  );
};
