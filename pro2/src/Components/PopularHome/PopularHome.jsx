import { useEffect } from "react";
import ProductCard from "../../Common/DaynamicComponenet/ProductCard";
import { useDisplay } from "../../Zustand/displaySlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function PopularHome({ category, setCategory }) {
  const getProducts = useDisplay((s) => s.getProducts);
  const products = useDisplay((s) => s.products);

  

  // Load products on category change
  useEffect(() => {
    const categoryMap = {
      men: "men watches",
      women: "women watches",
      couples: "couble watches",
    };
    getProducts(categoryMap[category] || "men watches");

    // Reset swiper position
    
  }, [category]);

  // Fix Swiper navigation after render
  
  return (
    <div className="PopularHome pt-20 relative pb-20 bg-black">
      <h1 className="alen h2 text-white text-4xl relative text-center">
        Popular In Store
      </h1>

      {/* Tabs */}
      <nav className="flex items-center justify-center gap-10 mt-10 text-xl">
        {["men", "women", "couples"].map((tab) => (
          <button
            key={tab}
            onClick={() => setCategory(tab)}
            className={` btn2 transition duration-300 ${
              category === tab
                ? " text-(--main-color) cursor-pointer  " 
                : "text-neutral-500 hover:text-(--main-color) cursor-pointer"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.back',
          nextEl: '.for',
        }}
       
        spaceBetween={0}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="w-[90%] m-12 "
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard value={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows */}
      <button
        
        className="back btn absolute left-5 cursor-pointer top-2/3 -translate-y-1/2 text-white text-3xl w-12 h-12 flex items-center justify-center z-10"
      >
        <IoIosArrowBack />
      </button>
      <button
        
        className="for btn absolute right-5 cursor-pointer top-2/3 -translate-y-1/2 text-white text-3xl w-12 h-12 flex items-center justify-center z-10"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
