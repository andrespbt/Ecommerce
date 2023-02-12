import { useSelector } from 'react-redux';

export const AccountInfoSection = () => {
  const { email, displayName } = useSelector(state => state.auth);

  return (
    <section className="mx-auto w-full p-8 sm:w-[80%] md:w-[60%]">
      <h2 className="text-center text-lg font-bold">Your account information</h2>
      <div className="mt-6 px-10 font-bold">
        <div className="mb-4 flex justify-between">
          <span>Email:</span>
          <span>{email}</span>
        </div>
        <div className="flex justify-between">
          <span>Name:</span>
          <span>{displayName}</span>
        </div>
      </div>
    </section>
  );
};
