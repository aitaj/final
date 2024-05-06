import React, { useEffect } from "react";
import ProductDetailed from "./ProductDetailed";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import { fetchProducts } from "./actions";
const ProductWithDetailsAdmin = () => {
  const { id } = useParams();
  let location = useLocation();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };
  let product = products.find((p) => p.id == id);
  return (
    <>
      <ProductDetailed product={product} id={id}></ProductDetailed>
    </>
  );
};

export default ProductWithDetailsAdmin;
