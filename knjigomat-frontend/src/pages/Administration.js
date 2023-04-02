/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router";
import "../static/Administration.css";
export default function Administration() {
  const navigate = useNavigate();
  const { Meta } = Card;
  return (
    <div id="administrationContainer" className="wrapper">
      <div id="administrationContainer" className="cardsWrapper">
        <Card
          id="administrationContainer"
          key="one"
          className="homeCard"
          hoverable
          style={{ width: 300, marginTop: 16 }}
          onClick={(event) => {
            navigate("/administration-users");
          }}
        >
          <Meta
            avatar={
              <Avatar
                src={process.env.PUBLIC_URL + "/avatars/users_icon.png"}
              />
            }
            title="Korisnici"
            description="Lista korisnika"
          />
        </Card>
        <Card
          id="administrationContainer"
          key="two"
          className="homeCard"
          hoverable
          style={{ width: 300, marginTop: 16 }}
          onClick={(event) => {
            navigate("/administration-reports");
          }}
        >
          <Meta
            avatar={
              <Avatar
                src={process.env.PUBLIC_URL + "/avatars/reports_icon.png"}
              />
            }
            title="Prijave"
            description="Lista prijava"
          />
        </Card>
      </div>
    </div>
  );
}
