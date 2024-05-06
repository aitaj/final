import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { addMaterial, editMaterial } from "./actions";
import { useDispatch } from "react-redux";
const ModalMaterial = ({ closeModal, item }) => {
  var date = new Date();
  date.setHours(date.getHours() + 4);
  var isodate = date.toISOString();

  const [formData, setFormData] = useState({
    name: "",
    createdByUserId: 1,
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

  const handleAction = () => {
    closeModal();
    if (Object.keys(item).length > 0) {
      dispatch(editMaterial(formData));
    } else {
      dispatch(addMaterial(formData));
    }
  };
  return (
    <>
      <div>
        <Modal show={true} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {Object.keys(item).length > 0 ? "Update" : "Add"} Material
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
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn-add"
              variant="primary"
              onClick={handleAction}
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

export default ModalMaterial;
