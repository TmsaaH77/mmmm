import CategarosHome from "../Components/CategarosHome/CategarosHome";
import RomanHome from "../Components/RomanHome/RomanHome";

export default function Blogs() {
  return (
    <div className=" flex flex-col items-center justify-center gap-20 pt-20  bg-[#02020a] ">
          <p className='   text-4xl font-black text-(--main-color) text-center '> BLOGS <span className='text-white'> PAGE </span></p>
          <CategarosHome />
          <RomanHome />
    </div>
  )
}
