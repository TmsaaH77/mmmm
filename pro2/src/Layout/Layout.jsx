import React from 'react'
import Navbar from '../Common/Navbar/Navbar'
import Footer from '../Common/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
       <Navbar/>
             <Outlet/>
       <Footer/>
    </>
  )
}
