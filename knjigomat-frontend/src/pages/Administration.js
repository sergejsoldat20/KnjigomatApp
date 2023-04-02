/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router";
import "../static/Administration.module.css";
export default function Administration() {
  const navigate = useNavigate();
  const { Meta } = Card;
  return (
    <div className="wrapper">
      <div className="cardsWrapper">
        <Card
          key="one"
          className="homeCard"
          hoverable
          style={{ width: 300, marginTop: 16 }}
          onClick={(event) => {
            navigate("/home");
          }}
        >
          <Meta
            avatar={
              <Avatar src={process.env.PUBLIC_URL + "/avatars/avatar_1.jpg"} />
            }
            title="Korisnici"
            description="Lista korisnika"
          />
        </Card>
        <Card
          key="two"
          className="homeCard"
          hoverable
          style={{ width: 300, marginTop: 16 }}
          onClick={(event) => {
            navigate("/home");
          }}
        >
          <Meta
            avatar={
              <Avatar src={process.env.PUBLIC_URL + "/avatars/avatar_2.jpg"} />
            }
            title="Prijave"
            description="Lista prijava"
          />
        </Card>
      </div>
    </div>
  );
}
