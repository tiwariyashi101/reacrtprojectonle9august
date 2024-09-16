

const ReviewComp = ({ obj, show, setShow, idx }) => {
  const { reviewerName, comment, rating } = obj;

 
  return (
    <>
      <div className="flex justify-between px-5 w-4/5 rounded-2xl text-black bg-blue-600 text-lg">
        <p>{reviewerName}</p>
        <p onClick={()=>setShow(show==idx?null:idx)} className="cursor-pointer">Toggle</p>
      </div>
      {show === idx && (
        <div className="flex justify-between px-5 w-4/5 rounded-2xl text-black bg-blue-300 text-lg ">
          <p>{comment}</p>
          <p>{rating}</p>
        </div>
      )}
    </>
  );
};

export default ReviewComp;
