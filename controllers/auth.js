import User from '../models/user'
import jwt from 'jsonwebtoken'

export const signup = async (request,response)=>{
    const {email,name,password} = request.body
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            return response.status(400).json({
                message:"User da ton tai"
            })
        }
        const user = await User({email,name,password}).save()
        response.json({
            user:{
                _id:user._id,
                email:user.email,
                name: user.name
            }
        })
    } catch (error) {
        console.log(error);
    }
}

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