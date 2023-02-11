import { useSelector } from 'react-redux';
import { ProductCard } from '../ProductCard';
import { EmptyPurchasesSection } from './EmptyPurchasesSection';

export const PurchasesSection = () => {
  const { buys, likes, cart } = useSelector(state => state.ecommerce);

  const ids = buys.map(product => product.id);
  const buysFiltered = buys.filter(({ id }, index) => !ids.includes(id, index + 1));

  return (
    <section className={`${buys.length > 0 ? 'align-middle' : ''} h-full w-full bg-white py-10`}>
      {buys.length > 0 ? (
        <>
          <h2 className="my-8 text-center font-bold">YOUR PURCHASES</h2>
          <ul className="flex h-full w-full flex-wrap justify-center gap-4">
            {buysFiltered?.map(product => (
              <li key={`${product.id}`}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  img={product.img}
                  price={product.price}
                  discount={Math.floor(product.discount)}
                  isLiked={likes?.some(likedProduct => likedProduct.id === product.id)}
                  isInCart={cart?.some(cartProduct => cartProduct.id === product.id)}></ProductCard>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <EmptyPurchasesSection />
      )}
    </section>
  );
};
