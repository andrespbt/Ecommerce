import Image from '../../assets/images/logo_single.png';

export const CheckingAuth = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center overflow-auto bg-[rgba(0,0,0,0.1)]">
      <img
        src={Image}
        alt="CawEcommerce"
        className="z-50 m-auto block w-20 animate-spin"
      />
    </div>
  );
};
