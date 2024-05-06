import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { deleteCategory, fetchCategories } from "./actions/index";
import ModalCategory from "./ModalCategory";
export default function Category() {

  const { categories } = useSelector((state) => state.categories);
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };
  const handleEdit = (size) => {
    setCategory(size);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCategory({});
  };

  const handleAdd = () => {
    setShowModal(true);
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
                <h3 className="productTitle my-3">Bütün kategoriyalar</h3>
                <Link>
                  <button onClick={handleAdd} className="productAddButton">
                    Yenisini yarat
                  </button>
                </Link>
              </div>
              <div className="sizes my-4">
                <ul>
                  <li>
                    <div className="wrapper d-flex justify-content-between header-list mb-3">
                      <h5>Ad</h5>
                    </div>
                  </li>
                  {categories.map((category, index) => {
                    return (
                      <li>
                        <div className="wrapper d-flex justify-content-between">
                          <p>{category.name}</p>
                          <div className="btns-wrapper">
                            <a
                              onClick={() => handleEdit(category)}
                              className="edit"
                            >
                              Yenilə
                            </a>
                            <Link
                              to={`/admin/categories/${category.id}`}
                              className="details"
                            >
                              Detallar
                            </Link>
                            <a
                              onClick={() => {
                                handleDelete(category.id);
                              }}
                              className="delete"
                            >
                              Sil
                            </a>
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
      {showModal && (
        <ModalCategory
          closeModal={handleCloseModal}
          item={category}
        ></ModalCategory>
      )}
    </>
  );
}
