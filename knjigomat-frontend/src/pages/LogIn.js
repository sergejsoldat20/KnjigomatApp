import React from "react";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import authService from "../services/authService";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../css/LogIn.css";

export default function LogIn() {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/auth/login",
        values
      );
      const jwt = response.data.accessToken;
      localStorage.setItem("jwt", jwt);
      const config = {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      };
      const role = await axios.get(
        `http://localhost:9000/users/current-role`,
        config
      );
      localStorage.setItem("role", authService.setRole(role.data));
      message.success("Uspjesno ste se ulogovali");
      navigate("/home");
    } catch (error) {
      message.error("Niste se uspjesno ulogovali");
    }
  };

  return (
    <MDBContainer
      className="my-5 gradient-form"
      onFinish={onFinish}
      initialValues={{ remember: true }}
    >
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/Stack-books-isolated-3d-rendering/960x0.jpg?format=jpg&width=960"
                style={{ width: "185px" }}
                alt="logo"
              />
              <h2 className="mt-1 mb-5 pb-1">KNJIGOMAT</h2>
            </div>

            <p>Please login to your account</p>

            <Form
              name="normal_login"
              className="login-form col-md-12 text-center p-1"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                style={{
                  width: "100%",
                }}
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                style={{
                  width: "100%",
                }}
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button  mb-4 w-100"
                  // onClick={onFinish}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
            <div className="text-center pt-1 mb-5 pb-1">
              <Link
                type="button"
                className=" mb-4 w-100 btn btn-outline-primary"
                to="/home"
              >
                Nastavi kao gost
              </Link>
              <a className="text-muted" href="#!">
                Forgot password?
              </a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Nemate nalog?</p>

              <Link className="btn btn-outline-danger my-2" to={"/add-user"}>
                Kreiraj nalog
              </Link>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">We are more than just a online book shop</h4>
              <p className="small mb-0">
                „Onaj tko ne voli čitati nije pronašao pravu knjigu za sebe.” –
                J.K. Rowling
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
