import './CategarosHome.css'
import men from '../../assets/Timzee_(password_buddha)__archive/men.jpg'
import women from '../../assets/Timzee_(password_buddha)__archive/women.png'
import couple from '../../assets/Timzee_(password_buddha)__archive/couple.png'

export default function CategarosHome() {
  return (
    <div className='CategarosHome bg-black'>
          <div className="  flex gap-4  px-5 items-center">
            <div className="one  border-6 border-[#444444] h-[280px] overflow-hidden relative w-[400px] ">
              <img src={men} alt="" className='w-full h-[270px] object-cover ' />
              <div className="data absolute right-7 top-[30%] z-10 flex flex-col items-end gap-5 ">
              <p className='text-xl font-bold text-(--main-color)'>Flash Sale</p>
              <b className='text-3xl text-white cursor-pointer hover:text-(--main-color) duration-500'> Men's Watch </b>
              <p className='text-lg font-extralight text-neutral-500'> 25% Discount </p>
              </div>
            </div>
            <div className="zz w-8 bg-[#030d1d] h-[300px]"></div>
            <div className="tow border-6 border-[#444444] h-[270px] overflow-hidden relative w-[400px]">
              <img src={women} alt="" className='w-full h-[270px] object-cover ' />
              <div className="data absolute right-[20%] top-[30%] z-10 flex flex-col items-center gap-5">
              <p  className='text-xl font-bold text-(--main-color)'>Flash Sale</p>
              <b className='text-3xl text-white cursor-pointer hover:text-(--main-color) duration-500'> Women's Watch </b>
              <p className='text-lg font-extralight text-neutral-500'> 40% Discount </p>
              </div>
            </div>
            <div className="zz w-8 bg-[#030d1d] h-[300px]"></div>
            <div className="three border-6 border-[#444444] h-[270px] overflow-hidden relative w-[400px]">
              <img src={couple} alt="" className='w-full h-[270px] object-cover ' />
              <div className="data absolute right-7 top-[30%] z-10 flex flex-col items-end gap-5 ">
              <p className='text-xl font-bold text-(--main-color)'>Flash Sale</p>
              <b className='text-3xl text-white cursor-pointer hover:text-(--main-color) duration-500'> Couple's Watch </b>
              <p className='text-lg font-extralight text-neutral-500'> 30% Discount </p>
              </div>
            </div>
          </div>
    </div>
  )
}
