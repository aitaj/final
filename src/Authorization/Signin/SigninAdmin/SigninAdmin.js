import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../actions";
const SigninAdmin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  let location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const handleInputChange = (e, field) => {
    setUser({ ...user, [field]: e.target.value });
  };

  let { from } = location.state || {
    from: { pathname: "/" },
  };
  useEffect(() => {
    if (localStorage.getItem("userInfo") !== null) {
      history.push(from);
    }
  }, [userInfo, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <section id="admin-signin">
        {" "}
        <div className="container">
          <div className="row ">
            <div className="col-md-5 mt-5">
              <h3 className="mt-4">
                Login to <strong>Logo</strong>
              </h3>
              <form w-100 className="mt-4">
                <div className="form-group mt-3">
                  <input
                    type="email"
                    value={user.username}
                    onChange={(e) => handleInputChange(e, "username")}
                    className="form-control"
                    placeholder="E-mailinizi daxil edin"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    value={user.password}
                    onChange={(e) => handleInputChange(e, "password")}
                    className="form-control"
                    placeholder="Şifrənizi daxil edin"
                  />
                </div>

                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-primary"
                  onClick={handleSubmit}
                />
              </form>
            </div>
            <div className="col-md-7">
              <div className="photo-admin"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninAdmin;
