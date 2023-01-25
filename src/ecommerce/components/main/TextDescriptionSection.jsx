export const TextDescriptionSection = () => {
  return (
        <>
            <span className='font-bold text-orange text-base tracking-[0.2rem] uppercase lg:mb-[1rem]'>Sneaker Company</span>
            <h2 className='font-bold text-[3rem] lg:mb-[3rem] leading-[55px] lg:pr-2'>Fall Limited Edition Sneakers</h2>
            <p className='text-lg text-darkGrayBlue] lg:mb-[3rem] lg:pr-[2rem]'>
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            <div className='flex items-center mb-1'>
                <p className='font-bold text-2xl mr-4'>$125.00</p>
                <p className='font-bold text-orange bg-paleOrange text-sm px-2 rounded-sm'>50%</p>
            </div>
            <span className='line-through text-grayBlue font-bold'>
                $250.00
            </span> 

        </>
  )
}
