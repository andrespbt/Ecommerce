import { Link } from 'react-router-dom';
import { ItemCardMenuModal } from './ItemCardMenuModal';
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
            image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810753/ecommerceImages/smartphones-menu-modal/woman-model_veo9ke.png"
            altImage="Woman model"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>

        <Link to="/women/category/dresses">
          <ItemCardMenuModal
            text="Dresses"
            image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810753/ecommerceImages/smartphones-menu-modal/women-dresses_gwgene.png"
            altImage="Women Dresses"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>

        <Link to="/women/category/shoes">
          <ItemCardMenuModal
            text="Shoes"
            image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810753/ecommerceImages/smartphones-menu-modal/women-shoes_xgmbhr.png"
            altImage="Women Shoes"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
        <Link to="/women/category/watches">
          <ItemCardMenuModal
            text="Watches"
            image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810753/ecommerceImages/smartphones-menu-modal/women-watches_uyogjf.png"
            altImage="Women Watches"
            onClick={() => setIsMenuActive(false)}
          />
        </Link>
      </ul>
    </>
  );
};
