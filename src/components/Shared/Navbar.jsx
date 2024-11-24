import Moonex from "../../assets/moonex.png"
import ColoredButton from "./ColoredButton"

function Navbar() {
  return (
    <nav className="flex flex-row w-full items-center justify-between  "  >
      {/* Logo */}
      <div className="flex items-center ">
        <img src={Moonex} alt="" className="w-13" />
        <p className="text-amber-300 text-lg font-bold pl-3">Moonex</p>
      </div>
      {/* Dynamic Island */}
      <div className="Island" id="island">
       <ul className="flex ps-0.5 gap-10 text-white font-semibold cursor-pointer">
        <li>Home</li>
        <li>About Us</li>
        <li>Roadmap</li>
        <li>FAQs</li>
        <li>Contact Us</li>
       </ul>
      </div>
      {/* Menu Button */}
      <ColoredButton />
    </nav>
  )
}

export default Navbar