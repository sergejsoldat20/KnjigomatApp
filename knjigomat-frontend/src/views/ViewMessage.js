/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import postService from "../services/postService";
import { PropTypes } from "prop-types";
import { Box, Grid } from "@mui/material";
import { Card, Image, Divider, Col, Row, Avatar, List } from "antd";
import { Link, useParams } from "react-router-dom";
import { fontSize } from "@mui/system";
const { Meta } = Card;
const ViewComments = (props) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    loadComments();
    console.log("useEffect(ViewComments)");
  }, []);
  const loadComments = () => {
    postService.getCommentsByPostId(props.id).then((result) => {
      setComments(result.data);
    });
  };
  const data = comments.map((comment) => {
    return {
      title: comment.userUsername,
      id: comment.userId,
      label: comment.text,
    };
  });
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      style={{ flex: "right" }}
      renderItem={(item, index) => (
        <List.Item style={{ flex: "right", flexDirection: "row-reverse" }}>
          <List.Item.Meta
            avatar={
              <a href="/users/102">
                <Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />
              </a>
            }
            title={
              <a>
                {item.title} {item.id}
              </a>
            }
            description={`${item.label}`}
          />
        </List.Item>
      )}
    />
  );
};
ViewComments.propTypes = {
  id: PropTypes.number,
};
export default ViewComments;
