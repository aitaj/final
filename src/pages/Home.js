import React, { useState, useEffect } from "react";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Partner from "../components/Partners/Partner";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../admin/pages/Product/actions";
import { fetchCompanies } from "../admin/pages/Company/actions";
import  Filter  from "../components//Filter/Filter";
const Home = () => {
  const { products } = useSelector((state) => state.products);
  const { companies } = useSelector((state) => state.companies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCompanies());
  }, []);

  return (
    <>
      <Header></Header>
      <Partner companies={companies}></Partner>
      <Filter products={products}></Filter>
      <Footer></Footer>
    </>
  );
};

export default Home;
