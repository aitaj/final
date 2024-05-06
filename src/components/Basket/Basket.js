import React, { useState, useEffect } from "react";
import BasketItem from "./BasketItem";
const Basket = () => {
  const products = JSON.parse(localStorage.getItem("basket"));
  let temp = 0;
  const countTotal = () => {
   if(products!=null){
    products.forEach((element) => {
      temp = temp + element.elementPrice * element.elementQuantity;
    });
   } 
    return temp;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="basket-desktop">
              <div className="basket-header">
                <div className="row">
                  <div className="col-md-3 offset-md-1">
                    <p>Məhsullar</p>
                  </div>
                  <div className="col-md-2">
                    <p>Endirim</p>
                  </div>
                  <div className="col-md-2">
                    <p>Qiymət</p>
                  </div>
                  <div className="col-md-2">
                    <p>Miqdarı</p>
                  </div>
                </div>
              </div>
              {products &&
                products.map((pr) => {
                  return <BasketItem pr={pr}></BasketItem>;
                })}
              <div className="row">
                <div className="col-md-3 offset-md-9">
                  <div className="total mt-3">
                    <p>Total:</p>
                    <p>{countTotal()}AZN</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="basket-mobile">
              {products&&products.map((pr) => {
                return <BasketItem pr={pr}></BasketItem>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
