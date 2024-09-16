import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmerui";
import Context from "./utility/useContextApi";
import { useDispatch } from "react-redux";
import { clearCart } from "./utility/CartSlice";
import ReviewComp from "./ReviewComp";

const Single = () => {
  let { id } = useParams();
  let obj = Context(id);
  const dispatch = useDispatch();
  
  // State to track which review is shown
  const [show, setShow] = useState(null);

  const clickHandle = () => {
    dispatch(clearCart());
  };

  if (obj == null) {
    return <Shimmer />;
  }

  let { title, description, images, reviews } = obj;

  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={images} alt="Product" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={clickHandle}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="reviewBox h-1/3 w-4/5 border-2 border-red-400 mt-9 flex flex-col items-center">
        {reviews.map((obj, idx) => (
          <ReviewComp key={idx} obj={obj} idx={idx} show={show} setShow={setShow} />
        ))}
      </div>
    </>
  );
};

export default Single;

