
import bg from '../../Assets/Timzee_(password_buddha)__archive/Bg2.webp'
import './RomanHome.css'


export default function RomanHome() {


  return (
    <div className='RomanHome'>
         <div className=" con h-[450px] overflow-hidden flex items-center relative">
          <img src={bg} alt="" className=' w-full object-cover size-fit'/>
          <div className="data absolute left-13 flex justify-start flex-col gap-6 w-[54%]">
            <h1 className="text-white text-2xl font-semibold"> Roman or Numeral </h1>
            <p className='text-[17px] text-neutral-400 leading-9'> Limited Edition of 200 pieces world-wide. Watch Big Bang, 361.PE.2010.RW.1104 The stainless steel case and band are thick and prominent, creating a durable feel on the wrist. However, the dial is much more whimsical. </p>
            <p className='text-[17px] text-neutral-400 leading-9'> Accurate and Comfortable Imported Japanese quartz movement ensures precise time keeping. Its classic design of multi display watches and comfortable silicone material can provide to users excellent outdoor experiences. </p>
            <button className=' relative btn cursor-pointer w-[150px] bg-[#343435] duration-300 text-white  text-center py-3.5 text-lg'> SHOP NOW </button>
          </div>
         </div>
    </div>
  )
}
