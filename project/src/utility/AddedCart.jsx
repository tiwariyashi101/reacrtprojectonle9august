const AddedProduct = (Component) => {
  return (props) => {
    return (
      <div className="relative">
        <p className="bg-black text-orange-500 absolute rounded-3xl z-20 mt-5 px-3 py-1">
          Add to Cart
        </p>
        <Component {...props} />
      </div>
    );
  };
};

export default AddedProduct;
