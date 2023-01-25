import { NavBar } from "./NavBar"
import { Right } from "./Right"

export const Header = () => {
  return (
    <header className='flex lg:justify-between items-center border-b-2  '>
        <NavBar />
        <Right />
    </header>
  )
}
