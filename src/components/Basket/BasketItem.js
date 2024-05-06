import React, { useState } from "react";
const BasketItem = ({ pr }) => {
  const [countItem, setCountItem] = useState(pr.elementQuantity);
  const handleDecrease = (count) => {
    let basketProducts = JSON.parse(localStorage.getItem("basket"));
    if (count < 1) {
      return;
    }
    let temp = parseInt(count) - 1;
    setCountItem(temp);
    let array2 = basketProducts.map((a) => {
      return { ...a };
    });

    array2.find((a) => a.elementId == pr.elementId).elementQuantity = temp;
    localStorage.setItem("basket", JSON.stringify(array2));
    window.location.reload();
  };
  const handleIncrease = (count) => {
    let basketProducts = JSON.parse(localStorage.getItem("basket"));
    let temp = parseInt(count) + 1;
    setCountItem(temp);
    let array2 = basketProducts.map((a) => {
      return { ...a };
    });
    array2.find((a) => a.elementId == pr.elementId).elementQuantity = temp;
    localStorage.setItem("basket", JSON.stringify(array2));
    window.location.reload();
  };

  const handleRemoveItem = (e) => {

    let basketProducts = JSON.parse(localStorage.getItem("basket"));
    basketProducts = basketProducts.filter(
      (p) => p.elementId !== parseInt(e.currentTarget.className)
    );
    localStorage.setItem("basket", JSON.stringify(basketProducts));
    
    window.location.reload();
     };
  return (
    <>
      <div className="basket-product">
        <div className="row">
          <div className="col-md-1">
            <div className="img-wrapper">
              <img className="img-fluid" src={pr.elementimageUrl}></img>
            </div>
          </div>
          <div className="col-md-11">
            <div className="basket-y-center">
              {" "}
              <div className="row w-100">
                {" "}
                <div className="col-md-4 text-center">
                  <p>{pr.elementName}</p>
                </div>
                <div className="col-md-2 p-0 text-center">
                  <p>{pr.elementDiscount}%</p>
                </div>
                <div className="col-md-2 pl-0 text-center">
                  <p>{pr.elementPrice} AZN</p>
                </div>
                <div className="col-md-1">
                  <div className="amount d-flex w-100">
                    <a onClick={() => handleDecrease(countItem)}>-</a>
                    <span>{countItem}</span>
                    <a onClick={() => handleIncrease(countItem)}>+</a>
                  </div>
                </div>
                <div className="col-md-1 text-center">
                  {(pr.elementPrice * countItem).toFixed(2)}
                </div>
                <div className="col-md-1 text-center">
                  <a onClick={handleRemoveItem} className={pr.elementId}>
                    <i className="fas fa-times"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketItem;
