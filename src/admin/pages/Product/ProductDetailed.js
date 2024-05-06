import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import API from "../../api/index";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../Product/actions/index";
const ProductDetailed = ({product,id}) => {

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
                <h3 className="productTitle my-3">Detallı məlumat</h3>
                <p className="productTitle">Ad :{product!=null?product.name:""}AZN</p>
                <p className="productTitle">Qiymət :{product!=null?product.price:""}AZN</p>
                <p className="productTitle">Bütün şəkillər:</p>
                {product&&product.productImages.map((image) => {
                  return (
                    <img className="product-image mr-2" src={image.imagePath} />
                  );
                })}

                <p className="productTitle mt-3">Ölçü :{product&&product.size.name}</p>
                <p className="productTitle">
                  Material :{product&&product.material.name}
                </p>
                <p className="productTitle">Yer :{product&&product.location.name}</p>
                <p className="productTitle">Haqqında :{product&&product.description}</p>
                <p className="productTitle">Endirim :{product&&product.discount}%</p>
                <p className="productTitle">
                  Endirim başlanğıc tarixi :
                  {product&&product.startDiscount.toString().slice(0, 10)}
                </p>
                <p className="productTitle">
                  Endirim bitmə tarixi :{product&&product.endDiscount.toString().slice(0, 10)}
                </p>
            
                <p className="productTitle">
                  Əlavə edilmə tarixi :{" "}
                  {product&&product.createdDate != null
                    ? ` ${product.createdDate.substring(0, 10)}`
                    : "Təyin olunmayıb"}
                </p>
                <div className="btns-wrapper">
                  <Link to={`/admin/products`} className="edit">
                    Siyahıya Qayıt
                  </Link>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailed;
