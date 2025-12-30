

import { create } from "zustand";
import { persist } from 'zustand/middleware'


export const useCart = create(
    persist(( set , get )=>({


    CartData : [],
    AddToCart : (id , title , price , image , stock )=>{
        const { CartData } = get()
        const product = { id , title , price , image , stock  }

        const isExested = CartData.find( el => el.id === id )
        if( ! isExested ){
            const ubdatedProduct = { ...product , amount : 1 }
            set( { CartData : [ ...CartData , ubdatedProduct ] } )
        return 'firstAdd'
        }

        if( isExested.amount < isExested.stock ){
            const updatedCartData = CartData.map( (el) => (
                el.id === id ? { ...el , amount : el.amount +1 } : el
            ) )
            set({ CartData : updatedCartData })
            return 'incr'
        }
        return 'max'

    },

    DeleteFromCart : ( id )=>{
         
        const { CartData } = get()
        const Filter = CartData.filter((el => el.id !== id))
        set({ CartData : Filter })
          
    },

    HandleQuantity : ( id , action )=>{
        const { CartData } = get()
      const Fined = CartData.find( el => el.id === id )
      if( action == 'inc' && Fined.amount < Fined.stock ) ++Fined.amount
      if( action == 'dec' ) --Fined.amount
      set({ CartData : [...CartData] })
      
    },

    total : ()=>{
        const { CartData } = get()
        return CartData.reduce( ( a , b ) => a+b.price*b.amount , 0 )
    },

    Clear : ()=>{
        const {CartData} = get()
        if( CartData.length > 0 ){

            set( {CartData : []} )
        }
    }


}),

       {
        name : 'Cart'
       }

)
)