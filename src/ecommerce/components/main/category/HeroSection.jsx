export const HeroSection = ({ section, category }) => {
  return (
    <section className="md:mt-14">
      <div className="flex h-40 w-full justify-center bg-gradient-to-b from-gray-400 to-gray-100 md:h-52">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold capitalize text-white">
            {section}'s {category}
          </h2>
        </div>
      </div>
    </section>
  );
};
