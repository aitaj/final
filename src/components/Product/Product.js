import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
const Product = ({ products, isFiltered }) => {
  const [items, setItems] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    setItems(products.slice(data.selected * 6, data.selected * 6 + 6));
    setIsClicked(true);
  };
  return (
    <>
      <div className="row mb-4">
        {isClicked||isFiltered
          ? items.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })
          : products.slice(0, 6).map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
      </div>
      <ReactPaginate
        breakLabel={"..."}
        pageCount={10}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination d-flex justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        prevClassName={"page-item"}
        previousLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      ></ReactPaginate>
    </>
  );
};

export default Product;
