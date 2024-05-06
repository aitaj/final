import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { addSize, editSize, fetchSizes } from "./actions";
import { useDispatch } from "react-redux";
const ModalSize = ({ showModal, closeModal, item }) => {
  var date = new Date();
  date.setHours(date.getHours() + 4);
  var isodate = date.toISOString();

  const [formData, setFormData] = useState({
    name: "",
    abbrName: "",
    createdByUserId: 0,
    createdDate: isodate,
    deletedByUserId: null,
    deletedDate: null,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(item).length > 0) {
      setFormData({
        id: item.id,
        name: item.name,
        abbrName: item.abbrName,
        createdByUserId: item.createdByUserId,
        createdDate: item.createdDate,
        deletedByUserId: item.deletedByUserId,
        deletedDate: item.deletedDate,
      });
    }
  }, []);

  const handleChangeInp = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleActionSize = () => {
    closeModal();
    if (Object.keys(item).length > 0) {
      dispatch(editSize(formData));
    } else {
      dispatch(addSize(formData));
      dispatch(fetchSizes())
    }
  };
  return (
    <>
      <div>
        <Modal show={true} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {Object.keys(item).length > 0 ? "Update" : "Add"} Size
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="name"
                value={formData.name}
                onChange={(e) => handleChangeInp(e, "name")}
              />
              <input
                type="text"
                name="abbrName"
                className="form-control my-3"
                placeholder="Abbretiation"
                value={formData.abbrName}
                onChange={(e) => handleChangeInp(e, "abbrName")}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-add"
              variant="primary"
              onClick={handleActionSize}
            >
              {Object.keys(item).length > 0 ? "Update" : "Add"}
            </Button>
            <Button
              className="btn-close"
              variant="secondary"
              onClick={closeModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ModalSize;
