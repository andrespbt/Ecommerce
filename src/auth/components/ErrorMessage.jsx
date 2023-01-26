import { LoginWarningIcon } from '../icons/LoginWarningIcon';

export const ErrorMessage = ({ message }) => {
  return (
    <div className="mx-auto mt-4 flex h-12 w-80 items-center justify-center rounded-xl border-2 border-solid border-red-600 bg-red-200 text-center text-red-600">
      <LoginWarningIcon className="text-lg" />
      <p
        className="font-bold"
        role="alert">
        {message}
      </p>
    </div>
  );
};
