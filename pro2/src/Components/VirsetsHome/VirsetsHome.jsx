
import one from '../../Assets/Timzee_(password_buddha)__archive/one.webp'
import tow from '../../Assets/Timzee_(password_buddha)__archive/tow.webp'
import three from '../../Assets/Timzee_(password_buddha)__archive/three.webp'
import four from '../../Assets/Timzee_(password_buddha)__archive/four.webp'
import five from '../../Assets/Timzee_(password_buddha)__archive/five.webp'
import six from '../../Assets/Timzee_(password_buddha)__archive/six.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from 'swiper/modules';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './VirsetsHome.css'


export default function VirsetsHome() {


  return (
    <div className='VirsetsHome'>
         <div className="grid grid-cols-3  ">
                <div className="card flex items-center justify-center overflow-hidden   ">
                  <img src={one} alt="" className='relative' />
                  <div className="dat absolute flex flex-col  items-center justify-center w-md h-[448px] gap-5 bg-[#0000008e] px-10 ">
                    <h1 className=' text-3xl text-white'> Versits </h1>
                    <p className=' text-[17px] text-neutral-400 text-center leading-8'> Rhuyese ser sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[222px] bg-[#343435] duration-300 text-white  text-center py-3.5 text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card flex items-center justify-center overflow-hidden   ">
                  <img src={tow} alt="" className='relative' />
                  <div className="dat absolute flex flex-col  items-center justify-center w-md h-[448px] gap-5 bg-[#0000008e] px-10 ">
                    <h1 className=' text-3xl text-white'> 2019 Novalties </h1>
                    <p className=' text-[17px] text-neutral-400 text-center leading-8'> Hiue wghres rhuyres magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh </p>
                    <button className=' relative btn cursor-pointer w-[222px] bg-[#343435] duration-300 text-white  text-center py-3.5 text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card flex items-center justify-center overflow-hidden   ">
                  <img src={three} alt="" className='relative' />
                  <div className="dat absolute flex flex-col  items-center justify-center w-md h-[448px] gap-5 bg-[#0000008e] px-10 ">
                    <h1 className=' text-3xl text-white'> Javelin </h1>
                    <p className=' text-[17px] text-neutral-400 text-center leading-8'> Kiures guyrese ngittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[222px] bg-[#343435] duration-300 text-white  text-center py-3.5 text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card flex items-center justify-center overflow-hidden   ">
                  <img src={four} alt="" className='relative' />
                  <div className="dat absolute flex flex-col  items-center justify-center w-md h-[448px] gap-5 bg-[#0000008e] px-10 ">
                    <h1 className=' text-3xl text-white'> Voltamic </h1>
                    <p className=' text-[17px] text-neutral-400 text-center leading-8'> Biurese guyrese orese jittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[222px] bg-[#343435] duration-300 text-white  text-center py-3.5 text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card flex items-center justify-center overflow-hidden   ">
                  <img src={five} alt="" className='relative' />
                  <div className="dat absolute flex flex-col  items-center justify-center w-md h-[448px] gap-5 bg-[#0000008e] px-10 ">
                    <h1 className=' text-3xl text-white'> Cerutaio </h1>
                    <p className=' text-[17px] text-neutral-400 text-center leading-8'> Ulreser tellus marquestis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[222px] bg-[#343435] duration-300 text-white  text-center py-3.5 text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
                <div className="card flex items-center justify-center overflow-hidden   ">
                  <img src={six} alt="" className='relative' />
                  <div className="dat absolute flex flex-col  items-center justify-center w-md h-[448px] gap-5 bg-[#0000008e] px-10 ">
                    <h1 className=' text-3xl text-white'> Zerairo </h1>
                    <p className=' text-[17px] text-neutral-400 text-center leading-8'> Biurese hierese ciseittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.uis leo. Sed fringilla mauris sit amet nibh. </p>
                    <button className=' relative btn cursor-pointer w-[222px] bg-[#343435] duration-300 text-white  text-center py-3.5 text-md'> VIEW ALL COLLECTION </button>
                  </div>
                </div>
         </div>
         <div className="swip relative">
          <Swiper
        modules={[ Navigation]}
        
        loop={true}
        navigation={{
          nextEl: '.for',
          prevEl: '.back',
        } }>
        <SwiperSlide>
          <div className="sone flex flex-col items-center justify-center text-center gap-8 bg-[#030d1d] text-neutral-400 py-25">
             <p className=' text-[42px] w-[57%]'> "Leo eget bibendum sodales, uis leo. Sed fringilla mauris sit amet nibh" </p>
             <span className=' text-lg text-white'> Andrew Mark </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="stow flex flex-col items-center justify-center text-center gap-8 bg-[#030d1d] text-neutral-400 py-25">
             <p className=' text-[42px] w-[63%]'> ‘‘The entire pursuit of a watchmaker should be the perfection of each and every watch.” </p>
             <span className=' text-lg text-white'> - John Doe </span>
          </div>
        </SwiperSlide>
          </Swiper>
          <button className='back btn text-white text-3xl w-10 absolute flex items-center justify-center h-10 mx-2.5 top-[45%] left-[10%] cursor-pointer '> <IoIosArrowBack  /> </button>
                 <button className='for btn text-white text-3xl w-10 absolute flex items-center justify-center h-10 mx-2.5 top-[45%] right-[10%] cursor-pointer '>
                  <IoIosArrowForward />
                 </button>
         </div>
    </div>
  )
}
