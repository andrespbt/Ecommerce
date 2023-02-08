export const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2D2D2D] via-[#363636] to-[#535051]">
        <h1 className="mt-5 flex w-full animate-roll justify-center">
          <img
            src="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675806988/ecommerceImages/logo_single_w98dcf.png"
            alt="CawEcommerce"
            className="w-[7rem] sm:w-40"
          />
        </h1>
        <div className="flex h-full w-full items-center justify-center overflow-hidden">{children}</div>
      </div>
    </>
  );
};
