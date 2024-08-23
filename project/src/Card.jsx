import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from './utility/CartSlice';

const Card = ({ obj }) => {
  console.log(obj)
  let dispatch = useDispatch();
  let navigate = useNavigate();

  // Return null if obj is not provided
  if (!obj) {
    return null;
  }

  const { id, images, title, description } = obj;

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(addCart(obj));
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl" onClick={handleClick}>
      <figure>
        <img src={images} alt={title} /> {/* Ensure images URL is valid */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2> {/* Render title */}
        <p>{description}</p> {/* Render description */}
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleAddCart}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
