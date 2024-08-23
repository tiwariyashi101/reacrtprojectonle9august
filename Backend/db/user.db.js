import mongoose from "monngose "

async function dbConnect(){
  try{

  await mongoose.connect()
  console.log("DB connect")


  }catch(err){
    return err

  }
}
export default dbConnect
 






