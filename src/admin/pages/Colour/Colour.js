import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  deleteColour,fetchColours, } from "./actions/index";
import ModalColour from "./ModalColour";
export default function Colour() {
  const { colours } = useSelector((state) => state.colours);
  const [showModal, setShowModal] = useState(false);
  const [colour, setColour] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchColours());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteColour(id));
  };
  const handleEdit = (item) => {
    setColour(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setColour({});
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
                <h3 className="productTitle my-3">Bütün rənglər</h3>
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
                  {colours.map((colour, index) => {
                    return (
                      <li>
                        <div className="wrapper d-flex justify-content-between">
                          <p>{colour.name}</p>
                          <div className="btns-wrapper">
                            <a
                              onClick={() => handleEdit(colour)}
                              className="edit"
                            >
                              Yenilə
                            </a>
                            <Link
                              to={`/admin/colours/${colour.id}`}
                              className="details"
                            >
                              Detallar
                            </Link>
                            <a
                              onClick={() => {
                                handleDelete(colour.id);
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
        <ModalColour
          closeModal={handleCloseModal}
          item={colour}
        ></ModalColour>
      )}
    </>
  );
}
