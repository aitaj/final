import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSecondHandProduct } from "../../admin/pages/SecondHand/actions/index";
const SecondHand = () => {
  const [currentError, setCurrentError] = useState("");
  var date = new Date();
  date.setHours(date.getHours() + 4);
  var isodate = date.toISOString();
  const [formData, setFormData] = useState({
    productName: "",
    imagePath: "",
    userName: "",
    phone: "",
    productName: "",
    email: "",
    productDesc: "",
    imageFile: null,
    createdByUserId: 1,
    createdDate: isodate,
    deletedByUserId: null,
    deletedDate: null,
  });
  const dispatch = useDispatch();

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    if (formData.userName.length < 3) {
      setCurrentError("Istifadeçi adı 3 simvoldan az olmamalıdır");
    }
    else if(formData.phone.length!=10||parseInt(formData.phone).toString().length!=10){
      setCurrentError("Telefon nomresinin formati dogru deyil");
    }
    else if(!re.test(formData.email)){
      setCurrentError("Email formati dogru deyil");
    }
    else if(formData.productName.length < 3){
      setCurrentError("Məhsul adı 3 simvoldan az olmamalıdır");
    }
    else if(formData.productDesc.length < 20){
      setCurrentError("Məlumat 20 simvoldan az olmamalıdır");
    }
    else if(formData.imageFile==null){
      setCurrentError("Məhsulun şəkli daxil olunmalıdır");
    }
    else{
      dispatch(addSecondHandProduct(formData));
      setFormData({
        productName: "",
        imagePath: "",
        userName: "",
        phone: "",
        productName: "",
        email: "",
        productDesc: "",
        imageFile: null,
      })
      setCurrentError("");
    }
  };
  return (
    <>
      <section id="contact">
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-8">
              <form className="contact-form">
                <div className="form-info mb-4">
                  <h4>
                    Satmaq istədiyiniz ikinci əl məhsul haqqında məlumatları
                    aşağıdakı formda doldura bilərsiniz:
                  </h4>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-custom">
                      <input
                        className="form-control"
                        name="userName"
                        id="firstname"
                        type="text"
                        placeholder="Adınız"
                        value={formData.userName}
                        onChange={(e) => handleChangeInp(e, "userName")}
                      />
                      <small>{handleSubmit}</small>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-custom">
                      <input
                        className="form-control"
                        name="phone"
                        id="number"
                        type="text"
                        placeholder="Əlaqə nömrəniz"
                        value={formData.phone}
                        onChange={(e) => handleChangeInp(e, "phone")}
                      />
                      <small
                        id="helpId"
                        className="form-text text-danger d-none"
                      ></small>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-custom">
                      <input
                        className="form-control"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Email  ünvanınız"
                        value={formData.email}
                        onChange={(e) => handleChangeInp(e, "email")}
                      />
                      <small
                        id="helpId"
                        className="form-text text-danger d-none"
                      ></small>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-custom">
                      <input
                        type="text"
                        className="form-control"
                        name="productName"
                        id="product"
                        placeholder="Məhsulun adı"
                        value={formData.productName}
                        onChange={(e) => handleChangeInp(e, "productName")}
                      />
                      <small
                        id="helpId"
                        className="form-text text-danger d-none"
                      ></small>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="productDesc"
                      cols="30"
                      rows="5"
                      placeholder="Ətraflı məlumat(qiymət və ünvan mütləqdir)"
                      id="textarea"
                      value={formData.productDesc}
                      onChange={(e) => handleChangeInp(e, "productDesc")}
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <input
                      type="file"
                      accept="image/*"
                      name="imagePath"
                      className="form-control-file mt-2"
                      placeholder="imagePath"
                      onChange={showprev}
                    />
                    <img
                      className="product-image mt-2"
                      src={formData.imagePath}
                    />
                  </div>

                  <div className="col-lg-12 mt-3">
                    <div className="btn-wrapper justify-content-start">
                      <a
                        type="submit"
                        href="#"
                        className="btn-custom"
                        onClick={handleSubmit}
                      >
                        Göndər
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className={currentError.length>0?"error-message text-center":"d-none"}>
                      {" "}
                      {currentError}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondHand;
