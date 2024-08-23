import express from "express"

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user/v1',userRouterV1)


app.listen(8080,()=>{
  console.log("server is listen in 8080 port ")
})





