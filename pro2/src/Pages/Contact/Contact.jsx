import './Contact.css'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";



export default function Contact() {


  return (
    <div className='Contact bg-[#02020a] flex flex-col items-center justify-center px-20 py-20 gap-20'>

        <p className='   text-4xl font-black text-(--main-color) text-center '> CONTACT <span className='text-white'> US </span></p>

        <div className="grid grid-cols-3 gap-10 w-full px-14">
          <div className=" card flex flex-col items-center justify-center gap-7 border border-neutral-700 duration-300 hover:border-(--main-color) py-10   ">
            <div className=".icon flex items-center justify-center bg-[#030d1d] text-xl text-white w-14 h-14 cursor-pointer hover:bg-(--main-color) duration-300 ">
                   <FaPhoneAlt />
            </div>
            <p className=' text-3xl text-white  '> Phone </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> 0803 - 080 - 3081 </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> 0803 - 080 - 3082 </p>
          </div>
          <div className=" card flex flex-col items-center justify-center gap-7 border border-neutral-700 duration-300 hover:border-(--main-color) py-10   ">
            <div className=".icon flex items-center justify-center bg-[#030d1d] text-xl text-white w-14 h-14 cursor-pointer hover:bg-(--main-color) duration-300 ">
                   <MdOutlineEmail />
            </div>
            <p className=' text-3xl text-white  '> Email </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> mail@example.com </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> support@example.com </p>
          </div>
          <div className=" card flex flex-col items-center justify-center gap-7 border border-neutral-700 duration-300 hover:border-(--main-color) py-10   ">
            <div className=".icon flex items-center justify-center bg-[#030d1d] text-xl text-white w-14 h-14 cursor-pointer hover:bg-(--main-color) duration-300 ">
                   <FaLocationArrow />
            </div>
            <p className=' text-3xl text-white  '> Address </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> No: 58 A, East Madison Street, </p>
            <p className=' text-lg text-neutral-500 cursor-pointer hover:text-(--main-color) duration-300'> Baltimore, MD, USA 4508 </p>
          </div>
        </div>
    </div>
  )
}
