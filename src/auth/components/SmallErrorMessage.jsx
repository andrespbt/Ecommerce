export const SmallErrorMessage = ({ message }) => {
  return (
    <small
      className="relative bottom-5 left-2 text-red-600 sm:bottom-7 sm:text-base"
      role="alert">
      {message}
    </small>
  );
};
