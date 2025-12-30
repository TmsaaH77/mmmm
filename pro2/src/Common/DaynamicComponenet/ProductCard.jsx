
import './ProductCard.css'
import { BsShop } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import useProductCard from '../../Hooks/useProductCard';
import { memo } from 'react';

 function ProductCard({value}) {

   const { WishlistHandle , AddToCartHandle , GoToShop } = useProductCard()
   
  return (
    <div>
        <div className="card w-62.5 mx-auto  flex flex-col items-center justify-center gap-7 mt-8 ">
            <div className="img relative  size-full">
                <img src={value.image} alt="" className=' size-full' />

                
                   
                    <div className="icons flex flex-col  absolute top-4 right-4 ">
                       
                        <button onClick={()=>WishlistHandle(value)}
                        className='btn text-white text-xl w-8 relative flex items-center justify-center h-8   cursor-pointer'>
                        <FaRegHeart />
                        </button>
                    </div>
                    

                
            </div>
            <div className="data  flex flex-col items-center justify-center gap-5">
                <p className='text-2xl text-white cursor-pointer hover:text-(--main-color) duration-500'> {value.title} </p>
                <span className='text-2xl text-neutral-500 font-bold'> ${value.price} </span>
                <p className='text-xl text-neutral-500'> {value.description} </p>
            </div>
            <button onClick={ ()=>{ AddToCartHandle( value.id , value.title , value.price , value.image , value.stock ) } }
             className=' btn relative  cursor-pointer w-55.5 bg-[#343435] text-white  text-center py-3.5 text-lg'> ADD TO CART  </button>
        </div>
    </div>
  )
}

export default memo(ProductCard)
