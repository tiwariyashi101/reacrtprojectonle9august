import express from "express"
import Router from './Router/userV1.js'
const app=express()

let PORT=process.env.PORT||8080;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user/v1',Router)


app.listen(PORT,()=>{
  console.log("server is listen in 8080 port ")
})





