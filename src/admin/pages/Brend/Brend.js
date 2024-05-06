import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBrend, fetchBrends } from "./actions/index";
import ModalBrend from "./ModalBrend";
export default function Brend() {
  const { brends } = useSelector((state) => state.brends);
  const [showModal, setShowModal] = useState(false);
  const [brend, setBrend] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrends());
  }, []);
  const handleDelete = (id) => {
    document.querySelector(".confirm-bg").style.display = "none";
    document.querySelector(".container-custom-popup ").style.display = "none";
    dispatch(deleteBrend(id));
  };
  const handleEdit = (item) => {
    setBrend(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setBrend({});
  };

  const handleAdd = () => {
    setShowModal(true);
  };

  const [delTask, setDelTask] = useState(false);
  const [brendId, setBrendId] = useState(0);
  const handleConfirmationBox = (id) => {
    setBrendId(id);
    if (!delTask) {
      document.querySelector(".confirm-bg").style.display = "flex";
      document.querySelector(".container-custom-popup ").style.display = "flex";
      setDelTask(true);
    } else {
      document.querySelector(".confirm-bg").style.display = "none";
      document.querySelector(".container-custom-popup ").style.display = "none";
      setDelTask(false);
    }
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
                <h3 className="productTitle my-3">Bütün brendlər</h3>
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
                  {brends.map((brend, index) => {
                    return (
                      <li>
                        <div className="wrapper d-flex justify-content-between">
                          <p>{brend.name}</p>
                          <div className="btns-wrapper">
                            <a
                              onClick={() => handleEdit(brend)}
                              className="edit"
                            >
                              Yenilə
                            </a>
                            <Link
                              to={`/admin/brends/${brend.id}`}
                              className="details"
                            >
                              Detallar
                            </Link>
                            <a
                              onClick={() => handleConfirmationBox(brend.id)}
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
        <ModalBrend closeModal={handleCloseModal} item={brend}></ModalBrend>
      )}
      <div className="container-custom-popup ">
        <div className="confirmation-text mb-4">
        Silmək istədiyinizə əminsinizmi?
        </div>
        <div className="button-container">
          <a className="cancel-button" onClick={() => handleConfirmationBox()}>
            Xeyr
          </a>
          <a
            className="confirmation-button"
            onClick={() => handleDelete(brendId)}
          >
           Bəli
          </a>
        </div>
      </div>
      <div className="confirm-bg" onClick={() => handleConfirmationBox()}></div>
    </>
  );
}
