import { ItemCardSubMenuModal } from './ItemCardSubMenuModal';
import Shoes from '@/assets/images/image-product-1.jpg';

export const ItemListSubMenuMenModal = ({ isModalMenOpen }) => {
  return (
    <>
      <ul
        className={`${
          isModalMenOpen ? 'h-52' : 'hidden'
        } relative bottom-[2rem] left-2 z-0  w-64 list-none rounded-lg bg-gray-200 py-5`}>
        <ItemCardSubMenuModal
          text="Shoes"
          image={Shoes}
          altText={'Shoes'}
        />
        <ItemCardSubMenuModal
          text="Shoes"
          image={Shoes}
          altText={'Shoes'}
        />
        <ItemCardSubMenuModal
          text="Shoes"
          image={Shoes}
          altText={'Shoes'}
        />
      </ul>
    </>
  );
};
