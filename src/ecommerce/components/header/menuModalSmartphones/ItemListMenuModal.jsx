import { ItemCardMenuModal } from './ItemCardMenuModal';
import ManModel from '@/assets/images/man-model.png';
import WomanModel from '@/assets/images/woman-model.png';
import Home from '@/assets/images/home.png';
import Search from '@/assets/images/search.png';
import Purchases from '@/assets/images/purchases.png';
import Favorite from '@/assets/images/favorite.png';
import { ItemListSubMenuMenModal, ItemListSubMenuWomenModal } from './index';
import { useState } from 'react';

export const ItemListMenuModal = () => {
  const [isModalMenOpen, setIsModalMenOpen] = useState(false);
  const [isModalWomenOpen, setIsModalWomenOpen] = useState(false);

  const onModalMenClick = () => {
    setIsModalMenOpen(!isModalMenOpen);
  };
  const onModalWomenClick = () => {
    setIsModalWomenOpen(!isModalWomenOpen);
  };

  return (
    <ul className="px-6">
      <div
        onClick={onModalMenClick}
        className="relative">
        <ItemCardMenuModal
          text="Men"
          image={ManModel}
          altImage="Men model"
        />
        <ItemListSubMenuMenModal isModalMenOpen={isModalMenOpen} />
      </div>
      <div onClick={onModalWomenClick}>
        <ItemCardMenuModal
          text="Women"
          image={WomanModel}
          altImage="Woman model"
        />
        <ItemListSubMenuWomenModal isModalWomenOpen={isModalWomenOpen} />
      </div>
      <ItemCardMenuModal
        text="Home"
        image={Home}
        altImage="Home"
      />
      <ItemCardMenuModal
        text="Search"
        image={Search}
        altImage="Search"
      />
      <ItemCardMenuModal
        text="My purchases"
        image={Purchases}
        altImage="Purchases"
      />
      <ItemCardMenuModal
        text="My Favorites"
        image={Favorite}
        altImage="Favorite"
      />
    </ul>
  );
};
