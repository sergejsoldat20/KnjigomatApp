import React, { useState } from "react";
import { Input, Button, Row } from "antd";
import { PropTypes } from "prop-types";
import postService from "../services/postService";
export default function PostComment(props) {
  const [comment, setComment] = useState("");
  const { TextArea } = Input;
  const handlePostComment = () => {
    if (comment !== "") {
      const commentRequest = {
        text: comment,
      };
      postService.postCommentByPostId(props.postId, commentRequest);
    }
    setComment("");
    console.log("comment sent!");
  };
  return (
    <div style={{ display: "grid" }}>
      <TextArea
        rows={6}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Row style={{ alignItems: "end", paddingTop: 20 }}>
        <div style={{ width: 338 }}></div>
        <Button onClick={props.closeModal}>Otkaži</Button>
        <div style={{ width: 8 }}></div>
        <Button
          type="primary"
          style={{ float: "right" }}
          onClick={() => {
            handlePostComment();
            props.closeModal();
          }}
        >
          OK
        </Button>
      </Row>
    </div>
  );
}

PostComment.propTypes = {
  postId: PropTypes.number,
  closeModal: PropTypes.func,
};
