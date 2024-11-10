import SingUp from "./SingUp"
import imageLogo from "../assets/logo.png"

const Form = () => {
  return (
    <div className=' h-screen flex flex-row'>
        <div className=' w-[50%] bg-gradient-to-b from-customBlue to-customGreen flex flex-row items-center justify-center gap-2'>
            <img src={imageLogo} alt="logo" className="w-[80px] h-[80px]"/>  
            <div className=" font-bold text-3xl text-white">EYE REFER</div>     
             </div>
        <div className=' w-[50%] bg-backGround p-10 flex flex-col items-center justify-center'>
            <SingUp/>
        </div>
    </div>
  )
}

export default Form