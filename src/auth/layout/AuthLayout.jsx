export const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2D2D2D] via-[#363636] to-[#535051] py-10 sm:gap-8">
        <h1 className="flex w-full animate-roll justify-center">
          <img
            src="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675806988/ecommerceImages/logo_single_w98dcf.png"
            alt="CawEcommerce"
            className="max-h-[7rem] w-[7rem] sm:max-h-40 sm:w-40"
          />
        </h1>
        <div className="flex h-full max-h-[550px] w-full max-w-[700px] items-center justify-center">{children}</div>
      </div>
    </>
  );
};
