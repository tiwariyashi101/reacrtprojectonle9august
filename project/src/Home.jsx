import Card from "./Card";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmerui";
import productArray from "./Data";
import AddedProduct from "./utility/AddedCart";
import { useSelector } from "react-redux";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch data from the API
  let getData = async () => {
    let data = await fetch('https://dummyjson.com/products');
    let obj = await data.json();
    console.log(obj)
    setProduct(obj?.products);
    
  };

  useEffect(() => {
    getData();
  },[]);

  const filterProduct = () => {
    const data = product.filter((obj) => obj.rating > 4.5);
    setProduct(data);
  };

  const filterCategory = (category) => {
    const data = product.filter((obj) => obj.category === category);
    setProduct(data);
  };

  const searchProduct = () => {
    const data = product.filter((obj) =>
      obj.title.toLowerCase().includes(search.toLowerCase())
    );
    setProduct(data);
  };

  // Display shimmer effect if no products
  if (product.length===0) {
    return <Shimmer />;
  }

let idsArray=useSelector((state)=>state)
console.log(idsArray)

  let Added=AddedProduct(Card)

  return (
    <>
      <button className="btn btn-active" onClick={() => filterCategory("fragrances")}>Fragrances</button>
      <button className="btn btn-active" onClick={() => filterCategory("beauty")}>Beauty</button>
      <button className="btn btn-active" onClick={filterProduct}>Top Rated Product</button>
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-active" onClick={searchProduct}>Search</button>
       <div className="flex flex-wrap gap-5">
        {
          product.map((obj)=>
            <Card obj={obj} key={obj.id}></Card>
         
          )
        }
       </div> 
    </>
  );
};

export default Home;
