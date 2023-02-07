import { CategoryList } from './CategoryList';

export const ShopByCategory = () => {
  return (
    <section className="my-40 grid w-full grid-cols-10 items-center gap-10 text-center md:grid-cols-12 md:gap-2 lg:grid-rows-5 lg:gap-0">
      <h2 className="col-start-2 col-end-10 mb-20 w-full text-5xl font-bold sm:mb-40 md:col-start-4 lg:col-start-3 lg:col-end-11 lg:text-8xl">
        Shop By Category
      </h2>
      <CategoryList />
    </section>
  );
};
