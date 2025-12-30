import { useNavigate } from "react-router-dom"
import { useWishlist } from "../Zustand/WishlistSlice"
import Swal from 'sweetalert2'
import { useCart } from "../Zustand/CartSlice"




export default function useProductCard() {
  
    const navigate = useNavigate()
    const ToggleWishlistBtn = useWishlist( s => s.ToggleWishlistBtn )
    const AddToCart = useCart( s => s.AddToCart )
    const DeleteFromCart = useCart( s => s.DeleteFromCart )

    const WishlistHandle = async(value)=>{
        const res = await ToggleWishlistBtn(value)
         
        if(res === 'add'){
            Swal.fire({
                text: " success ADD ",
                icon: "success",
                button: "OK",
                draggable: true,
                timer : 2000,
                background : " #030d1d ",
                color : " #cca471 ",
                
                });
            }else if( res == 'remove' ){
            Swal.fire({
                text: " success REMOVE ",
                icon: "success",
                button: "OK",
                draggable: true,
                timer : 2000,
                background : " #030d1d ",
                color : " #cca471 ",
                });
                
            }else{

                Swal.fire({
                    title: " You Must Be Login First ",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Login",
                    denyButtonText: 'Register',
                    background : " #030d1d ",
                    color : " #cca471 ",
                    }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login')
                    } else if (result.isDenied) {
                       navigate('/rejester')
                    }
                    });

        }
    }

    const AddToCartHandle = ( id , title , price , image , stock )=>{

      const res = AddToCart( id , title , price , image , stock  )

      if(res === 'firstAdd'){
            Swal.fire({
                title: "Added",
                icon: "success",
                draggable: true,
                timer : 2000,
                background : " #030d1d ",
                color : " #cca471 ",
                });
            }else if( res == 'incr' ){
            Swal.fire({
                background : " #030d1d ",
                color : " #cca471 ",
                title: "Another Add",
                icon: "success",
                draggable: true,
                timer : 2000,
                });
                
            }else{

                Swal.fire({
                    title: " You Had Reach Max ",
                    background : " #030d1d ",
                    color : " #cca471 ",
                    showConfirmButton: true,
                    confirmButtonText: "Ok",
                    
                    })

        }
    }

    const DeleteFromCartHandle = ( id )=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
                DeleteFromCart(id)
                Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success"
                });
            }
            });
    }

    const GoToShop = ()=>{
        navigate('/shop')
    }

    

  return { WishlistHandle , AddToCartHandle , DeleteFromCartHandle , GoToShop }
}
