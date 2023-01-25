export const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-orange">{children}</div>
    </>
  );
};
