import React from "react";
import { PropTypes } from "prop-types";
import { Box } from "@mui/material";
import { Avatar } from "antd";
import getAvatar from "../utils/getAvatar";
const ViewSingleComment = (props) => {
  const checkIfRight = () => {
    if (props.side === "right") return true;
    else return false;
  };
  return (
    <Box
      style={{
        width: 1000,
        height: 70,
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      {!checkIfRight() && (
        <a href={`/users/${props.userId}`}>
          <Avatar
            style={{ width: 70, height: 70 }}
            src={getAvatar(props.userGender)}
          />
        </a>
      )}
      <Box
        style={{
          width: 900,
          height: 70,
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        <a
          style={{
            textDecoration: "none",
            textAlign: checkIfRight() ? "right" : "left",
          }}
          href={`/users/${props.userId}`}
        >
          {props.username}
        </a>
        <a style={{ textAlign: checkIfRight() ? "right" : "left" }}>
          {props.text}
        </a>
      </Box>
      {checkIfRight() && (
        <a href={`/users/${props.userId}`}>
          <Avatar
            style={{ width: 70, height: 70 }}
            src={getAvatar(props.userGender)}
          />
        </a>
      )}
    </Box>
  );
};
ViewSingleComment.propTypes = {
  userId: PropTypes.number,
  username: PropTypes.string,
  text: PropTypes.string,
  userGender: PropTypes.string,
  side: PropTypes.string,
};
export default ViewSingleComment;
