import React, { useEffect, useState } from "react";
import postService from "../services/postService";
import { PropTypes } from "prop-types";
import { Card, Image } from "antd";
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
    postService.getFirstPhotoByPostId(props.id).then((result) => {
      setFirstPhoto(result.data);
    });
  };
  return (
    <a href={`/posts/${props.id}`} style={{ textDecoration: "none" }}>
      <Card
        style={{
          width: 280,
          boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.0)",
          transition: "box-shadow 0.3s ease-in-out",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.boxShadow = "0px 5px 10px rgba(0, 0, 0, 0.3)")
        }
        onMouseOut={(e) =>
          (e.currentTarget.style.boxShadow = "0px 1px 5px rgba(0, 0, 0, 0.0)")
        }
      >
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
    </a>
  );
};
ViewMiniPost.propTypes = {
  id: PropTypes.number,
};
export default ViewMiniPost;
