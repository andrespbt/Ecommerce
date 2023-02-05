import Adidas from '../../../../../assets/images/brands-adidas.webp';
import Tommy from '../../../../../assets/images/brands-tommy.webp';
import Carhat from '../../../../../assets/images/brands-carhat.webp';
import Ellesse from '../../../../../assets/images/brands-ellesse.webp';
import Martens from '../../../../../assets/images/brands-martens.webp';
import { useState } from 'react';
export const BrandsSection = () => {
  const [isInSection, setIsInSection] = useState(false);

  const onMouseIn = e => {
    setIsInSection(true);
  };

  const onMouseOut = e => {
    setIsInSection(false);
  };
  return (
    <section
      className="relative bg-white py-24"
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}>
      <h4 className="peer z-50 mb-10 text-center text-xl font-extrabold">TRENDING BRANDS</h4>
      <ul className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap lg:flex-nowrap xl:justify-around">
        <li
          className={`${
            isInSection ? 'opacity-60' : 'opacity-100'
          } transition-all duration-300 ease-in hover:opacity-100`}>
          <img
            className="hover: max-w-[170px] hover:cursor-pointer sm:max-w-[250px] xl:max-w-[350px]"
            src={Adidas}
            alt="Adidas Brand"
          />
        </li>
        <li
          className={`${
            isInSection ? 'opacity-60' : 'opacity-100'
          } transition-all duration-300 ease-in hover:opacity-100`}>
          <img
            className="max-w-[170px] hover:cursor-pointer sm:max-w-[250px] xl:max-w-[350px]"
            src={Tommy}
            alt="Tommy Brand"
          />
        </li>
        <li
          className={`${
            isInSection ? 'opacity-60' : 'opacity-100'
          } transition-all duration-300 ease-in hover:opacity-100`}>
          <img
            className="max-w-[170px] hover:cursor-pointer sm:max-w-[250px] xl:max-w-[350px]"
            src={Carhat}
            alt="Carhat Brand"
          />
        </li>
        <li
          className={`${
            isInSection ? 'opacity-60' : 'opacity-100'
          } transition-all duration-300 ease-in hover:opacity-100`}>
          <img
            className="max-w-[170px] hover:cursor-pointer sm:max-w-[250px] xl:max-w-[350px]"
            src={Ellesse}
            alt="Ellesse Brand"
          />
        </li>
        <li
          className={`${
            isInSection ? 'opacity-60' : 'opacity-100'
          } transition-all duration-300 ease-in hover:opacity-100`}>
          <img
            className="max-w-[170px] hover:cursor-pointer sm:max-w-[250px] xl:max-w-[350px]"
            src={Martens}
            alt="Martens Brand"
          />
        </li>
      </ul>
      <div className="absolute inset-0 z-0 h-0 w-full bg-gray-100/50"></div>
    </section>
  );
};
