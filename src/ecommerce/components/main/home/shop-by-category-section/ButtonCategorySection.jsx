export const ButtonCategorySection = ({ section, category, text, onClick }) => {
  return (
    <button
      className="absolute left-0 right-0 bottom-6 m-auto h-[40px] w-48 rounded-2xl bg-white text-base font-bold hover:bg-gray-100"
      onClick={() => onClick(section, category)}>
      Shop {text}
    </button>
  );
};
