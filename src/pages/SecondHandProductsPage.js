import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SecondHandProductsPage = () => {
  const { secondHandProducts } = useSelector(
    (state) => state.secondHandProducts
  );
  return <></>;
};

export default SecondHandProductsPage;
