

import { useWishlist } from '../../Zustand/WishlistSlice'
import './WishList.css'
import { useAuth } from '../../Zustand/AuthSlice'
import ProductCard from '../../Common/DaynamicComponenet/ProductCard'
import { Navigate } from 'react-router-dom'


export default function WishList() {

  const WislListData = useWishlist( s => s.WislListData )
  const CurrentUser = useAuth( s => s.CurrentUser )

  if( ! CurrentUser ){
    return <Navigate to={'/'} />
  }
  

  return (
    <div className='WishList flex flex-col items-center justify-center gap-10 bg-[#030d1d]'>
    <p className='   text-4xl font-black text-(--main-color) text-center py-10 '> WISH LIST <span className='text-white'> Page </span></p>
    <div className="products grid grid-cols-3 gap-20 pb-20">
                 {WislListData.map((item, index) => (
              
                <ProductCard value={item} key={index} />
                 ))}
             </div>
    </div>
  )
}
