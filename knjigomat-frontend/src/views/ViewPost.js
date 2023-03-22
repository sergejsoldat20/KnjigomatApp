/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import postService from "../services/postService";
import { PropTypes } from "prop-types";
import { Box, Grid } from "@mui/material";
import { Card, Image, Divider, Col, Row } from "antd";
import { Link, useParams } from "react-router-dom";
import getAvatar from "../utils/getAvatar";
const { Meta } = Card;
const ViewPost = (props) => {
  const [post, setPost] = useState({
    id: 0,
    name: "",
    description: "",
    price: 0,
    authorName: "",
    createdTime: "",
    deleted: false,
    state: "",
    categoryName: "",
    userId: 0,
    userUsername: "",
    userGender: "",
  });
  const [firstPhoto, setFirstPhoto] = useState({
    id: 0,
    photoUrl: "",
    postId: 0,
  });
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    loadPost();
    loadFirstPhoto();
    loadPhotos();
    console.log("useEffect(ViewPost)");
    console.log("URL:" + firstPhoto.photoUrl);
  }, []);
  const loadPost = () => {
    postService.getPostById(props.id).then((result) => {
      setPost(result.data);
    });
  };
  const loadFirstPhoto = () => {
    postService.getFirstPhotoByPostId(props.id).then((result) => {
      setFirstPhoto(result.data);
    });
  };
  const loadPhotos = async () => {
    await postService.getPhotosByPostId(props.id).then((result) => {
      setPhotos(result.data);
    });
  };
  const avatars = [
    "https://res.cloudinary.com/dmoekbwh0/image/upload/v1679492161/qtykickul5l9qgbr9hxl.png",
    "https://res.cloudinary.com/dmoekbwh0/image/upload/v1679493587/signal-2023-03-22-145826_003_pborwy.png",
  ];
  return (
    <Row>
      <Col span={12}>
        <Card style={{ minHeight: 570 }}>
          <Image
            style={{ borderRadius: 10 }}
            alt="example"
            width={450}
            height={450}
            src={firstPhoto.photoUrl}
          />

          <Meta
            title={<b style={{ fontSize: 20 }}>{`${post.name}`}</b>}
            description={
              <b
                style={{ color: "#595E60", fontSize: 20 }}
              >{`${post.price} KM`}</b>
            }
            style={{ whiteSpace: "pre-line", paddingTop: 5 }}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card
          style={{
            textAlign: "left",
            fontSize: 20,
            borderTop: 0,
            borderBottom: 0,
            minHeight: 350,
          }}
        >
          <p>
            <b>Autor :</b> {post.authorName}
          </p>
          <p>
            <b>Kategorija :</b> {post.categoryName}
          </p>
          <p>
            <b>Stanje :</b> {post.state}
          </p>
          <p>
            <b>Datum :</b> {post.createdTime.split("T")[0]}
          </p>
          <p>
            <b>Objavio :</b> {post.userUsername}
          </p>
          <p>
            <b>Opis :</b> {post.description}
          </p>
        </Card>
        <Divider style={{ fontSize: 20 }}>Profil</Divider>
        <Card
          style={{
            textAlign: "left",
            fontSize: 20,
            minHeight: 156,
            borderTop: 0,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
            }}
          >
            <a href={`/user/${post.userId}`}>
              <img
                src={avatars[getAvatar(post.userGender)]}
                alt="Not Found"
                height={100}
                width={100}
                style={{ borderRadius: 50 }}
              />
            </a>
            <Link
              to={`/user/${post.userId}`}
              style={{ textDecoration: "none" }}
            >
              {post.userUsername}
            </Link>
          </Box>
        </Card>
      </Col>
    </Row>
  );
};
ViewPost.propTypes = {
  id: PropTypes.number,
};
export default ViewPost;
