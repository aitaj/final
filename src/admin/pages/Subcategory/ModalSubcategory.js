import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { addSubcategory, editSubcategory } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Category/actions/index";
const ModalSubcategory = ({ closeModal, item }) => {
  var date = new Date();
  date.setHours(date.getHours() + 4);
  var isodate = date.toISOString();
  const [select, setSelect] = useState(0);
  const { categories } = useSelector((state) => state.categories);
  const [formData, setFormData] = useState({
    name: "",
    categoryId: null,
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
        categoryId: item.categoryId,
        createdByUserId: item.createdByUserId,
        createdDate: item.createdDate,
        deletedByUserId: item.deletedByUserId,
        deletedDate: item.deletedDate,
      });
    }

    dispatch(fetchCategories());
  }, []);

  const handleChangeInp = (e, field, parse = false) => {
    if (parse) {
      setFormData({ ...formData, [field]: parseInt(e.target.value) });
    } else {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    }
  };
  const handleAction = () => {
    closeModal();
    if (Object.keys(item).length > 0) {
      dispatch(editSubcategory(formData));
    } else {
      dispatch(addSubcategory(formData));
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
              <select className="mb-3 custom-select" onChange={(e)=>handleChangeInp(e,"categoryId",true)}>
                <option selected disabled value="Categories">
                  Kategoriyalar
                </option>
                {categories.map((cat) => (
                  <option value={cat.id}>{cat.name}</option>
                ))}
              </select>
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

export default ModalSubcategory;
