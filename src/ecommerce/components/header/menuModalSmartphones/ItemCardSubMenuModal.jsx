export const ItemCardSubMenuModal = ({ text, image, altText }) => {
  return (
    <li className="my-3 flex items-center justify-between bg-gray-300 px-3">
      <span className="text-base font-bold">{text}</span>

      <img
        className="w-10 rounded-full"
        src={image}
        alt={altText}
      />
    </li>
  );
};
