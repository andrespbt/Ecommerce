export const filterProductsCategory = arrayProducts => {
  if (!arrayProducts) return;

  const categories = ['womens-dresses', 'womens-shoes', 'mens-shirts', 'mens-shoes', 'mens-watches', 'womens-watches'];

  return arrayProducts.filter(product => categories.includes(product.category));
};
