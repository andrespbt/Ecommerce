import { Link } from 'react-router-dom';
import { ItemCardMenuModal } from './ItemCardMenuModal';
import MenShirts from '../../../../assets/images/men-shirts.png';
import MenShoes from '../../../../assets/images/men-shoes.png';
import MenWatches from '../../../../assets/images/men-watches.png';
import { NavMenuModalArrowLeftIcon } from '../../../icons/header';

export const MenCategoryListMenuModal = ({ onClick }) => {
  return (
    <>
      <NavMenuModalArrowLeftIcon
        onClick={onClick}
        className="absolute left-[30px] top-[155px] hover:cursor-pointer"
      />
      <ul className="p-6">
        <Link to="/men/category/shirts">
          <ItemCardMenuModal
            text="Shirts"
            image={MenShirts}
            altImage="Men Shirts"
          />
        </Link>
        <Link to="/men/category/shoes">
          <ItemCardMenuModal
            text="Shoes"
            image={MenShoes}
            altImage="Men Shoes"
          />
        </Link>
        <Link to="/men/category/watches">
          <ItemCardMenuModal
            text="Watches"
            image={MenWatches}
            altImage="Men Watches"
          />
        </Link>
      </ul>
    </>
  );
};
