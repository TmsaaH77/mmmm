import './Home.css'
import TopHome from '../../Components/TopHome/TopHome'
import CategarosHome from '../../Components/CategarosHome/CategarosHome'
import PopularHome from '../../Components/PopularHome/PopularHome'
import { useState } from 'react'
import MostWantedHome from '../../Components/MostWantedHome/MostWantedHome'
import img from '../../Assets/Timzee_(password_buddha)__archive/Bg1full.jpg'
import RomanHome from '../../Components/RomanHome/RomanHome'
import VirsetsHome from '../../Components/VirsetsHome/VirsetsHome'
import ContactHome from '../../Components/ContactHome/ContactHome'

export default function Home() {
   const [category, setCategory] = useState("men")
  return (
    <div className='Home'>
      <img src={img} alt="" className=' w-full fixed  left-0 -top-10 ' />
      <TopHome />
      <CategarosHome />
      <PopularHome category={category} setCategory={setCategory} />
      <MostWantedHome />
      <RomanHome />
      <VirsetsHome />
      <ContactHome/>
    </div>
  )
}
