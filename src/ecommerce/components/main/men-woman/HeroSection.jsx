import { CategoryArrowDownIcon } from '../../../icons/main/category/CategoryArrowDownIcon';

export const HeroSection = ({ color, text, image, imageAlt }) => {
  return (
    <section className="pointer-events-none h-[500px] md:mt-14 lg:h-[800px] xl:h-[91.5vh]">
      <div className="relative h-full md:flex">
        <div
          className={`${color} absolute bottom-12 flex h-fit w-full min-w-[350px] flex-col items-center p-4 md:static md:bottom-0 md:h-full md:justify-center md:gap-4 lg:gap-12`}>
          <h2 className="mb-2 text-center text-4xl font-bold lg:text-7xl">FIND YOUR STYLE</h2>
          <span className="hidden h-[40px] items-center bg-black p-4 text-center font-semibold uppercase text-white md:inline-flex lg:h-[80px] lg:text-2xl">
            {text}
          </span>
          <span className="font-semibold lg:text-lg">
            SHOP NOW{' '}
            <CategoryArrowDownIcon
              className="ml-3 inline h-[20px] w-[20px] animate-bounce lg:h-[30px] lg:w-[30px]"
              viewBox="0 0 18 18"
            />
          </span>
        </div>

        <div className="w-full">
          <img
            className="max-h-[500px] w-full min-w-[382px] object-cover object-center md:object-fill lg:max-h-full lg:object-fill"
            src={image}
            alt={imageAlt}
          />
        </div>
      </div>
    </section>
  );
};
