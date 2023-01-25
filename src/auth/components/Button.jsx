export const Button = ({ children, onClick, type, text }) => {
  return (
    <button
      className="mt-3 flex w-full items-center justify-center rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 p-2 font-bold uppercase text-white hover:cursor-pointer hover:text-orange md:p-4"
      type={type}
      onClick={onClick}>
      {children ? children : ''}
      {text ? text : ''}
    </button>
  );
};
