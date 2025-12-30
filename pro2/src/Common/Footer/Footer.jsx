import './Footer.css'
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { SiPaypal } from "react-icons/si";
import { FaCcDinersClub } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import FooterHome from '../../Components/FooterHome/FooterHome'



export default function Footer() {


  return (
    <>
      <FooterHome/>
    <div className='Footer bg-[#0e1d55] flex items-center justify-between w-full px-20 py-8   '>
      <div className="l flex items-center justify-center">
        <p className=' text-lg text-neutral-400'> All Right Reserved © 2025, <span className=' text-xl cursor-pointer hover:text-amber-500 duration-300 font-bold'> MAHMOUD ABO TALEB </span> </p>
      </div>
      <div className="r flex items-center justify-center gap-5 text-2xl text-white">
       <FaCcVisa className=' cursor-pointer hover:text-(--main-color) duration-200' />
      <FaCcMastercard className=' cursor-pointer hover:text-(--main-color) duration-200'/>
      <SiAmericanexpress className=' cursor-pointer hover:text-(--main-color) duration-200'/>
      <SiPaypal className=' cursor-pointer hover:text-(--main-color) duration-200'/>
      <FaCcDinersClub className=' cursor-pointer hover:text-(--main-color) duration-200'/>
      <FaCcDiscover className=' cursor-pointer hover:text-(--main-color) duration-200'/>
      </div>
    </div>
    </>
  )
}
