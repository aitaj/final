import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import API from "../../api/index";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { Link } from "react-router-dom";
const SecondHandProductDetailed = () => {
  const [secondHandProduct, setSecondHandProduct] = useState({});
  const { id } = useParams();
  let location = useLocation();
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };

  let query = useQuery();
  useEffect(() => {
    const getSecondHandProduct = async () => {
      const { data } = await API.get(`/secondhandproducts/${id}`);
      setSecondHandProduct(data);
    };
    getSecondHandProduct();
  }, []);

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
                <p className="productTitle">
                  Göndərən istifadəçinin emaili :{secondHandProduct.email}
                </p>
                <p className="productTitle">
                  Göndərən istifadəçinin adı :{secondHandProduct.userName}
                </p>
                <p className="productTitle">
                  Göndərən istifadəçinin nömrəsi :{secondHandProduct.phone}
                </p>
                <p className="productTitle">
                  Məhsul adı :{secondHandProduct.productName}
                </p>
                <p className="productTitle">
                  Məhsul haqqında ətraflı məlumat :
                  {secondHandProduct.productDesc}
                </p>
                <img
                  className="product-image"
                  src={secondHandProduct.imagePath}
                />
                <p className="productTitle">
                  Əlavə edilmə tarixi :{" "}
                  {secondHandProduct.createdDate != null
                    ? ` ${secondHandProduct.createdDate.substring(0, 10)}`
                    : "Təyin olunmayıb"}
                </p>
                <div className="btns-wrapper">
                  <Link to={`/admin/secondhandproducts`} className="edit mt-2">
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

export default SecondHandProductDetailed;
