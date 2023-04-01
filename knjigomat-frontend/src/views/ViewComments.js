import React, { useEffect, useState } from "react";
import postService from "../services/postService";
import { PropTypes } from "prop-types";
import { Row, List } from "antd";
import ViewSingleComment from "./ViewSingleComment";
const ViewComments = (props) => {
  const [comments, setComments] = useState([]);
  const [ownerId, setOwnerId] = useState(0);
  useEffect(() => {
    loadComments();
    loadOwnerId();
    console.log("useEffect(ViewComments)");
  }, []);
  const loadComments = () => {
    postService.getCommentsByPostId(props.id).then((result) => {
      setComments(result.data);
    });
  };
  const loadOwnerId = () => {
    postService.getUserIdByPostId(props.id).then((result) => {
      setOwnerId(result.data);
    });
  };
  const getSide = (id) => {
    if (id === ownerId) return "right";
    else return "left";
  };
  const data = comments.map((comment) => {
    return {
      username: comment.userUsername,
      userId: comment.userId,
      text: comment.text,
      gender: comment.userGender,
    };
  });
  return (
    <Row
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        style={{ width: 1000 }}
        renderItem={(item, index) => (
          <List.Item
            style={{
              flex: "right",
              flexDirection: "row-reverse",
              backgroundColor: ownerId === item.userId ? "#cddbfa" : "#e8eefa",
              borderRadius: 20,
            }}
          >
            <ViewSingleComment
              userId={item.userId}
              username={item.username}
              userGender={item.gender}
              text={item.text}
              side={getSide(item.userId)}
            />
          </List.Item>
        )}
      />
    </Row>
  );
};
ViewComments.propTypes = {
  id: PropTypes.number,
};
export default ViewComments;
