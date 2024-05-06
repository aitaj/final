import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { editProductImage, addProductImage } from "./actions";
import { useDispatch,useSelector } from "react-redux";
import { fetchProducts } from "../Product/actions";
const ModalProductImage = ({ closeModal, item }) => {
  var date = new Date();
  date.setHours(date.getHours() + 4);
  var isodate = date.toISOString();

  const { products } = useSelector((state) => state.products);
  const [formData, setFormData] = useState({
    name: "",
    imagePath: "",
    ismain: false,
    productId: 19,
    imageFile: null,
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
        imagePath: item.imagePath,
        imageFile: item.imageFile,
        productId:item.productId,
        createdByUserId: item.createdByUserId,
        createdDate: item.createdDate,
        deletedByUserId: item.deletedByUserId,
        deletedDate: item.deletedDate,
      });
    }
    dispatch(fetchProducts());
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
      dispatch(editProductImage(formData));
    } else {
      dispatch(addProductImage(formData));
    }
  };
  const showprev = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setFormData({ ...formData, imageFile, imagePath: x.target.result });
      };
      reader.readAsDataURL(imageFile);
    }
  };
  const handleSubmit = () => {
    console.log("test");
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                className="form-control mt-2"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleChangeInp(e, "name")}
              />
             
              <input
                type="file"
                accept="image/*"
                name="imagePath"
                className="form-control-file mt-2"
                placeholder="imagePath"
                onChange={showprev}
              />
              <img className="product-image mt-2" src={formData.imagePath} />
              <select className="mb-3 mt-2 custom-select" onChange={(e)=>handleChangeInp(e,"productId",true)}>
                <option disabled value="Products">
                  Məhsullar
                </option>
                {products.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
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

export default ModalProductImage;
