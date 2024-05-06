import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "./actions/index";
import ModalProduct from "./ModalProduct";

const ProductCardAdmin = ({ productItem }) => {
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    document.querySelector(".confirm-bg").style.display = "none";
    document.querySelector(".container-custom-popup ").style.display = "none";
    dispatch(deleteProduct(id));
  };
  const handleEdit = (item) => {
    setProduct(item);
    setShowModal(true);
  };

  const handleDetailed = (item) => {
    setProduct(item);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setProduct({});
  };
  const [delTask, setDelTask] = useState(false);
  const [productId, setProductId] = useState(0);
  const handleConfirmationBox = (id) => {
    setProductId(id);
    if (!delTask) {
      document.querySelector(".confirm-bg").style.display = "flex";
      document.querySelector(".container-custom-popup ").style.display = "flex";
      setDelTask(true);
    } else {
      document.querySelector(".confirm-bg").style.display = "none";
      document.querySelector(".container-custom-popup ").style.display = "none";
      setDelTask(false);
    }
  };
  return (
    <>
      {" "}
      <div className="row">
        <div className="col-3">
          {" "}
          <p>{productItem.name}</p>
        </div>
        <div className="col-3">
          {" "}
          <p>{productItem.brend.name}</p>
        </div>
        <div className="col-3">
          {" "}
          <p>{productItem.discount}%</p>
        </div>
        <div className="col-3">
          {" "}
          <p>{productItem.material.name}</p>
        </div>
      </div>{" "}
      <div className="wrapper d-flex justify-content-between">
        <img
          className="product-image"
          src={
            productItem.productImages.length != 0
              ? `${productItem.productImages[0].imagePath}`
              : "https://i.stack.imgur.com/y9DpT.jpg"
          }
        />
        <div className="btns-wrapper">
          <a onClick={() => handleEdit(productItem)} className="edit">
            Yenilə
          </a>
          <Link
            to={`/admin/products/${productItem.id}`}
            className="details"
            onClick={() => {
              handleDetailed(productItem);
            }}
          >
            Detallar
          </Link>
          <a
            onClick={() => {
              handleConfirmationBox(productItem.id);
            }}
            className="delete"
          >
            Sil
          </a>
        </div>
      </div>{" "}
      {showModal && (
        <ModalProduct
          closeModal={handleCloseModal}
          item={product}
        ></ModalProduct>
      )}
      <div className="container-custom-popup ">
        <div className="confirmation-text mb-4">
          Silmək istədiyinizə əminsinizmi?
        </div>
        <div className="button-container">
          <a className="cancel-button" onClick={() => handleConfirmationBox()}>
            Xeyr
          </a>
          <a
            className="confirmation-button"
            onClick={() => handleDelete(productId)}
          >
            Bəli
          </a>
        </div>
      </div>
      <div className="confirm-bg" onClick={() => handleConfirmationBox()}></div>
    </>
  );
};

export default ProductCardAdmin;
