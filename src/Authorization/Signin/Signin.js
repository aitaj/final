import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "./actions";
const Signin = ({ closeModal }) => {
  const [show, setShow] = useState(true);
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
  const handleClose = () => {
    setShow(false);
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
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Modal show={show} onHide={handleClose} className="signin">
              <Modal.Header closeButton>
                <Modal.Title>Hesaba daxil ol</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <span> Hesabınız yoxdur?</span>
                <Link to="/register" className="redirect" onClick={closeModal}>
                  Qeydiyyatdan keç
                </Link>
                <Form onSubmit={handleSubmit}>
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

                  {userInfo.error && (
                    <p className="text-danger">{userInfo.error}</p>
                  )}
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleSubmit} className="enter">
                  Daxil ol
                </Button>
                <Button className="reject" onClick={closeModal}>
                  İmtina et
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Signin;
