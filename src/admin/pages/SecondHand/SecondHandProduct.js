import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSecondHandProduct, fetchSecondHandProducts } from "./actions/index";
export default function SecondHandProduct() {
  const { secondHandProducts } = useSelector((state) => state.secondHandProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSecondHandProducts());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteSecondHandProduct(id));
  };


  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <Topbar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          {" "}
          <div className="size-page">
            {" "}
            <div className="product">
              <div className="productTitleContainer">
                <h3 className="productTitle my-3">Bütün ikinci əl məhsullar</h3>
              </div>
              <div className="sizes my-4">
                <ul>
                  <li>
                    <div className="row mb-2">
                      <div className="col-4">
                        <h5>Ad</h5>
                      </div>
                      <div className="col-4">
                        <h5>Şəkil</h5>
                      </div>
                    </div>
                  </li>
                  {secondHandProducts.map((item) => {
                    return (
                      <li>
                        <div className="row mb-2">
                          <div className="col-4">
                            <p>{item.productName}</p>
                          </div>
                          <div className="col-4">
                            <img
                              className="product-image"
                              src={item.imagePath}
                            />
                          </div>
                          <div className="col-4">
                            <div className="wrapper d-flex justify-content-between">
                              <div className="btns-wrapper">
                                <Link
                                  to={`/admin/secondhandproducts/${item.id}`}
                                  className="details"
                                >
                                  Detallar
                                </Link>
                                <a
                                  onClick={() => {
                                    handleDelete(item.id);
                                  }}
                                  className="delete"
                                >
                                  Sil
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
