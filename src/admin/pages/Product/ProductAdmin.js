import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./actions/index";
import ModalProduct from "./ModalProduct";
import ProductCardAdmin from "./ProductCardAdmin";
export default function Product() {
  const { products } = useSelector((state) => state.products);
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  ///

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const handleAdd = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setProduct({});
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
                <h3 className="productTitle my-3">Bütün məhsullar</h3>
                <Link>
                  <button onClick={handleAdd} className="productAddButton">
                    Yenisini yarat
                  </button>
                </Link>
              </div>
              <div className="sizes my-4">
                <ul>
                  <li>
                    <div className="row">
                      <div className="col-3">
                        {" "}
                        <p>Ad</p>
                      </div>
                      <div className="col-3">
                        {" "}
                        <p>Brend</p>
                      </div>
                      <div className="col-3">
                        {" "}
                        <p>Endirim</p>
                      </div>
                      <div className="col-3">
                        {" "}
                        <p>Material</p>
                      </div>
                    </div>{" "}
                  </li>
                  {products.map((product) => {
                    return (
                      <li>
                        <ProductCardAdmin
                          key={product.id}
                          productItem={product}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <ModalProduct
          closeModal={handleCloseModal}
          item={product}
        ></ModalProduct>
      )}
    </>
  );
}
