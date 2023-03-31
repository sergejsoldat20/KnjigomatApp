/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Select, message } from "antd";
import postService from "../services/postService";
import { Grid } from "@mui/material";
import userService from "../services/userService";
import { useNavigate } from "react-router";
import UploadPhoto from "../pages/UploadPhoto";
export default function UploadPost() {
  const [currentUser, setCurrentUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    description: "",
    price: 0,
    authorName: "",
    createdTime: "",
    state: "",
    categoryId: 0,
    userId: 0,
  });

  useEffect(() => {
    loadCurrentUser();
    loadCategories();
  }, []);

  const loadCurrentUser = () => {
    userService.getCurrentUser().then((result) => {
      setCurrentUser(result.data);
    });
  };

  const loadCategories = () => {
    postService.getAllCategories().then((result) => {
      console.log(result.data);
      setCategories(result.data);
    });
  };

  const states = ["Novo", "Staro"];

  const {
    name,
    description,
    price,
    createdTime,
    authorName,
    state,
    categoryId,
    userId,
  } = post;

  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value }); // nastavlja da dodaje nove objekte
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = () => {
    console.log(post);
    post.userId = currentUser.id;
    postService.insertPost(post).then((result) => {
      if (result.status === 201) {
        message.success("Uspjesno ste dodali novu objavu");
        navigate(`/upload-photo/${result.data.id}`);
      }
    });
  };
  return (
    <Grid alignItems="center" justifyContent="center" className="text-center">
      <div className="container">
        <div className="rom">
          <div className="col-md-6 offset-md-3 border rounder p-4 mt-2 shadow">
            <h2 className="text-center m-4">Objava posta:</h2>

            <div className="card">
              <div className="card-header">
                <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  paddingRight={12}
                >
                  <Form
                    name="basic"
                    labelCol={{
                      span: 10,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={(e) => onFinish(e)}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    requiredMark={false}
                  >
                    <Form.Item label="Naziv: ">
                      <Input
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Item>
                    <Form.Item label="Opis: ">
                      <Input
                        name="description"
                        value={description}
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Item>
                    <Form.Item label="Cijena: ">
                      <Input
                        name="price"
                        value={price}
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Item>
                    <Form.Item label="Naziv autora :">
                      <Input
                        name="authorName"
                        value={authorName}
                        onChange={(e) => onInputChange(e)}
                      />
                    </Form.Item>
                    <Form.Item label="Stanje :">
                      <Select
                        onChange={(selectedState) => {
                          post.state = selectedState;
                        }}
                      >
                        {states.map((state, index) => (
                          <Select.Option key={index} value={state}>
                            {state}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item label="Kategorija :">
                      <Select
                        onChange={(selectedCategory) => {
                          post.categoryId = selectedCategory;
                        }}
                      >
                        {categories.map((category, index) => (
                          <Select.Option key={index} value={category.id}>
                            {category.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        offset: 8,
                        span: 16,
                      }}
                    >
                      <Button type="primary" onClick={onFinish}>
                        Dalje
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
  );
}
