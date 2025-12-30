
import * as z from 'zod'

const LoginSchema = z.object({

    Email : z.string().min(1 , { message : 'Email is Requierd' })
             .email({ message : 'Email is Not Valid'}),
    Password : z.string().min(1 , { message : 'Password is Requierd' })

})



export default LoginSchema 
