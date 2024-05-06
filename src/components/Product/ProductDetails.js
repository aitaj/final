import React, { useState, useEffect } from "react";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import { Link, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../admin/pages/Product/actions";
const ProductDetails = ({product,id}) => {
  const dispatch = useDispatch();

  function beforeDiscount(currentPrice, discount) {
    return (currentPrice * 100) / (100 - discount);
  }

  const formatDate = (date) => {
    const datetime = new Date(date);
    let dateDay = datetime.getDate();
    let month = datetime.getMonth();
    switch (month) {
      case 0:
        return `${dateDay} yanvar`;
      case 1:
        return `${dateDay} fevral`;
      case 2:
        return `${dateDay} mart`;
      case 3:
        return `${dateDay} aprel`;
      case 4:
        return `${dateDay} may`;
      case 5:
        return `${dateDay} iyun`;
      case 6:
        return `${dateDay} iyul`;
      case 7:
        return `${dateDay} avqust`;
      case 8:
        return `${dateDay} senyabr`;
      case 9:
        return `${dateDay} oktyabr`;
      case 10:
        return `${dateDay} noyabr`;
      case 11:
        return `${dateDay} dekabr`;
      default:
        break;
    }
  };
  useEffect(() => {
    dispatch(fetchProducts());
    let thumbnails = document.getElementsByClassName("thumbnail");
    let activeImages = document.getElementsByClassName("active");

    for (var i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener("click", function () {
        if (activeImages.length > 0) {
          activeImages[0].classList.remove("active");
        }

        this.classList.add("active");
        document.getElementById("featured").src = this.src;
      });
    }

    let buttonRight = document.getElementById("slideRight");
    let buttonLeft = document.getElementById("slideLeft");

    buttonLeft.addEventListener("click", function () {
      document.getElementById("slider").scrollLeft -= 180;
    });

    buttonRight.addEventListener("click", function () {
      document.getElementById("slider").scrollLeft += 180;
    });

    //zoom
    document
      .getElementById("img-container")
      .addEventListener("mouseover", function () {
        imageZoom("featured");
      });

    function imageZoom(imgID) {
      let img = document.getElementById(imgID);
      let lens = document.getElementById("lens");

      lens.style.backgroundImage = `url( ${img.src} )`;

      let ratio = 3;

      lens.style.backgroundSize =
        img.width * ratio + "px " + img.height * ratio + "px";

      img.addEventListener("mousemove", moveLens);
      lens.addEventListener("mousemove", moveLens);
      img.addEventListener("touchmove", moveLens);

      function moveLens() {
        /*
          Function sets sets position of lens over image and background image of lens
          1 - Get cursor position
          2 - Set top and left position using cursor position - lens width & height / 2
          3 - Set lens top/left positions based on cursor results
          4 - Set lens background position & invert
          5 - Set lens bounds

          */

        //1
        let pos = getCursor();

        //2
        let positionLeft = pos.x - lens.offsetWidth / 2;
        let positionTop = pos.y - lens.offsetHeight / 2;

        //5
        if (positionLeft < 0) {
          positionLeft = 0;
        }

        if (positionTop < 0) {
          positionTop = 0;
        }

        if (positionLeft > img.width - lens.offsetWidth / 3) {
          positionLeft = img.width - lens.offsetWidth / 3;
        }

        if (positionTop > img.height - lens.offsetHeight / 3) {
          positionTop = img.height - lens.offsetHeight / 3;
        }

        //3
        lens.style.left = positionLeft + "px";
        lens.style.top = positionTop + "px";

        //4
        lens.style.backgroundPosition =
          "-" + pos.x * ratio + "px -" + pos.y * ratio + "px";
      }

      function getCursor() {
        /* Function gets position of mouse in dom and bounds
           of image to know where mouse is over image when moved

          1 - set "e" to window events
          2 - Get bounds of image
          3 - set x to position of mouse on image using pageX/pageY - bounds.left/bounds.top
          4- Return x and y coordinates for mouse position on image

           */

        let e = window.event;
        let bounds = img.getBoundingClientRect();

        let x = e.pageX - bounds.left;
        let y = e.pageY - bounds.top;
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;

        return { x: x, y: y };
      }
    }

    imageZoom("featured");
  }, [dispatch]);

  const [count, setCount] = useState(0);
  const handleDecrease = (count) => {
    if (count < 1) {
      return;
    }
    setCount(count - 1);
  };
  const handleIncrease = (count) => {
    setCount(count + 1);
  };
  const handleAddBasket = (element, count) => {
    let basket = JSON.parse(localStorage.getItem("basket")); // Parse data from localstorage

    let elementimageUrl =
      element.productImages[0] != null
        ? product.productImages[0].imagePath
        : ""; // element.imageUrl is a part of backend data received from JSON file
    let elementId = element.id; // element._id is a part of backend data received from JSON file
    let elementName = element.name; // element.name is a part of backend data received from JSON file
    let elementPrice = element.price; // element.price is a part of backend data received from JSON file
    let elementQuantity = count;
    let elementDiscount = element.discount;

    if (!basket) {
      basket = [];
    }

    // find the index of the item if already in basket
    const itemIndexInBasket = basket.findIndex(
      (basketEntry) => basketEntry.elementId === elementId
    );
    if (itemIndexInBasket !== -1) {
      basket[itemIndexInBasket].elementQuantity++;
    } else {
      basket.push({
        elementId,
        elementName,
        elementPrice,
        elementQuantity,
        elementimageUrl,
        elementDiscount,
      }); // Push not existing data to localstorage
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  };
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-12">
          <h3 className="text-center my-4">
            {product != undefined ? product.name : ""}
          </h3>
        </div>
        <div className="col-md-6">
          <div id="content-wrapper">
            <div className="column">
              <div id="img-container">
                <div id="lens"></div>
                <img
                  id="featured"
                  src={
                    product==null?"":
                    (product.productImages[0] != null
                      ? product.productImages[0].imagePath
                      : "")
                  }
                />
              </div>
              <div id="slide-wrapper">
                <img
                  id="slideLeft"
                  className="arrow"
                  src={
                    product==null?"":
                    (product.productImages[0] != null
                      ? product.productImages[0].imagePath
                      : "")
                  }
                />

                <div id="slider">
                  {product!=null?product.productImages.map((element) => {
                    return (
                      <img className="thumbnail" src={element.imagePath} />
                    );
                  }):""}
                </div>

                <img
                  id="slideRight"
                  className="arrow"
                  src={
                    product==null?"":
                    (product.productImages[0] != null
                      ? product.productImages[0].imagePath
                      : "")
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="product-info">
            <p className="price-info">
              Qiymət:
              <span className="ex-price">
                {" "}
                {product!=null?beforeDiscount(
                  parseFloat(product.price),
                  parseFloat(product.discount)
                ).toFixed(2):""}
                AZN-
              </span>
              <span className="current-price">{product!=null?product.price:""}AZN</span>
            </p>
            <p className="description">
              Ətraflı məlumat: {product!=null?product.description:""}
            </p>
            <p className="discount-info">Endirim: {product!=null?product.discount:""}%</p>
            <p className="size">Ölçü: M</p>
            <p>Rəng:{product!=null?product.productColor.name:""}</p>
            <p>Brend:{product!=null?product.brend.name:""}</p>
            <p>Mağaza:{product!=null?product.location.name:""}</p>
            <p>
              Endirim tarixi:{product!=null?formatDate(product.startDiscount):""}-
              {product!=null?formatDate(product.endDiscount):""}
            </p>
            <div className="amount d-flex w-100 mt-2 mb-2 ">
              <a onClick={() => handleDecrease(count)}>
                <i className="fas fa-minus"></i>
              </a>
              <h5>{count}</h5>
              <a onClick={() => handleIncrease(count)}>
                <i className="fas fa-plus"></i>
              </a>
            </div>
            <p>Сəmi:{product!=null?(product.price * count).toFixed(2):""}AZN</p>
            <div className="buttons-basket-back d-flex  my-4">
              <a
                onClick={product!=null?() => handleAddBasket(product, count):""}
                className="add-basket mr-3"
              >
                Səbətə at
              </a>
              <a className="go-back">Geriyə</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
