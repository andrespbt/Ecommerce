import { DescriptionSection } from "./DescriptionSection"
import { ImagesSection } from "./ImagesSection"

export const Main = () => {
  return (
    <main className='grid lg:grid-cols-11 lg:mt-[5rem]'>
        <ImagesSection/>
        <DescriptionSection/>
    </main>
  )
}
