export const ItemListSubMenuWomenModal = ({ isModalWomenOpen }) => {
  return (
    <>
      <ul className={`${isModalWomenOpen ? 'h-24' : 'hidden'} bg-gray-200`}></ul>
    </>
  );
};
