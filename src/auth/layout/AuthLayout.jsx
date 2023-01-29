import Image from '../../assets/images/logo_single.png';
export const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-[#2D2D2D] via-[#363636] to-[#535051]">
        <h1 className="absolute top-[10vh] flex w-full animate-roll justify-center sm:top-[5vh]">
          <img
            src={Image}
            alt="CawEcommerce"
            className="w-[7rem] sm:w-40"
          />
        </h1>
        <div className="flex h-screen max-h-[900px] w-full items-center justify-center overflow-hidden sm:max-h-[1100px]">
          {children}
        </div>
      </div>
    </>
  );
};
