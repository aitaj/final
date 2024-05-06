import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSubcategory, fetchSubcategories } from "./actions/index";
import ModalSubcategory from "./ModalSubcategory";
export default function Subcategory() {
  const { subcategories } = useSelector((state) => state.subcategories);
  const [showModal, setShowModal] = useState(false);
  const [subcategory, setSubcategory] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSubcategories());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteSubcategory(id));
  };
  const handleEdit = (item) => {
    setSubcategory(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSubcategory({});
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
                <h3 className="productTitle my-3">Bütün alt kateqoriyalar</h3>
                <Link>
                  <button onClick={handleAdd} className="productAddButton">
                    Yenisini yarat
                  </button>
                </Link>
              </div>
              <div className="sizes my-4">
                <ul>
                  <li>
                    <div className="row mb-2">
                      <div className="col-4">
                        <h5>Ad</h5>
                      </div>
                      <div className="col-4">
                        <h5>Kateqoriya</h5>
                      </div>
                    </div>
                  </li>
                  {subcategories.map((subcategory, index) => {
                    return (
                      <li>
                        <div className="row">
                          <div className="col-4">
                            <p>{subcategory.name}</p>
                          </div>
                          <div className="col-4">
                            {" "}
                            <p className="productTitle">
                              {subcategory.category == undefined
                                ? "teyin olunmayib"
                                : `${subcategory.category.name}`}
                            </p>
                          </div>
                          <div className="col-4">
                            <div className="btns-wrapper">
                              <a
                                onClick={() => handleEdit(subcategory)}
                                className="edit"
                              >
                                Yenilə
                              </a>
                              <Link
                                to={`/admin/subcategories/${subcategory.id}`}
                                className="details"
                              >
                                Detallar
                              </Link>
                              <a
                                onClick={() => {
                                  handleDelete(subcategory.id);
                                }}
                                className="delete"
                              >
                                Sil
                              </a>
                            </div>
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
        <ModalSubcategory
          closeModal={handleCloseModal}
          item={subcategory}
        ></ModalSubcategory>
      )}
    </>
  );
}
