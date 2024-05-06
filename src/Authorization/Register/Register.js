import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, Redirect } from "react-router-dom";
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleInputChange = (e, field) => {
    setUser({ ...user, [field]: e.target.value });
  };

  const info = useSelector((state) => state.userInfo);
  console.log(user);
  // useEffect(() => {
  //   if (Object.keys(info).length > 0) {
  //     history.push("/");
  //   }
  // }, [info, history]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://localhost:44349/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    setRedirect(true);
  };
  if (redirect) {
   return <Redirect to="/login" />;
  }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="register-form">
              <h3>Qeydiyyat</h3>
              <p className="mt-3 mb-3">
                Artıq qeydiyyatdan keçmisinizsə buradan{" "}
                <Link to="/signin" className="redirect">
                  Daxil olun
                </Link>
              </p>
              {/* {info.error && <p className="text-danger">{info.error}</p>} */}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="emailHelp"
                    placeholder="İstifadəçi adınızı daxil edin"
                    onChange={(e) => handleInputChange(e, "name")}
                    value={user.name}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Emailinizi daxil edin"
                    onChange={(e) => handleInputChange(e, "email")}
                    value={user.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Şifrənizi daxil edin"
                    onChange={(e) => handleInputChange(e, "password")}
                    value={user.password}
                  />
                </div>
                <button type="submit" className="enter">
                  Qeydiyyatdan keç
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
