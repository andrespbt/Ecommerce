import { CategoryList } from './CategoryList';

export const ShopByCategory = () => {
  return (
    <section className="my-44 grid w-full grid-cols-10 gap-10 text-center">
      <h2 className="col-start-2 col-end-10 mb-40 w-full text-5xl font-bold">Shop By Category</h2>
      <CategoryList />
    </section>
  );
};
