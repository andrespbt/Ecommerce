import { CardGridSection } from './CardGridSection';

export const GridSection = ({ images, section, h3Text, category }) => {
  return (
    <section className="my-40 grid gap-1 md:grid-rows-4 lg:grid-cols-12 lg:grid-rows-3">
      {/* Text */}
      <div className="col-start-1 col-end-5 row-start-1 row-end-2 hidden max-h-[600px] lg:inline">
        <img
          className="h-full w-full object-cover"
          src={images[0]}
          alt={`${section} model`}
        />
      </div>
      <div className="hidden max-h-[600px] w-full flex-col items-center justify-evenly bg-latteFroth md:flex lg:col-start-5 lg:col-end-13 lg:row-start-1 lg:row-end-2 lg:h-full lg:justify-center lg:gap-16">
        <h3 className="text-3xl font-bold uppercase md:text-5xl">{h3Text}</h3>
        <div className="font-semibold">
          <span className="block md:text-lg lg:text-xl">Our latest best-selling essentials,</span>
          <span className="md:text-lg lg:text-xl">updated in new colors for the season.</span>
        </div>
      </div>

      {/* Images on large screens  */}

      <CardGridSection
        category={category}
        gridPosition="hidden lg:inline col-start-1 col-end-9 row-start-2 row-end-3"
        image={images[1]}
        imageAlt={`${section} ${category} model`}
        textH3="New Arrivals"
        textSpan=" "
        section={section}
      />

      <img
        className="col-start-9 col-end-13 row-start-2 row-end-3 hidden h-full w-full object-cover md:max-h-[600px] lg:inline"
        src={images[2]}
        alt={`${category} photo`}
      />

      {/* Cards */}
      <CardGridSection
        category={category}
        gridPosition="lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:row-end-4"
        image={images[3]}
        imageAlt={`${section} ${category} model`}
        section={section}
      />
      <CardGridSection
        category="watches"
        gridPosition="lg:col-start-5 lg:col-end-9 lg:row-start-3 lg:row-end-4"
        image={images[4]}
        imageAlt={`${section} watch model`}
        section={section}
      />
      <CardGridSection
        category="shoes"
        gridPosition="lg:col-start-9 lg:col-end-13 lg:row-start-3 lg:row-end-4"
        image={images[5]}
        imageAlt="Shoes photo"
        section={section}
      />
    </section>
  );
};
