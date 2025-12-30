import { create } from "zustand";
import { useAuth } from "./AuthSlice";
import axios from "axios";



const WishlistApi = 'http://localhost:3000/WishList'
export const useWishlist = create( ( set , get)=>({

     validateUser : ()=>{
      const user = useAuth.getState().CurrentUser 
      return user
     },
       WislListData : [],
    ToggleWishlistBtn : async(value)=>{
       const user = get().validateUser()
       const {WislListData} = get()
       if( ! user ){
        return ' No Auth '
       }

       const isExistesProductWithUser = await axios.get( ` ${ WishlistApi }?userId=${user.id}&productId=${value.id} ` )
       
       if( !isExistesProductWithUser.data.length ){
        
        await axios.post( WishlistApi , {
            userId : user.id,
            productId : value.id,
            payload : value
        } )
        set({WislListData : [ ...WislListData , value ] })
        return 'add'

       }else{

        const id = isExistesProductWithUser.data[0].id
        await axios.delete(`${WishlistApi}/${id}`)
        const filter = WislListData.filter( el => el.id !==value.id )
        set({ WislListData : filter })
        return 'remove'
       }
       
       
    },

    FetchWishListProducts : async()=>{
        const user = get().validateUser()
        const {data} = await axios.get(`${WishlistApi}?userId=${user?.id}`)
        
        const payload = data.map(  el => el.payload )
        set({WislListData : payload})
    },

    ClearWishList : ()=>{ set({ WislListData : [] }) }


}) )