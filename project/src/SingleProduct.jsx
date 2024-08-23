// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmerui"
import Context from "./utility/useContextApi"

const Single=()=>{
// const [obj,setObj]=useState(null)
  let {id}=useParams()

let obj=Context(id)

// let getData=async()=>{
//   let data=await fetch(`https://dummyjson.com/products/${id}`);
//   let obj = await data.json();
//   setObj(obj)

// }

// useEffect(()=>{
//   getData();
// },[id])



if(obj==null){
  return <Shimmer></Shimmer>
}

let {title,description,images}=obj
  return (
    <>
  <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={images}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>I{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


    </>
  )
}
export default Single