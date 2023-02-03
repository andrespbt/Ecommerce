import { useNavigate } from 'react-router-dom';
import { CardCategorySection } from './CardCategorySection';

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
        imageUrl={'"https://images.pexels.com/photos/15253746/pexels-photo-15253746.jpeg"'}
        section={'women'}
        category={'women-dresses'}
        text={'Dresses'}
        onClick={onItemClick}
      />

      <CardCategorySection
        imageUrl={
          '"https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"'
        }
        section={'women'}
        category={'women-watches'}
        onClick={onItemClick}
        text={'Watches'}
      />

      <CardCategorySection
        imageUrl={
          '"https://images.pexels.com/photos/6748262/pexels-photo-6748262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"'
        }
        section={'women'}
        category={'women-shoes'}
        onClick={onItemClick}
        text={'Shoes'}
      />

      <h3 className="col-start-2 col-end-10 mx-8 w-full text-4xl font-bold sm:hidden">Men</h3>

      <CardCategorySection
        imageUrl={
          '"https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"'
        }
        section={'men'}
        category={'men-shirts'}
        onClick={onItemClick}
        text={'Shirts'}
      />

      <CardCategorySection
        imageUrl={
          '"https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"'
        }
        section={'men'}
        category={'men-watches'}
        onClick={onItemClick}
        text={'Watches'}
      />

      <CardCategorySection
        imageUrl={
          '"https://images.pexels.com/photos/1153838/pexels-photo-1153838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"'
        }
        section={'men'}
        category={'men-shoes'}
        onClick={onItemClick}
        text={'Shoes'}
      />
    </>
  );
};
