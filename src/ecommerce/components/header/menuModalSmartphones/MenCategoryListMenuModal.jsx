import { Link } from 'react-router-dom';
import { ItemCardMenuModal } from './ItemCardMenuModal';
import ManModel from '../../../../assets/images/man-model.png';
import MenShirts from '../../../../assets/images/men-shirts.png';
import MenShoes from '../../../../assets/images/men-shoes.png';
import MenWatches from '../../../../assets/images/men-watches.png';
import { NavMenuModalArrowLeftIcon } from '../../../icons/header';

export const MenCategoryListMenuModal = ({ onClick, setIsMenuActive }) => {
  return (
    <>
      <NavMenuModalArrowLeftIcon
        onClick={onClick}
        className="absolute left-[30px] top-[155px] hover:cursor-pointer"
      />
      <ul className="p-6">
        <Link to="/men">
          <ItemCardMenuModal
            text="Main"
            image={ManModel}
            altImage="Men model"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
        <Link to="/men/category/shirts">
          <ItemCardMenuModal
            text="Shirts"
            image={MenShirts}
            altImage="Men Shirts"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
        <Link to="/men/category/shoes">
          <ItemCardMenuModal
            text="Shoes"
            image={MenShoes}
            altImage="Men Shoes"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
        <Link to="/men/category/watches">
          <ItemCardMenuModal
            text="Watches"
            image={MenWatches}
            altImage="Men Watches"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
      </ul>
    </>
  );
};
