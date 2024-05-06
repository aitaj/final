import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { addProduct, editProduct } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubcategories } from "../Subcategory/actions/index";
import { fetchMaterials } from "../Material/actions/index";
import { fetchLocations } from "../Location/actions/index";
import { fetchColours } from "../Colour/actions/index";
import { fetchBrends } from "../Brend/actions/index";
import { fetchSizes } from "../Size/actions/index";
import { fetchProducts } from "./actions/index";
const ModalProduct = ({ closeModal, item }) => {
  var date = new Date();
  date.setHours(date.getHours() + 4);
  var isodate = date.toISOString();

  const { subcategories } = useSelector((state) => state.subcategories);
  const { materials } = useSelector((state) => state.materials);
  const { locations } = useSelector((state) => state.locations);
  const { colours } = useSelector((state) => state.colours);
  const { brends } = useSelector((state) => state.brends);
  const { sizes } = useSelector((state) => state.sizes);

  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    serialNumber: 0,
    locationId: 1,
    brendId: 1,
    productColorId: 1,
    sizeId: 23,
    discount: 0,
    startDiscount: null,
    endDiscount: null,
    materialId: 1,
    subcategoryId: 28,
    isFavourite: false,
    productImages: null,
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
        price: item.price,
        description: item.description,
        serialNumber: item.serialNumber,
        locationId: item.locationId,
        brendId: item.brendId,
        productColorId: item.productColorId,
        sizeId: item.sizeId,
        discount: item.discount,
        startDiscount: item.startDiscount,
        endDiscount: item.endDiscount,
        materialId: item.materialId,
        subcategoryId: item.subcategoryId,
        isFavourite: item.isFavourite,
        productImages: item.productImages,
        createdByUserId: item.createdByUserId,
        createdDate: item.createdDate,
        deletedByUserId: item.deletedByUserId,
        deletedDate: item.deletedDate,
      });
    }
    dispatch(fetchSubcategories());
    dispatch(fetchMaterials());
    dispatch(fetchLocations());
    dispatch(fetchColours());
    dispatch(fetchBrends());
    dispatch(fetchSizes());
  }, []);

  const handleChangeInp = (e, field, parse = false, isFloat = false) => {
    if (parse&&!isFloat) {
      setFormData({ ...formData, [field]: parseInt(e.target.value) });
    } else if (!parse&&isFloat) {
      setFormData({ ...formData, [field]: parseFloat(e.target.value) });
      console.log(formData);
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
      dispatch(editProduct(formData));
      dispatch(fetchProducts(formData));
    } else {
      dispatch(addProduct(formData));
      dispatch(fetchProducts(formData));
    }
  };

  return (
    <>
      <div>
        <Modal show={true} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {Object.keys(item).length > 0 ? "Update" : "Add"} Product
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label for="name">Ad</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => handleChangeInp(e, "name")}
              />
              <label for="description">Ətraflı məlumat</label>
              <input
                type="text"
                name="description"
                className="form-control"
                placeholder="Description"
                value={formData.description}
                onChange={(e) => handleChangeInp(e, "description")}
              />
              <label for="price">Qiymət</label>
              <input
                type="number"
                name="price"
                className="form-control"
                placeholder="Price"
                value={formData.price}
                onChange={(e) => handleChangeInp(e, "price", false, true)}
              />{" "}
              <label for="startDiscount">Endirim başlanğıc tarixi</label>
              <input
                type="date"
                name="startDiscount"
                className="form-control"
                placeholder="name"
                value={formData.startDiscount}
                onChange={(e) => handleChangeInp(e, "startDiscount")}
              />{" "}
              <label for="endDiscount">Endirimin bitmə tarixi</label>
              <input
                type="date"
                name="endDiscount"
                className="form-control "
                placeholder="name"
                value={formData.endDiscount}
                onChange={(e) => handleChangeInp(e, "endDiscount")}
              />{" "}
              <label for="subcategory">Alt kateqoriyalar</label>
              <select
                name="subcategory"
                className="mb-3 custom-select"
                onChange={(e) => handleChangeInp(e, "subcategoryId", true)}
              >
                <option disabled value="Subcategories">
                  Alt kategoriyalar
                </option>
                {subcategories.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
              <label for="material">Material</label>
              <select
                name="material"
                className="mb-3 custom-select"
                onChange={(e) => handleChangeInp(e, "materialId", true)}
              >
                <option disabled value="Materials">
                  Materiallar
                </option>
                {materials.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
              <label for="location">Location</label>
              <select
                name="location"
                className="mb-3 custom-select"
                onChange={(e) => handleChangeInp(e, "locationId", true)}
              >
                <option disabled value="Locations">
                  Location-lar
                </option>
                {locations.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
              <label for="productColor">Rəng</label>
              <select
                name="productColor"
                className="mb-3 custom-select"
                onChange={(e) => handleChangeInp(e, "productColorId", true)}
              >
                <option disabled value="Colours">
                  Colors
                </option>
                {colours.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>{" "}
              <label for="brend">Brend</label>
              <select
                name="brend"
                className="mb-3 custom-select"
                onChange={(e) => handleChangeInp(e, "brendId", true)}
              >
                <option disabled value="Brends">
                  Brends
                </option>
                {brends.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>{" "}
              <label for="size">Ölçü</label>
              <select
                name="size"
                className="mb-3 custom-select"
                onChange={(e) => handleChangeInp(e, "sizeId", true)}
              >
                <option disabled value="Sizes">
                  Sizes
                </option>
                {sizes.map((item) => (
                  <option value={item.id}>{item.name}</option>
                ))}
              </select>
              <label for="serialNumber">Kod</label>
              <input
                type="number"
                name="serialNumber"
                className="form-control mt-2"
                placeholder="Serial Number"
                value={formData.serialNumber}
                onChange={(e) => handleChangeInp(e, "serialNumber", true)}
              />
              <label for="discount">Endirim</label>
              <input
                type="number"
                name="discount"
                className="form-control mt-2"
                placeholder="Discount"
                value={formData.discount}
                onChange={(e) => handleChangeInp(e, "discount", true)}
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

export default ModalProduct;
