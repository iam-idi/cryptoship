import { NavLink } from "react-router-dom";
import GlobalData from "./GlobalData";

const Header = () => {
  return (
    <>
    <header className="bg-stone-50 border-b-4 border-stone-200 py-2 sm:py-4 flex justify-around items-center fixed w-full">
        <h1 className="text-stone-600 text-lg sm:text-2xl font-extrabold">CryptoShip</h1>
        <nav className="flex justify-center items-center gap-2 sm:gap-4 text-stone-500 text-xs sm:text-sm font-semibold">
            <NavLink to={'/'} className="hover:text-stone-600">HOME</NavLink>
            <NavLink to={'tools'} className="hover:text-stone-600">TOOLS</NavLink>
            <NavLink to={'learn'} className="hover:text-stone-600">LEARN</NavLink>
        </nav>
    </header>
    <GlobalData />
    </>
  )
}

export default Header;