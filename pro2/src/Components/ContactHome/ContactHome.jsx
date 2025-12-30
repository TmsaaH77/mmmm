import './ContactHome.css'
import bg from '../../assets/Timzee_(password_buddha)__archive/Bg3.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";


export default function ContactHome() {


  return (
    <div className='ContactHome'>
      <div className="cont relative">
      <img src={bg} alt="" />
      <div className=" absolute left-[50%] top-[50%]   translate-[-50%]  text-amber-50 flex flex-col items-center justify-center gap-10">
        <h1 className=' text-5xl text-white new relative '> Newsletter </h1>
        <div className="inp flex items-center justify-around">
          <input type="text" placeholder='      Email Address' className=' w-[450px] h-14 border border-neutral-600'/>
          <button className=' relative in-b cursor-pointer bg-[#343435] text-white  text-center py-3.5 text-lg w-[150px]' > SUBSCRIBE </button>
        </div>
        <p className=' text-neutral-400 font-light text-lg'> Will be used in accordance with our Privacy policy </p>
        <div className="ico flex items-center justify-center gap-2.5 ">
        <div  className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <FaXTwitter/> </div>
        <div className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <FaFacebookSquare /> </div>
        <div className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <RiPinterestLine /> </div>
        <div className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <IoLogoInstagram /> </div>
        <div className='icon-b relative cursor-pointer w-[35px] h-[35px] bg-[#343435] text-neutral-400 hover:text-white duration-500 flex items-center justify-center text-center py-3.5 text-md '> <FaYoutube /> </div>
        </div>
      </div>
      </div>

    </div>
  )
}
