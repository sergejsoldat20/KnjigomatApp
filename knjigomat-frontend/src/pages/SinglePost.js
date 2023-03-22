/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import postService from "../services/postService";
import { PropTypes } from "prop-types";
import { Box, Grid } from "@mui/material";

import { Card, Image, Tabs, Col, Row } from "antd";
import { FileImageFilled } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import ViewPost from "../views/ViewPost";
import ViewComments from "../views/ViewComments";

const { Meta } = Card;
export default function SinglePost() {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  useEffect(() => {
    console.log("useEffect(SinglePost)");
  }, []);

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Oglas",
      children: <ViewPost id={postId} />,
    },
    {
      key: "2",
      label: `Pitanja`,
      children: <ViewComments id={postId} />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      style={{ paddingLeft: 30 }}
      type="card"
      size="large"
    />
  );
}
