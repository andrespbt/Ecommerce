import { Link } from 'react-router-dom';

export const OutfitSection = () => {
  return (
    <section className="flex flex-col gap-[7rem] pb-36">
      <h3 className="text-center text-4xl font-bold lg:text-5xl">Wear Now, Love Forever</h3>
      <div className="mx-auto flex w-[70%] flex-col gap-[7rem] bg-transparent lg:w-[90%] lg:flex-row lg:justify-between xl:justify-around">
        <Link to="/women/category/women-dresses">
          <div className="flex flex-col items-center gap-7 lg:h-full lg:w-full lg:justify-between">
            <img
              className="min-w-[300px] sm:h-[650px] lg:h-[750px]"
              src="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810589/ecommerceImages/outfit/woman-outfit-section_fc4ljl.jpg"
              alt="Woman model photo"
            />
            <h4 className="text-4xl font-extrabold">FIND YOURS</h4>
            <span className="text-lg">Fancy Dresses</span>
            <button className="mt-3 h-[70px] w-[250px] border-4 border-black font-bold transition-all duration-300 ease-in hover:bg-black hover:text-white ">
              SHOP NOW
            </button>
          </div>
        </Link>
        <Link to="/men/category/men-shirts">
          <div className="flex flex-col items-center gap-7 lg:h-full lg:w-full lg:justify-between">
            <img
              className="min-w-[300px] sm:h-[650px] lg:h-[750px]"
              src="https://res.cloudinary.com/dxirtcrxd/image/upload/v1675810590/ecommerceImages/outfit/man-outfit-section_uyjgol.webp"
              alt="Man model photo"
            />
            <h4 className="text-4xl font-extrabold">TOPMAN</h4>
            <span className="text-lg">Fancy Feel</span>
            <button className="mt-3 h-[70px] w-[250px] border-4 border-black font-bold transition-all duration-300 ease-in hover:bg-black hover:text-white ">
              SHOP NOW
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};
