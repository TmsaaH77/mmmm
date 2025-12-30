
import * as z from 'zod'

const RegisterSchema = z.object({
    FirstName : z.string().min(1 , { message : 'First Name is Requierd' }),
    LastName : z.string().min(1 , { message : 'Last Name is Requierd' }),
    PhoneNumber : z.string().min(1 , { message : 'Phone Number is Requierd' })
                   .regex(/^01[0125][0-9]{8}$/ , {message : 'Number must be like this : 01234567891'}),
    Email : z.string().min(1 , { message : 'Email is Requierd' })
             .email({ message : 'Email is Not Valid'}),
    Password : z.string().min(1 , { message : 'Password is Requierd' })
                .regex(/[A-Z]{2}/ , {message : 'Password Is Valid'})
                .regex(/[0-9]{2}/ , {message : 'Password Is Valid'})
                .regex(/.*[!@#$%^&*()_+/*><?\|/]*./ , {message : 'Password Is Valid'})
                .min(8 , { message : 'Password is Requierd' }),
    ConfirmPassword : z.string().min(1 , { message : 'Confirm Password is Requierd' }),

}).refine( same => same.Password === same.ConfirmPassword , {message : 'Password Not Confirmed' , path : ['ConfirmPassword'] }  )



export default RegisterSchema 
