export const ItemCardMenuModal = ({ text, image, altImage, onClick }) => {
  //bg-gray-300
  return (
    <li
      onClick={onClick}
      className="ring-3  relative z-10 my-6 flex h-20 select-none list-none items-center justify-start
        rounded-lg bg-gradient-to-b from-gray-300 to-white shadow-xl ring-black/10 hover:cursor-pointer hover:bg-gradient-to-b hover:from-gray-400 hover:to-gray-100 hover:ring-0">
      <span className="ml-4 w-[135px] min-w-[130px] text-lg font-bold">{text}</span>
      <img
        className={`absolute right-2 w-[60px]
        ${altImage?.includes('model') ? '  mb-[9px] w-[60px]' : ''} 
        ${altImage?.includes('Home') ? ' w-[80px]' : ''} 
        ${altImage?.includes('Home') ? ' w-[80px]' : ''}
        ${altImage?.includes('Search') ? ' bottom-5 w-[90px]' : ''}
        ${altImage?.includes('Purchase') ? ' bottom-[-8px] w-[80px]' : ''}
        ${altImage?.includes('Favorite') ? 'right-1 top-[-6px] w-[70px]' : ''}
         ${altImage?.includes('Shirts') ? 'right-[-1rem] w-[120px]' : ''}
         ${altImage?.includes('Men Shoes') ? 'top-0 right-[.7rem] w-[68px]' : ''}
         ${altImage?.includes('Men Watches') ? 'right-[1.2rem] w-[120px]' : ''}
         ${altImage?.includes('Dresses') ? 'right-0 w-[120px]' : ''}
         ${altImage?.includes('Women Shoes') ? 'right-5 w-[52px]' : ''}
         ${altImage?.includes('Women Watches') ? 'right-4 h-[65px] w-[80px] object-cover' : ''}
         
         `}
        src={image}
        alt={altImage}
      />
    </li>
  );
};
