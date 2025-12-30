import { create } from "zustand";
import { Auth, DB } from '../../Fire Base/FireBase'
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         onAuthStateChanged,
         signOut
 } from 'firebase/auth'
import { doc, setDoc , getDoc } from 'firebase/firestore'

export const useAuth = create(( set , get )=> ({
  
    CurrentUser : null ,
    isPendCurrent : true,

    RegisterHandle : async( data )=>{
      const { Email , Password , FirstName , LastName , PhoneNumber } =  data
      try {
        const userData = await createUserWithEmailAndPassword( Auth , Email , Password )
        const id = userData.user.uid
        await setDoc(doc( DB , 'Users' , id ),{
            id,
            FirstName,
            LastName,
            Email,
            Password,
            PhoneNumber,
            CreatedAt : new Date()
        })  
        console.log( 'success' );
        return { success : true }
        
      } catch (error) {
        return { success : false , message : error.message },
        console.log(error);
        
      }
    },

    LoginHandle : async( data )=>{
      const { Email , Password } = data
      try {
        await signInWithEmailAndPassword( Auth , Email , Password )
         return { success : true }
      } catch (error) {
         return { success : false , message : error.message }
      }
      
    },

    LogoutHandle : async()=>{
      try {
        await signOut(Auth)
      } catch (error) {
        
      }
    },

    FetchUserData : async( id )=>{
     const UserDataAuth = await getDoc(doc( DB , 'Users' , id ))
     if( UserDataAuth.exists() ){
      set({ CurrentUser : UserDataAuth.data() })
     }
    },
     
    initiateAuth : async()=>{
        const { FetchUserData } = get()

      onAuthStateChanged( Auth , async( user )=>{
        if(user){
            await FetchUserData( user.uid )
        }else{
        set({CurrentUser : null })
        }
        set( {isPendCurrent : false} )
        
      } )
    }
}))