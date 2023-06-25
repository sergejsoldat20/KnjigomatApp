/* eslint-disable no-unused-vars */
import axios from "axios";
import authService from "../services/authService";
import {
  Button,
  Radio,
  Form,
  Input,
  DatePicker,
  message,
  Typography,
  Popconfirm,
} from "antd";
import { MDBContainer, MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import "../App.css";
export default function AddPatient() {
  const navigate = useNavigate();
  const [user, addUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
  });
  const {
    firstName,
    lastName,
    gender,
    email,
    username,
    password,
    phoneNumber,
  } = user;
  const onInputChange = (e) => {
    addUser({ ...user, [e.target.name]: e.target.value }); // nastavlja da dodaje nove objekte
    console.log(e.target.value);
  };
  const onFinish = async (e) => {
    for (const key in user) {
      if (user[key] === "") {
        message.error("Potrebno je popuniti sva polja", 5);
        return;
      }
    }
    authService.register(user).then((result) => {
      if (result.status === 200) {
        message.success("Uspjesno ste se registrovali.");
        navigate("/confirm-email");
      } else {
        message.error("Doslo je do greske pri registraciji!");
      }
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <Grid alignItems="center" justifyContent="center">
            <div className="container">
              <div className="rom ">
                <div className="col-md-12 offset-md-0 border rounder p-4 mt-2 shadow  ">
                  <h2 className="text-center m-4">KREIRAJ NALOG</h2>

                  <div className="card" style={{ backgroundColor: "#F5F5F5" }}>
                    <div className="card-header">
                      <Grid
                        container
                        spacing={0}
                        direction="column"
                        paddingRight={0}
                      >
                        <Form
                          name="basic"
                          labelCol={{
                            span: 7,
                          }}
                          wrapperCol={{
                            span: 12,
                          }}
                          initialValues={{
                            remember: true,
                          }}
                          labelAlign="center"
                          onFinish={(e) => onFinish(e)}
                          onFinishFailed={onFinishFailed}
                          autoComplete="off"
                          requiredMark={false}
                        >
                          <Form.Item
                            label="Ime: "
                            rules={[
                              {
                                required: true,
                                message: "Treba popuniti sva polja",
                              },
                            ]}
                          >
                            <Input
                              name="firstName"
                              value={firstName}
                              onChange={(e) => onInputChange(e)}
                            />
                          </Form.Item>
                          <Form.Item
                            label="Prezime: "
                            rules={[
                              {
                                required: true,
                                message: "Treba popuniti sva polja",
                              },
                            ]}
                          >
                            <Input
                              name="lastName"
                              value={lastName}
                              onChange={(e) => onInputChange(e)}
                            />
                          </Form.Item>
                          <Form.Item
                            label="Email:"
                            rules={[
                              {
                                required: true,
                                message: "Treba popuniti sva polja",
                              },
                            ]}
                          >
                            <Input
                              name="email"
                              value={email}
                              onChange={(e) => onInputChange(e)}
                            />
                          </Form.Item>
                          <Form.Item
                            label="Username: "
                            rules={[
                              {
                                required: true,
                                message: "Treba popuniti sva polja",
                              },
                            ]}
                          >
                            <Input
                              name="username"
                              value={username}
                              onChange={(e) => onInputChange(e)}
                            />
                          </Form.Item>
                          {/* <Form.Item
                            label="Uloga: "
                            rules={[
                              {
                                required: true,
                                message: "Treba popuniti sva polja",
                              },
                            ]}
                          >
                            <Input
                              name="role"
                              value={role}
                              onChange={(e) => onInputChange(e)}
                            />
                          </Form.Item> */}
                          <Form.Item
                            label="Password: "
                            rules={[
                              {
                                required: true,
                                message: "Treba popuniti sva polja",
                              },
                            ]}
                          >
                            <Input
                              name="password"
                              type="password"
                              value={password}
                              onChange={(e) => onInputChange(e)}
                            />
                          </Form.Item>
                          <Form.Item
                            label="Pol"
                            rules={[
                              {
                                required: true,
                                message: "Treba popuniti sva polja",
                              },
                            ]}
                          >
                            <Radio.Group
                              name="gender"
                              value={gender}
                              onChange={(e) => onInputChange(e)}
                            >
                              <Radio value={"M"} style={{ fontSize: 14 }}>
                                Musko
                              </Radio>
                              <Radio value={"Z"} style={{ fontSize: 14 }}>
                                Zensko
                              </Radio>
                            </Radio.Group>
                          </Form.Item>

                          <Form.Item
                            label="Telefon"
                            rules={[
                              {
                                required: true,
                                message: "Treba popuniti sva polja",
                              },
                            ]}
                          >
                            <Input
                              name="phoneNumber"
                              value={phoneNumber}
                              onChange={(e) => onInputChange(e)}
                            />
                          </Form.Item>

                          <Form.Item>
                            <Button
                              type="primary"
                              className="btn btn-primary top-50 start-50"
                              onClick={onFinish}
                            >
                              Registruj
                            </Button>
                          </Form.Item>
                        </Form>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </MDBCol>
        <MDBCol col="6" className="mb-5">
          <MDBRipple rippleTag="a">
            <div className="d-flex flex-column  justify-content-center h-100 mb-4">
              <img
                src="https://img.freepik.com/premium-photo/front-view-open-books-with-white-background_23-2148255839.jpg?w=2000"
                className="img-fluid rounded"
                alt="example"
              />
            </div>
          </MDBRipple>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
