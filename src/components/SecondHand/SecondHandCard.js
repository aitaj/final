import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SecondHandCard = ({ product }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSecondHandProducts());
    
  }, []);
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={product.imagePath} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.productDesc}</p>
          <p className="card-text">{product.userName}</p>
          <p className="card-text">{product.email}</p>
        </div>
      </div>
    </>
  );
};

export default SecondHandCard;
