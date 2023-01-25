import IconCartButton from '@/assets/images/icon-cartButton.svg';

export const ButtonsDescriptionSection = () => {
  return (
        <div className='mt-[3rem] grid grid-cols-3 h-10'>
            <div className='col-start-1 col-end-2 w-full grid grid-cols-3 justify-around bg-lightGrayBlue mr-2 max-w-[95%] items-center rounded-xl'>
                <button className='text-orange font-bold hover:cursor-pointer col-start-1 col-end-2'>-</button>
                <span className='font-bold col-start-2 col-end-3 text-center'>0</span>
                <button className='text-orange font-bold hover:cursor-pointer col-start-3 col-end-4'>+</button>
            </div>
            
            <button className='col-start-2 col-end-4 bg-orange rounded-xl p-4 text-white flex items-center justify-center gap-5 text-base lg:mr-16'>
            <img src={IconCartButton} alt="Cart" />
                Add to cart
            </button>
        </div>    
  )
}
