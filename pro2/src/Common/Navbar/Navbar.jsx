import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/Timzee_(password_buddha)__archive/logo_1.png'
import { IoMdHeart } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useAuth } from '../../Zustand/AuthSlice';
import {Button , Menu , MenuItem } from '@mui/material';
import { useEffect, useState } from 'react';
import { useWishlist } from '../../Zustand/WishlistSlice';
import { useCart } from '../../Zustand/CartSlice';


export default function Navbar() {


  const FetchWishListProducts = useWishlist( s => s.FetchWishListProducts )
    const WislListData = useWishlist( s => s.WislListData )
    const ClearWishList = useWishlist( s => s.ClearWishList )
    const CurrentUser = useAuth( s => s.CurrentUser )
    const CartData = useCart( s => s.CartData )
    const CartDataAmount = CartData.reduce( ( a , b )=> a +b.amount , 0 )

   
    const LogoutHandle = useAuth( s => s.LogoutHandle )

    const SignOut = async()=>{
      handleClose()
      ClearWishList()
      await LogoutHandle()
    }

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(()=>{
    if( !CurrentUser ){
      return
    }
    FetchWishListProducts()
  },[CurrentUser])


  return (
    <nav className='Navbar  w-full bg-[#0e1d55] flex items-center justify-between px-7 py-3  '>
      <Link> <img src={logo} alt="" /> </Link>
      <div className="cen flex items-center justify-between gap-8  text-lg text-neutral-400 font-semibold ">
        <NavLink to={'/'} className='px-3 duration-300 hover:text-[#cca471] '> HOME </NavLink>
        <NavLink to={'/shop'} className='px-3 duration-300 hover:text-[#cca471]'> SHOP </NavLink>
        <NavLink to={'/blog'} className=' px-3 duration-300 hover:text-[#cca471 '> BLOGS </NavLink>
        <NavLink to={'/contact'} className='px-3 duration-300 hover:text-[#cca471]'> CONTACT US </NavLink>
      </div>
      <div className="lef flex items-center justify-center gap-8 text-neutral-400 pr-5 cursor-pointer ">

        
      {
        !CurrentUser ? 
        <div className=" flex items-center justify-center gap-5">
          <NavLink to={'/rejester'} className=' text-xl text-white hover:text-(--main-color) duration-300 '
          > RIGESTER  
          </NavLink>
          <div className=" h-5 w-1 bg-(--main-color) "></div>
          <NavLink to={'/login'} className=' text-xl text-white hover:text-(--main-color) duration-300 '
          > LOGIN 
          </NavLink>
        </div>
        :
        <>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div className="  text-white"> WELCOME <span className=' text-lg text-(--main-color) font-bold'> { (CurrentUser.FirstName).toUpperCase()  } </span> </div>
      </Button>
        <Menu  className='  text-(--sec-color) '
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }} >
        <MenuItem sx={{ width : '100px'  }} onClick={handleClose}>Profile</MenuItem>
        <MenuItem sx={{ width : '100px'  }} onClick={SignOut}>Logout</MenuItem>
      </Menu>
        </> 
      }

        <div className=" flex items-center gap-1">
          <Link to={'/wishlist'}>
        <IoMdHeart  className=' text-2xl duration-300 hover:text-[#cca471] font-black '/>
          </Link>
        <sub> {WislListData.length} </sub>
        </div>
        <div className=" flex items-center gap-1">
          <Link to={'/cart'}>
           <HiOutlineShoppingCart className=' text-xl duration-300 hover:text-[#cca471] cursor-pointer '/>
          </Link>
        <sub> {CartDataAmount} </sub>
        </div>
        
      </div>
    </nav>
  )
}
