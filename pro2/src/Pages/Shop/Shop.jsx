import { useEffect } from 'react';
import ProductCard from '../../Common/DaynamicComponenet/ProductCard'
import { useDisplay } from '../../Zustand/displaySlice';
import './Shop.css'
export default function Shop() {

  const getProducts = useDisplay((s) => s.getProducts);
    const products = useDisplay((s) => s.products);

    useEffect(() => {
        getProducts();
    }, []);
    
    
    
  return (
    <div className='Shop flex flex-col items-center justify-center gap-10 bg-[#030d1d] '>
         <h1 className=' text-5xl font-bold text-(--main-color) pt-20'> PRODUCTS </h1>
         <div className="products grid grid-cols-3 gap-20 pb-20">
             {products.map((item, index) => (
          
            <ProductCard value={item} key={index} />
             ))}
         </div>
    </div>
  )
}
