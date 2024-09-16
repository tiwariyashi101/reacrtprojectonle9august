import mongoose from "mongoose"

const {Schema,model}=mongoose;


const userSchema=new Schema(
  {
    name:{
      type:String,
      required:true
    },Password:{
      type:String,
      required:true
    },email:{
      type:String,
      required:true,
      trim:true
    }
  }
)

const User=new model('User',userSchema)
export default User;








