import React from "react";
import { Button, Form, Input, message } from "antd";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

export default function ConfirmEmail() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    console.log(values.pin);
    const result = await authService.confirmEmail(values);
    console.log(result);
    if (result.data) {
      message.success("Uspjesno ste potvrdili Vas email");
      navigate("/");
    } else {
      message.error("Pin koji ste unijeli nije odgovarajuci");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Grid
      container
      item
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh" }}
    >
      <Form
        name="basic"
        style={{
          width: 300,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <label style={{ paddingBottom: 10 }}>
          Unesite pin za potvrdu email
        </label>

        <Form.Item label="PIN" name="pin">
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 5,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Potvrdi
          </Button>
        </Form.Item>
      </Form>
    </Grid>
  );
}
