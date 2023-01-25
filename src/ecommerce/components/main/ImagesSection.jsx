import ImageProduct1 from '@/assets/images/image-product-1.jpg';
import ImageProduct2 from '@/assets/images/image-product-2.jpg';
import ImageProduct3 from '@/assets/images/image-product-3.jpg';
import ImageProduct4 from '@/assets/images/image-product-4.jpg';
import { ImageItem } from './ImageItem';

export const ImagesSection = () => {
  return (
    <section className='lg:col-start-2 lg:col-end-6 lg:py-7'>

        <img className='rounded-[2rem] lg:max-h-[500px] w-full hover:cursor-pointer' src={ImageProduct1} alt="Product 1" />

        <div className='grid grid-cols-11 mt-6'>
            
        <ImageItem image={ImageProduct1} start={1} end={3}/>
        <ImageItem image={ImageProduct2} start={4} end={6}/>
        <ImageItem image={ImageProduct3} start={7} end={9}/>
        <ImageItem image={ImageProduct4} start={10} end={12}/>
        </div>
    </section>
  )
}
