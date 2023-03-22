/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import postService from "../services/postService";
import { PropTypes } from "prop-types";
import { Box } from "@mui/material";

import { Card, Image } from "antd";
import { FileImageFilled } from "@ant-design/icons";

const { Meta } = Card;
const ViewMiniPost = (props) => {
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
  });
  const [firstPhoto, setFirstPhoto] = useState({
    id: 0,
    photoUrl: "",
    postId: 0,
  });
  useEffect(() => {
    loadPost();
    loadFirstPhoto();
    console.log("useEffect(ViewMiniPost)");
  }, []);
  const loadPost = () => {
    postService.getPostById(props.id).then((result) => {
      setPost(result.data);
    });
  };
  const loadFirstPhoto = () => {
    postService.getFirstPhotoByPostId(post.id).then((result) => {
      setFirstPhoto(result.data);
    });
  };
  // const [imageLoaded, setImageLoaded] = useState(false);

  // const handleImageLoad = () => {
  //   setImageLoaded(true);
  // };
  return (
    <Card style={{ width: 280 }}>
      <Image
        style={{ borderRadius: 10 }}
        alt="example"
        width={200}
        height={200}
        src={firstPhoto.photoUrl}
      />

      <Meta
        title={post.name}
        description={<b style={{ color: "#595E60" }}>{`${post.price} KM`}</b>}
        style={{ whiteSpace: "pre-line", paddingTop: 5 }}
      />
    </Card>
  );
};
ViewMiniPost.propTypes = {
  id: PropTypes.number,
};
export default ViewMiniPost;
