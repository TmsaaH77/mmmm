import './FooterHome.css'
import footer from '../../assets/Timzee_(password_buddha)__archive/footer.jpg'
import { ImHome3 } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { RiPinterestLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";


export default function FooterHome() {


  return (
    <div className='FooterHome flex flex-col '>
     <div className="top relative">
      <div className="bg ">
        <img src={footer} alt="" />
      </div>
      <div className=" absolute size-full flex items-start justify-center top-0 left-0 bg-[#0000009d] pt-[75px] ">
        <div className="d-one flex flex-col items-start  gap-2.5  w-[285px]">
          <p className=' text-2xl text-white '> Help </p>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Search </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Help </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Information </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Privacy Policy </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Shipping Details </span>
        </div>
        <div className="d-tow flex flex-col items-start justify-center gap-2.5 w-[260px]">
          <p className=' text-2xl text-white '> Support </p>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Contact us </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> About us </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Careers </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Refunds & Returns </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Deliveries </span>
        </div>
        <div className="d-three flex flex-col items-start justify-center gap-2.5 w-[260px]">
          <p className=' text-2xl text-white '> Information </p>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Search Terms </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Advanced Search </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Help & Faq's </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Store Location </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer'> Orders & Returns </span>
        </div>
        <div className="d-four flex flex-col items-start justify-center gap-2.5 w-[260px]">
          <p className=' text-2xl text-white '> Address </p>
          <span className=' text-neutral-400  flex items-center gap-2.5 '><ImHome3 className=' text-4xl' /> No: 58 A, East Madison Street, Baltimore, MD, USA 4508 </span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer flex items-center gap-2.5'><FaPhone /> 0000 - 123 - 456789</span>
          <span className=' text-neutral-400  hover:text-(--main-color) duration-500 cursor-pointer flex items-center gap-2.5'><MdEmail className=' text-xl' /> info@example.com </span>
          
        </div>
      </div>

     </div>
     <div className="bottom flex items-center justify-senter bg-[#010409] ">
      <div className="ll flex flex-col items-center justify-center gap-7 py-20 w-full ">
            <p className=' text-3xl text-white'> Connect with us </p>
            <div className="flex items-center gap-7 text-neutral-400 ">
                  <FaXTwitter className=' hover:text-(--main-color) duration-300 cursor-pointer' />
                  <FaFacebookSquare className=' hover:text-(--main-color) duration-300 cursor-pointer' />
                  <RiPinterestLine className=' hover:text-(--main-color) duration-300 cursor-pointer' />
                  <IoLogoInstagram className=' hover:text-(--main-color) duration-300 cursor-pointer' />
                  <FaYoutube className=' hover:text-(--main-color) duration-300 cursor-pointer' />
            </div>
      </div>
      
     </div>
    </div>
  )
}
