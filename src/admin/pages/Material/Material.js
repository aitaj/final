import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMaterial, fetchMaterials } from "./actions/index";
import ModalMaterial from "./ModalMaterial";
export default function Material() {
  const { materials } = useSelector((state) => state.materials);
  const [showModal, setShowModal] = useState(false);
  const [material, setMaterial] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMaterials());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteMaterial(id));
  };
  const handleEdit = (size) => {
    setMaterial(size);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMaterial({});
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
                <h3 className="productTitle my-3">Bütün materiallar</h3>
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
                  {materials.map((material, index) => {
                    return (
                      <li>
                        <div className="wrapper d-flex justify-content-between">
                          <p>{material.name}</p>
                          <div className="btns-wrapper">
                            <a
                              onClick={() => handleEdit(material)}
                              className="edit"
                            >
                              Yenilə
                            </a>
                            <Link
                              to={`/admin/materials/${material.id}`}
                              className="details"
                            >
                              Detallar
                            </Link>
                            <a
                              onClick={() => {
                                handleDelete(material.id);
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
        <ModalMaterial
          closeModal={handleCloseModal}
          item={material}
        ></ModalMaterial>
      )}
    </>
  );
}
