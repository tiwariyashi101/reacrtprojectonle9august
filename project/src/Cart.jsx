import { useSelector } from "react-redux";
const Cart = () => {
  let cartData = useSelector((state) => state.cart.items);
  console.log("Cart data from Redux:", cartData);

  return (
    <>
    <div>
      {cartData.map((item, index) => (
        <div key={index} className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={item.image} alt={item.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Go to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Cart;

