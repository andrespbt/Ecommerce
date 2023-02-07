import { Link } from 'react-router-dom';
import { ItemCardMenuModal } from './ItemCardMenuModal';
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
            image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810726/ecommerceImages/smartphones-menu-modal/man-model_qmprcp.png"
            altImage="Men model"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
        <Link to="/men/category/shirts">
          <ItemCardMenuModal
            text="Shirts"
            image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810727/ecommerceImages/smartphones-menu-modal/men-shirts_xyd3l3.png"
            altImage="Men Shirts"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
        <Link to="/men/category/shoes">
          <ItemCardMenuModal
            text="Shoes"
            image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810727/ecommerceImages/smartphones-menu-modal/men-shoes_tgrb5j.png"
            altImage="Men Shoes"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
        <Link to="/men/category/watches">
          <ItemCardMenuModal
            text="Watches"
            image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810727/ecommerceImages/smartphones-menu-modal/men-watches_fruzco.png"
            altImage="Men Watches"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
      </ul>
    </>
  );
};
