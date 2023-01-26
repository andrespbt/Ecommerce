import Image from '../../assets/images/logo_single.png';
export const AuthLayout = ({ children }) => {
  return (
    <>
      <h1 className="absolute top-[10vh] flex w-full animate-roll justify-center md:top-[5vh]">
        <img
          src={Image}
          alt="CawEcommerce"
          className="w-20 md:w-40"
        />
      </h1>
      <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-t from-[#FF7600] via-[#ED7E00] to-[#FF6700]">
        {children}
      </div>
    </>
  );
};
