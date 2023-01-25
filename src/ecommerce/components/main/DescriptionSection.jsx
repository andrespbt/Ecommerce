import { ButtonsDescriptionSection } from './ButtonsDescriptionSection';
import { TextDescriptionSection } from './TextDescriptionSection';

export const DescriptionSection = () => {
  return (
        <section className='lg:col-start-7 lg:col-end-11 mt-[5.5rem] flex flex-col'>
            <TextDescriptionSection/>
            <ButtonsDescriptionSection/>
        </section>
  )
}
