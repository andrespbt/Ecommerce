import { useNavigate } from 'react-router-dom';
import { CardCategorySection } from './CardCategorySection';
import WomanDress from '../../../../../assets/images/woman-dress-category-section.webp';
import WomanWatch from '../../../../../assets/images/woman-watch-category-section.webp';
import WomanShoes from '../../../../../assets/images/woman-shoes-category-section.webp';
import ManShirts from '../../../../../assets/images/man-shirts-category-section.webp';
import ManWatches from '../../../../../assets/images/man-watches-category-section.webp';
import ManShoes from '../../../../../assets/images/man-shoes-category-section.webp';

export const CategoryList = () => {
  const navigate = useNavigate();

  const onItemClick = (section, category) => {
    if (window.location.pathname.includes('category')) {
      navigate(`${section}/category/${category}`);
    } else {
      navigate(`${section}/category/${category}`);
      navigate(0);
    }
  };
  return (
    <>
      <h3 className="col-start-2 col-end-10 mb-8 w-full text-4xl font-bold sm:hidden">Women</h3>
      <CardCategorySection
        imageUrl={WomanDress}
        section={'women'}
        category={'women-dresses'}
        text={'Dresses'}
        onClick={onItemClick}
        classes={'md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-5 lg:row-start-2 lg:row-end-4'}
      />

      <CardCategorySection
        imageUrl={WomanWatch}
        section={'women'}
        category={'women-watches'}
        onClick={onItemClick}
        text={'Watches'}
        classes={'md:col-start-7 md:col-end-13 lg:col-start-5 lg:col-end-9 lg:row-start-2 lg:row-end-4'}
      />

      <CardCategorySection
        imageUrl={WomanShoes}
        section={'women'}
        category={'women-shoes'}
        onClick={onItemClick}
        text={'Shoes'}
        classes={'md:col-start-1 md:col-end-13 lg:col-start-9 lg:col-end-13  lg:row-start-2 lg:row-end-4'}
      />

      <h3 className="col-start-2 col-end-10 mx-8 w-full text-4xl font-bold sm:hidden">Men</h3>

      <CardCategorySection
        imageUrl={ManShirts}
        section={'men'}
        category={'men-shirts'}
        onClick={onItemClick}
        text={'Shirts'}
        classes={'md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-5 lg:row-start-4 lg:row-end-6'}
      />

      <CardCategorySection
        imageUrl={ManWatches}
        section={'men'}
        category={'men-watches'}
        onClick={onItemClick}
        text={'Watches'}
        classes={'md:col-start-7 md:col-end-13 lg:col-start-5 lg:col-end-9 lg:row-start-4 lg:row-end-6'}
      />

      <CardCategorySection
        imageUrl={ManShoes}
        section={'men'}
        category={'men-shoes'}
        onClick={onItemClick}
        text={'Shoes'}
        classes={'md:col-start-1 md:col-end-13 lg:col-start-9 lg:col-end-13 lg:row-start-4 lg:row-end-6'}
      />
    </>
  );
};
