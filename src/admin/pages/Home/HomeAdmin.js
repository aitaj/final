import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { fetchProducts } from "../Product/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { fetchCompanies } from "../Company/actions";
export default function HomeAdmin() {
  const { products } = useSelector((state) => state.products);
  const { companies } = useSelector((state) => state.companies);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCompanies());
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
          <div className="home mt-5">
            <h5>Məhsul sayı:</h5>
            <p>{products.length}</p>
            <h5>Partnyor şirkətlərin ümumi sayı:</h5>
            <p>{companies.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
