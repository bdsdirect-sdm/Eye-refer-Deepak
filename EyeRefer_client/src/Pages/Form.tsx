import SingUp from "./signup/SingUp"
import imageLogo from "../assets/logo.png"

const Form = () => {
  return (
    <div className=' h-screen flex flex-row'>
        <div className=' w-[50%] bg-gradient-to-b from-customGreen 
        to-teritory flex flex-row items-center justify-center gap-2'>
            <img src={imageLogo} alt="logo" className="w-[110px] h-[110px]"/>  
            <div className=" font-bold text-5xl text-white gap-x-0">EYE REFER</div>     
             </div>
        <div className=' w-[50%] bg-white p-10 flex flex-col items-center justify-center overflow-x-auto'>
            <SingUp/>
        </div>
    </div>
  )
}

export default Form