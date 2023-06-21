import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import userService from "../services/userService";
import { Card, Avatar } from "antd";
import getAvatar from "../utils/getAvatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const ViewUserInformation = (props) => {
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    username: "",
    password: "",
    role: "",
    accountConfirmed: false,
    phoneNumber: "",
  });
  const { Meta } = Card;
  const cardFont = { fontSize: 18 };
  useEffect(() => {
    loadUser();
    console.log(user + " asdads");
  }, []);

  const loadUser = () => {
    userService.getUserById(props.id).then((result) => {
      setUser(result.data);
      console.log(result.data);
    });
  };
  const cardStyle = {
    backgroundColor: "#F5F5F5",
    padding: "20px",
    borderRadius: "8px",
  };
  const iconStyle = {
    marginRight: "12px", // Adjust the margin value as per your preference
  };
  return (
    <div style={cardStyle}>
      <Meta
        avatar={
          <Avatar
            style={{ height: 100, width: 100 }}
            src={getAvatar(user.gender)}
          />
        }
        title={
          <b
            style={{
              fontSize: 23,
              fontFamily: "Arial, sans-serif",
              fontStyle: "italic",
            }}
          >
            {user.username}
          </b>
        }
        style={{ paddingBottom: 20 }}
      />

      <p>
        <AccountCircleIcon style={iconStyle} />
        {user.firstName} {user.lastName}
      </p>

      <p style={cardFont}>
        <EmailIcon style={iconStyle} />
        {user.email}
      </p>
      <p style={cardFont}>
        <PhoneIcon style={iconStyle} />
        {user.phoneNumber}
      </p>
    </div>
  );
};
ViewUserInformation.propTypes = {
  id: PropTypes.number,
};
export default ViewUserInformation;
