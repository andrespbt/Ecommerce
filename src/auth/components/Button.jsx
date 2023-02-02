export const Button = ({ children, onClick, type, text, icon }) => {
  return (
    <button
      className="relative mt-3 flex w-full max-w-[620px] items-center justify-center rounded-2xl bg-gradient-to-b from-gray-700 to-gray-900 p-2 text-center text-sm font-medium uppercase text-white hover:cursor-pointer hover:text-gray-300 sm:justify-center sm:p-4 sm:text-xl sm:font-semibold"
      type={type}
      onClick={onClick}>
      {icon && icon}
      <span>
        {children ? children : ''}
        {text ? text : ''}
      </span>
    </button>
  );
};
