export const Button = ({ children, onClick, type, text }) => {
  return (
    <button
      className="mt-3 flex w-full items-center justify-evenly rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 p-2 text-sm font-medium uppercase text-white hover:cursor-pointer hover:text-orange md:justify-center md:p-4 md:text-xl md:font-semibold"
      type={type}
      onClick={onClick}>
      {children ? children : ''}
      {text ? text : ''}
    </button>
  );
};
