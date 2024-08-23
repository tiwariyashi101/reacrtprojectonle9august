import { useEffect, useState } from "react";

const Context=(id)=>{
  let [obj,setObj]=useState(null)

  let getData=async()=>{
    let data=await fetch(`https://dummyjson.com/products/${id}`);
    let obj = await data.json();
    setObj(obj)
  
  }
  
  useEffect(()=>{
    getData();
  },[])

  return obj;
    
  

}
export default Context