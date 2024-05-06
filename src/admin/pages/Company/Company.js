import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompany, fetchCompanies } from "./actions/index";
import ModalCompany from "./ModalCompany";
export default function Company() {
  const { companies } = useSelector((state) => state.companies);
  const [showModal, setShowModal] = useState(false);
  const [company, setCompany] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteCompany(id));
  };
  const handleEdit = (size) => {
    setCompany(size);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCompany({});
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
                <h3 className="productTitle my-3">Bütün şəkillər</h3>
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
                        <h5>Şəkil</h5>
                      </div>
                    </div>
                  </li>
                  {companies.map((img) => {
                    return (
                      <li>
                        <div className="row mb-2">
                          <div className="col-4">
                            <p>{img.name}</p>
                          </div>
                          <div className="col-4">
                            <img
                              className="product-image"
                              src={img.imagePath}
                            />
                          </div>
                          <div className="col-4">
                            <div className="wrapper d-flex justify-content-between">
                              <div className="btns-wrapper">
                                <a
                                  onClick={() => handleEdit(img)}
                                  className="edit"
                                >
                                  Yenilə
                                </a>
                                <Link
                                  to={`/admin/companies/${img.id}`}
                                  className="details"
                                >
                                  Detallar
                                </Link>
                                <a
                                  onClick={() => {
                                    handleDelete(img.id);
                                  }}
                                  className="delete"
                                >
                                  Sil
                                </a>
                              </div>
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
        <ModalCompany
          closeModal={handleCloseModal}
          item={company}
        ></ModalCompany>
      )}
    </>
  );
}
