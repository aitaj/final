import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 230) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  window.addEventListener("scroll", scrollFunc);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
    // console.log("dddddc")
  };

  return (
    <>
      <div id="footer" className='mt-5'>
        {" "}
        <a
          class={isActive ? "sticky-btn active" : "sticky-btn hide"}
          onClick={scrollToTop}
        >
          <i class="fas fa-chevron-up"></i>
        </a>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              {" "}
              <ul className="company-info">
                <li>
                  <a>
                    <h5>Şirkət haqqında</h5>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Haqqımızda</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Məxfilik siyasəti</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Fürsətlər</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Vakansiyalar</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Əlaqə </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              {" "}
              <ul className="for-customers">
                <li>
                  <a>
                    <h5>Müştərilər üçün</h5>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Geriqaytarma siyasəti</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>FAQ</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Brendlər</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Çatdırılma qaydaları</p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Ödəniş metodları </p>
                  </a>
                </li>
                <li>
                  <a>
                    <p>Şəxsi kabinet </p>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              {" "}
              <a>
                <h5 className="mr-5">Bizi izləyin</h5>
              </a>
              <ul className="social mt-2 d-flex">
                <li>
                  <a>
                    <i class="fab mr-3 fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab mr-3 fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab mr-3 fa-facebook-messenger"></i>
                  </a>
                </li>
                <li>
                  <a>
                    <i class="fab mr-3 fa-telegram-plane"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              {" "}
              <div className="connection">
                <a className="phone-wrapper d-flex  align-items-center">
                  <i className="fas fa-phone mr-2"></i>
                  <h4>333</h4>
                </a>
                <a className="email-wrapper d-flex align-items-center my-2">
                  <i class="fas fa-envelope-square mr-2"></i>
                  <span>logoemail@gmail.com</span>
                </a>
                <a className="subscribe">Endirim xəbərlərinə abunə ol</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
