export const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-start gap-8 bg-gradient-to-b from-[#2D2D2D] via-[#363636] to-[#535051] py-10">
        <h1 className="flex w-full animate-roll justify-center">
          <img
            src="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675806988/ecommerceImages/logo_single_w98dcf.png"
            alt="CawEcommerce"
            className="max-h-[7rem] w-[7rem] sm:max-h-40 sm:w-40"
          />
        </h1>
        {children}
      </div>
    </>
  );
};
