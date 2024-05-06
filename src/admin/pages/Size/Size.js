import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSizes, deleteSize } from "./actions/index";
import ModalSize from "./ModalSize";
export default function Size() {
  const { sizes } = useSelector((state) => state.sizes);
  const [showModal, setShowModal] = useState(false);
  const [sizeItem, setSizeItem] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSizes());
  }, []);
  const handleDelete = (id) => {
    dispatch(deleteSize(id));
  };
  const handleEditSize = (size) => {
    setSizeItem(size);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSizeItem({});
  };

  const handleAddSize = () => {
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
                <h3 className="productTitle my-3">Bütün ölçülər</h3>
                <Link>
                  <button onClick={handleAddSize} className="productAddButton">
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
                  {sizes.map((size, index) => {
                    return (
                      <li>
                        <div className="wrapper d-flex justify-content-between">
                          <p>{size.name}</p>
                          <div className="btns-wrapper">
                            <a
                              onClick={() => handleEditSize(size)}
                              className="edit"
                            >
                              Yenilə
                            </a>
                            <Link
                              to={`/admin/sizes/${size.id}`}
                              className="details"
                            >
                              Detallar
                            </Link>
                            <a
                              onClick={() => {
                                handleDelete(size.id);
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
        <ModalSize closeModal={handleCloseModal} item={sizeItem}></ModalSize>
      )}
    </>
  );
}
