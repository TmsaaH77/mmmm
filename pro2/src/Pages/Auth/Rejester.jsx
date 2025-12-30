import '../Auth/Auth.css' 
import bg from '../../assets/Timzee_(password_buddha)__archive/Bg1full.jpg'
import { TextField } from '@mui/material'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import RegisterSchema from '../../Validation/regesterSchema'
import { useAuth } from '../../Zustand/AuthSlice'
import { useNavigate } from 'react-router-dom'



export default function Rejester() {
    const RegisterHandle = useAuth( s => s.RegisterHandle )

    const { register , handleSubmit , formState : {errors , isDirty , isValid} } = useForm({
        resolver : zodResolver(RegisterSchema),
        mode : 'all'
    })
    const navigate = useNavigate()
    const FormSubmet = async(data)=>{
    const res = await RegisterHandle(data);
        if( res.success ){
             navigate('/')
        }else{
            
        }
        
    }


  return (
    <div className=' Auth   bg-[#030d1d]  '>
         <div className="bg w-full relative py-[150px] ">
            <img src={bg} alt="" className='' />
         <p className=' absolute   right-[5%] top-[45%]  text-4xl font-black text-(--main-color) text-center flex flex-col items-end'> REGESTER <span className='text-white'> NOW ... </span></p>
         <div className=" reg  absolute left-[50%] top-[50%] -translate-[50%]  flex flex-col items-center justify-center gap-7 shadow-md shadow-black rounded-xl w-[40%]">
                <p className=' text-xl text-white text-center font-bold px-10'> ENTER YOUR DATA </p>
            <form onSubmit={handleSubmit(FormSubmet)}
             className='py-5 flex flex-col items-center justify-center gap-2.5 '>
                <TextField id="filled-basic" label="First Name" variant="filled"
                type='text' error= {errors.FirstName} { ...register('FirstName') } helperText = {errors.FirstName?.message}
                   sx={{
    width: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
     
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Last Name" variant="filled"
                type='text' error= {errors.LastName} { ...register('LastName') } helperText = {errors.LastName?.message}
                   sx={{
    width: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
     
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Phone Number" variant="filled"
                type='number' error= {errors.PhoneNumber} { ...register('PhoneNumber') } helperText = {errors.PhoneNumber?.message}
                   sx={{
    width: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
     
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Email" variant="filled"
                type='email' error= {errors.Email} { ...register('Email') } helperText = {errors.Email?.message}
                   sx={{
    width: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
     
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Password" variant="filled"
                type='password' error= {errors.Password} { ...register('Password') } helperText = {errors.Password?.message}
                
                   sx={{
    width: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
     
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                <TextField id="filled-basic" label="Confirm Password" variant="filled"
                type='password' error= {errors.ConfirmPassword} { ...register('ConfirmPassword') }
                helperText = {errors.ConfirmPassword?.message}
                   sx={{
    width: "300px",
    "& .MuiFilledInput-input": {
      color: "#fff",
    },
    "& .MuiFilledInput-root": {
     
      color: "#fff",
    },
    "& .MuiInputLabel-root": {
      color: "#fff",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#fff",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:hover:before": {
      borderBottomColor: "#fff",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#fff",
    },
                  }}/>
                  <button disabled = {!isDirty || !isValid}
                   className=' py-2 w-[120px] text-xl mt-5 text-white border-2 border-white rounded-xl cursor-pointer  '> Confirm </button>
            </form>
         </div>
         </div>
    </div>
  )
}
