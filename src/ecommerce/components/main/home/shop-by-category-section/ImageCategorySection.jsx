export const ImageCategorySection = ({ imageUrl, onClick, section, category, bg }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={`${bg ? `bg-${bg}` : 'bg-center'} h-full w-full bg-cover bg-no-repeat hover:cursor-pointer`}
      onClick={() => onClick(section, category)}></div>
  );
};
