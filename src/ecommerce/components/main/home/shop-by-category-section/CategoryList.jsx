import { useNavigate } from 'react-router-dom';
import { CardCategorySection } from './CardCategorySection';

export const CategoryList = () => {
  const navigate = useNavigate();

  const onItemClick = (section, category) => {
    if (window.location.pathname.includes('category')) {
      navigate(`${section}/category/${category}`);
    } else {
      navigate(`${section}/category/${category.split('-')[1]}`);
      navigate(0);
    }
  };
  return (
    <>
      <h3 className="col-start-2 col-end-10 mb-8 w-full text-4xl font-bold sm:hidden">Women</h3>
      <CardCategorySection
        imageUrl="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810481/ecommerceImages/woman/woman-dress-category-section_lfiqm7.webp"
        section={'women'}
        category={'women-dresses'}
        text={'Dresses'}
        onClick={onItemClick}
        classes={'md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-4'}
      />

      <CardCategorySection
        imageUrl="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810481/ecommerceImages/woman/woman-watch-category-section_lxu9x5.webp"
        section={'women'}
        category={'women-watches'}
        onClick={onItemClick}
        text={'Watches'}
        classes={'md:col-start-7 md:col-end-13 lg:col-start-5 lg:col-end-9 lg:row-start-2 lg:row-end-4'}
      />

      <CardCategorySection
        imageUrl="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810481/ecommerceImages/woman/woman-shoes-category-section_euywkw.webp"
        section={'women'}
        category={'women-shoes'}
        onClick={onItemClick}
        text={'Shoes'}
        classes={'md:col-start-1 md:col-end-13 lg:col-start-9 lg:col-end-13  lg:row-start-2 lg:row-end-4'}
      />

      <h3 className="col-start-2 col-end-10 mx-8 w-full text-4xl font-bold sm:hidden">Men</h3>

      <CardCategorySection
        imageUrl="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810197/ecommerceImages/man/man-shirts-category-section_obgjde.webp"
        section={'men'}
        category={'men-shirts'}
        onClick={onItemClick}
        text={'Shirts'}
        classes={'md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-5 lg:row-start-4 lg:row-end-6'}
      />

      <CardCategorySection
        imageUrl="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810197/ecommerceImages/man/man-watches-category-section_gljlcs.webp"
        section={'men'}
        category={'men-watches'}
        onClick={onItemClick}
        text={'Watches'}
        classes={'md:col-start-7 md:col-end-13 lg:col-start-5 lg:col-end-9 lg:row-start-4 lg:row-end-6'}
      />

      <CardCategorySection
        imageUrl="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810197/ecommerceImages/man/man-shoes-category-section_qurnv4.webp"
        section={'men'}
        category={'men-shoes'}
        onClick={onItemClick}
        text={'Shoes'}
        classes={'md:col-start-1 md:col-end-13 lg:col-start-9 lg:col-end-13 lg:row-start-4 lg:row-end-6'}
      />
    </>
  );
};
