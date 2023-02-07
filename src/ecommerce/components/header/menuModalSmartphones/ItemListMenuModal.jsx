import { Link } from 'react-router-dom';
import { ItemCardMenuModal } from './ItemCardMenuModal';

export const ItemListMenuModal = ({ onModalMenClick, onModalWomenClick, onSearchClick, setIsMenuActive }) => {
  return (
    <ul className="px-6">
      <div
        onClick={onModalMenClick}
        className="relative">
        <ItemCardMenuModal
          text="Men"
          image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810726/ecommerceImages/smartphones-menu-modal/man-model_qmprcp.png"
          altImage="Men model"
        />
      </div>
      <div onClick={onModalWomenClick}>
        <ItemCardMenuModal
          text="Women"
          image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810753/ecommerceImages/smartphones-menu-modal/woman-model_veo9ke.png"
          altImage="Woman model"
        />
      </div>
      <Link
        to="/"
        replace>
        <ItemCardMenuModal
          text="Home"
          image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675811236/ecommerceImages/smartphones-menu-modal/others/home_nx7zuh.png"
          altImage="Home"
          onClick={() => setIsMenuActive(false)}
        />
      </Link>

      <ItemCardMenuModal
        onClick={onSearchClick}
        text="Search"
        image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675811236/ecommerceImages/smartphones-menu-modal/others/search_qdvze3.png"
        altImage="Search"
      />

      <Link to="/purchases">
        <ItemCardMenuModal
          text="My purchases"
          image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675811236/ecommerceImages/smartphones-menu-modal/others/purchases_cidyve.png"
          altImage="Purchases"
          onClick={() => setIsMenuActive(false)}
        />
      </Link>

      <Link to="/favorites">
        <ItemCardMenuModal
          text="My Favorites"
          image="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675811236/ecommerceImages/smartphones-menu-modal/others/favorite_dzfwiv.png"
          altImage="Favorite"
          onClick={() => setIsMenuActive(false)}
        />{' '}
      </Link>
    </ul>
  );
};
