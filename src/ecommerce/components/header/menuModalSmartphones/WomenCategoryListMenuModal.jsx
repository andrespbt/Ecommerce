import { Link } from 'react-router-dom';
import { ItemCardMenuModal } from './ItemCardMenuModal';
import WomanModel from '../../../../assets/images/woman-model.png';
import WomenDresses from '../../../../assets//images/women-dresses.png';
import WomenShoes from '../../../../assets//images/women-shoes.png';
import WomenWatches from '../../../../assets//images/women-watches2.png';
import { NavMenuModalArrowLeftIcon } from '../../../icons/header';

export const WomenCategoryListMenuModal = ({ onClick, setIsMenuActive }) => {
  return (
    <>
      <NavMenuModalArrowLeftIcon
        onClick={onClick}
        className="absolute left-[30px] top-[155px] hover:cursor-pointer"
      />
      <ul className="p-6">
        <Link to="/women">
          <ItemCardMenuModal
            text="Main"
            image={WomanModel}
            altImage="Woman model"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>

        <Link to="/women/category/dresses">
          <ItemCardMenuModal
            text="Dresses"
            image={WomenDresses}
            altImage="Women Dresses"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>

        <Link to="/women/category/shoes">
          <ItemCardMenuModal
            text="Shoes"
            image={WomenShoes}
            altImage="Women Shoes"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
        <Link to="/women/category/watches">
          <ItemCardMenuModal
            text="Watches"
            image={WomenWatches}
            altImage="Women Watches"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
      </ul>
    </>
  );
};
