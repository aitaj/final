import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
const ProductCard = ({ product }) => {
  function beforeDiscount(currentPrice, discount) {
    return (currentPrice * 100) / (100 - discount);
  }

  const userInfo = localStorage.getItem("userInfo");

  const history = useHistory();
  const handleClickDetails = (id) => {
    // if (userInfo == null) {
    //   history.push("/login");
    //   console.log("g")
    // }
    // else{
    history.push(`/products/${id}`);
    // }
  };
  // console.log(product)
  const formatDate = (date) => {
    const datetime = new Date(date);
    let dateDay = datetime.getDate();
    let month = datetime.getMonth();
    switch (month) {
      case 0:
        return `${dateDay} yanvar`;
      case 1:
        return `${dateDay} fevral`;
      case 2:
        return `${dateDay} mart`;
      case 3:
        return `${dateDay} aprel`;
      case 4:
        return `${dateDay} may`;
      case 5:
        return `${dateDay} iyun`;
      case 6:
        return `${dateDay} iyul`;
      case 7:
        return `${dateDay} avqust`;
      case 8:
        return `${dateDay} senyabr`;
      case 9:
        return `${dateDay} oktyabr`;
      case 10:
        return `${dateDay} noyabr`;
      case 11:
        return `${dateDay} dekabr`;
      default:
        break;
    }
  };
  return (
    <div className="col-md-4 col-6">
      <div className="product-card mt-2">
        <div className="custom-card-header">
          <img
            className="img-fluid"
            src={
              product.productImages[0] != null
                ? product.productImages[0].imagePath
                : ""
            }
          />
        </div>
        <div className="custom-card-body text-center">
          <a>
            <h5>{product.name}</h5>
            <p>
              {product.brend.name}/{product.subCategory.name}
            </p>
            <div className="price d-flex justify-content-around">
              <p className="price-ex">
                {beforeDiscount(
                  parseFloat(product.price),
                  parseFloat(product.discount)
                ).toFixed(2)}
                AZN
              </p>
              <p className="current-price"> {product.price.toFixed(2)}AZN</p>
            </div>
            <div className="discount-date">
              <span>Son gün- </span>
              <span>{formatDate(product.endDiscount)}</span>
            </div>
            <Link onClick={() => handleClickDetails(product.id)}>Ətraflı</Link>
          </a>
        </div>
        <div className="discount text-center">
          <p>{product.discount}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
