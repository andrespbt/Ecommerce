export const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-t from-[#FF7600] via-[#ED7E00] to-[#FF6700]">
        {children}
      </div>
    </>
  );
};
