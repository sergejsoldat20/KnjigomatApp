import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import userService from "../services/userService";
import { Card, Avatar } from "antd";
import getAvatar from "../utils/getAvatar";
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
  return (
    <Card style={{ textAlign: "left" }}>
      <Meta
        avatar={
          <Avatar
            style={{ height: 100, width: 100 }}
            src={getAvatar(user.gender)}
          />
        }
        title={<b style={{ fontSize: 23 }}>{user.username}</b>}
        style={{ paddingBottom: 20 }}
      />
      <p style={cardFont}>
        <b>Ime: </b>
        {user.firstName}
      </p>
      <p style={cardFont}>
        <b>Prezime: </b>
        {user.lastName}
      </p>
      <p style={cardFont}>
        <b>Email: </b>
        {user.email}
      </p>
      <p style={cardFont}>
        <b>Broj telefona: </b>
        {user.phoneNumber}
      </p>
    </Card>
  );
};
ViewUserInformation.propTypes = {
  id: PropTypes.number,
};
export default ViewUserInformation;
