

import useProductCard from '../../Hooks/useProductCard'
import { useAuth } from '../../Zustand/AuthSlice'
import { useCart } from '../../Zustand/CartSlice'

import './Cart.css'


export default function Cart() {

  const { DeleteFromCartHandle } = useProductCard()
  const CurrentUser = useAuth( s => s.CurrentUser )
  const CartData = useCart( s => s.CartData )
  const HandleQuantity = useCart( s => s.HandleQuantity )
  const total = useCart( s => s.total )
  const Clear = useCart( s => s.Clear )

  return (
    <div className="Cart">
    <p className='   text-4xl font-black text-(--main-color) text-center py-10 '> Shopping <span className='text-white'> Cart </span></p>

      <div className="cart-grid">

        {
          CartData.map( (el , index)=>(
            
            <div key={index} className="cart-item">
              <img src={el.image} alt="product" />

              <div className="cart-info">
                <h2> {el.title} </h2>
                <p className="price">$ {el.price * el.amount} </p>

                <div className="cart-actions">
                  <div className=" flex items-center gap-2.5">
                    <button disabled={ el.amount >= el.stock }
                     onClick={()=>HandleQuantity( el.id , 'inc' )}
                    className=' disabled:cursor-not-allowed disabled:opacity-50 w-10 h-10 bg-green-800 text-2xl text-white cursor-pointer rounded-3xl flex items-center justify-center'
                    > + </button>
                  <button> {el.amount} </button>
                  <button disabled={ el.amount <= 1 }
                   onClick={()=>HandleQuantity( el.id , 'dec' )}
                    className='disabled:cursor-not-allowed disabled:opacity-50 w-10 h-10 bg-red-800 text-2xl text-white cursor-pointer rounded-3xl flex items-center justify-center'
                  > - </button>
                  </div>
                  <button onClick={ ()=> DeleteFromCartHandle(el.id)}
                   className="remove-btn">Remove</button>
                </div>
              </div>
            </div>
          ) )
        }
        

        

      </div>

      <div className="cart-summary">
        <h2>Total: <span>${total()}</span></h2>
        {
          CurrentUser &&
          <button onClick={ ()=>Clear() }
           className="checkout-btn"> Cash Out </button>
           
        }
      </div>
    </div>
  )
}
