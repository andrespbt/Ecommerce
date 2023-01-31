export const ItemCardMenuModal = ({ text, image, altImage, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`
        ${
          altImage?.includes('model') ? `peer/${text}` : ''
        } relative z-10 my-6 flex h-20 select-none list-none items-center justify-start rounded-lg bg-gray-300
        hover:cursor-pointer hover:bg-gray-400`}>
      <span className="ml-4 w-[135px] min-w-[130px] text-lg font-bold">{text}</span>
      <img
        className={`
        ${altImage?.includes('model') ? ' right-2 mb-[9px] w-[60px]' : ''} 
        ${altImage?.includes('Home') ? 'right-2 w-[80px]' : ''} 
        ${altImage?.includes('Home') ? 'right-2 w-[80px]' : ''}
        ${altImage?.includes('Search') ? 'right-2 bottom-5 w-[90px]' : ''}
        ${altImage?.includes('Purchase') ? 'right-2 bottom-[-8px] w-[80px]' : ''}
        ${altImage?.includes('Favorite') ? 'right-1 top-[-6px] w-[70px]' : ''}
         absolute`}
        src={image}
        alt={altImage}
      />
    </li>
  );
};
