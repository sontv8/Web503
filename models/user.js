import mongoose from "mongoose";
<<<<<<< HEAD
import {createHmac} from 'crypto'
=======
import {createHmac} from "crypto"
>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
<<<<<<< HEAD
=======

>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81
userSchema.methods = {
    authenticate(password){
        try {
            return this.password == this.encrytPassword(password)
        } catch (error) {
<<<<<<< HEAD
            
=======
            console.log(error);
>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81
        }
    },
    encrytPassword(password){
        if(!password) return
        try {
<<<<<<< HEAD
            return createHmac("sha256","123456").update(password).digest('hex')
            // dga45453f00fh
=======
            return createHmac('sha256','123456').update(password).digest('hex')
>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81
        } catch (error) {
            console.log(error);
        }
    }
}
userSchema.pre("save",function(next){
    try {
        this.password = this.encrytPassword(this.password)
        next()
    } catch (error) {
<<<<<<< HEAD
        
=======
        console.log(error);
>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81
    }
})

export default mongoose.model('User',userSchema)