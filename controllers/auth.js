import User from '../models/user'
<<<<<<< HEAD
import jwt from 'jsonwebtoken'
=======
>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81

export const signup = async (request,response)=>{
    const {email,name,password} = request.body
    try {
<<<<<<< HEAD
        const existUser = await User.findOne({email}).exec();
        if(existUser){
=======
        const exitsUser = await User.findOne({email}).exec()
        if(exitsUser){
>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81
            return response.status(400).json({
                message:"User da ton tai"
            })
        }
        const user = await User({email,name,password}).save()
        response.json({
            user:{
                _id:user._id,
                email:user.email,
<<<<<<< HEAD
                name: user.name
=======
                name:user.name
>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81
            }
        })
    } catch (error) {
        console.log(error);
    }
}
<<<<<<< HEAD

export const signin = async (request,response)=>{
    const {email,password} = request.body
    try {
        const user = await User.findOne({email}).exec()
        if(!user){
            return response.status(400).json({
                message:"User khong ton tai"
            })
        }
        if(!user.authenticate(password)){
            return response.status(400).json({
                message:"Password khong dung"
            })
        }

        const token = jwt.sign({_id:user._id},"123456",{expiresIn: 60*60})
        response.json({
            token,
            user:{
                _id:user._id,
                email:user.email,
                name:user.name
            }
        })
    } catch (error) {
        
    }
}
=======
export const signin = async (request,response)=>{
    const {email,password} = request.body
    const user = await User.findOne({email}).exec()
    if(!user){
        return response.status(400).json({
            message:"User khong ton tai"
        })
    }
    if(!user.authenticate(password)){
        return response.status(400).json({
            message:"Mat khau khong dung"
        })
    }
    response.json({
        user:{
            _id:user._id,
            email:user.email,
            name:user.name
        }
    })
}
>>>>>>> 5e7b631eb4717fdde840b80252962b595e9b4d81
