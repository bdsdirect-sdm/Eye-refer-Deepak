import SingUp from "./signup/SingUp"
import imageLogo from "../assets/logo.png"

const Form = () => {
  return (
    <div className=' h-screen flex flex-row'>
        <div className=' w-[50%] bg-gradient-to-b from-customGreen 
        to-teritory lg:flex flex-row items-center justify-center gap-2 hidden'>
            <img src={imageLogo} alt="logo" className="w-[110px] h-[110px]"/>  
            <div className=" font-bold text-5xl text-white gap-x-0">EYE REFER</div>     
             </div>
            <div className=' lg:w-[50%] sm:w-[100%] bg-white py-10 px-14 items-center justify-center overflow-auto'>
                <SingUp/>
            </div>
    </div>
  )
}

export default Form