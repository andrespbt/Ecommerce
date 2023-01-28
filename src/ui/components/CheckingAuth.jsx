import Image from '../../assets/images/logo_single.png';

export const CheckingAuth = () => {
  return (
    <div className="z-1 fixed left-0 top-0 flex h-full w-full items-center overflow-auto bg-[rgba(0,0,0,0.4)]">
      <img
        src={Image}
        alt="CawEcommerce"
        className="m-auto block w-20 animate-spin"
      />
    </div>
  );
};
