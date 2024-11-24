import Navbar from "../Shared/Navbar";
import circles from "../../assets/circles.png";
import ColoredButton from "../Shared/ColoredButton";
import Ball from "../../assets/ball.png";
import Star1 from "../../assets/star-img.png";

function Hero() {
  return (
    <>
    <Navbar />
    {/* circles */}
    <img className="absolute left-0 w-10/12" src={circles} alt="" />
    <div className="w-96 h-52 left-1 top-11 bg-buttonSecondGradient absolute rounded-full blur-3xl opacity-20"></div>
    <div className="w-96 h-52 right-1 top-96 bg-buttonSecondGradient absolute rounded-full blur-3xl opacity-20"></div>

    <div className="flex items-center justify-center w-full px-10">
    
    <div className="w-full mt-56 flex relative justify-between z-10">
    <img className="absolute left-1 z-20 -top-24" src={Star1} alt="" />
    <img className="absolute right-28 z-20 -top-36 scale-50" src={Star1} alt="" />
    <img className="absolute right-28 z-20 top-72" src={Star1} alt="" />
    <div className=" gap-4 flex flex-col">
        <h1 className="text-white text-5xl">Trusted Mulit-Chain <span className="text-buttonSecondGradient"> <br />Dex</span> PlatForm</h1>
        <p className="text-gray-400 text-lg"> Trade, earn, and own crypto on the all-in-one multi-chain DEX</p>
        <div className="gap-4  flex flex-row">
            <ColoredButton  />
            <button className="w-15 h-11 px-5 rounded-2xl bg-transparent text-buttonSecondGradient border-buttonSecondGradient border-2">Trade Crypto</button>

        </div>
    </div>
    <img className="w-55 -mt-80 absolute -right-20" src={Ball} alt="" />
    </div>
    </div>
    
    
    </>
    
  )
}

export default Hero