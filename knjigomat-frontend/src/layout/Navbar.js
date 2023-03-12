/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import CheckIfAdmin from "../utils/CheckIfAdmin";
export default function Navbar() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const checkIfAuthorized = () => {
    const token = localStorage.getItem("jwt");
    if (token) return true;
    else return false;
  };

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");
    navigate("/");
  };
  const guestItems = [
    {
      label: <a style={{ textDecoration: "none" }}>LIS</a>,
      key: "home",
      style: {
        color: "blue",
        fontFamily: "Sans-Serif",
        fontStyle: "italic",
        float: "left",
        fontSize: 35,
        textDecoration: "none",
      },
    },
  ];
  const userItems = [
    {
      label: <a style={{ textDecoration: "none" }}>LIS</a>,
      key: "home",
      style: {
        color: "blue",
        fontFamily: "Sans-Serif",
        fontStyle: "italic",
        float: "left",
        fontSize: 35,
        textDecoration: "none",
      },
    },
    {
      label: "Pacijenti",
      key: "submenu:1",
      style: { float: "left" },
      children: [
        {
          label: <a style={{ textDecoration: "none" }}>Dodaj</a>,
          key: "setting:1",
        },
        {
          label: <a style={{ textDecoration: "none" }}>Pregled</a>,
          key: "setting:2",
        },
      ],
    },
    {
      label: "Nalazi",
      key: "submenu:2",
      style: { float: "left" },
      children: [
        {
          label: <a style={{ textDecoration: "none" }}>Dodaj</a>,
          key: "setting:3",
        },
        {
          label: <a style={{ textDecoration: "none" }}>Pregled</a>,
          key: "setting:4",
        },
      ],
    },
    {
      label: <a style={{ textDecoration: "none" }}>Profil</a>,
      key: "submenu:3",
      style: { float: "left" },
    },
    {
      key: "submenu:4",
      style: { float: "right" },
      icon: <MenuOutlined />,
      children: [
        CheckIfAdmin() && {
          label: <a style={{ textDecoration: "none" }}>Dodaj korisnika</a>,
          key: "setting:5",
        },
        CheckIfAdmin() && {
          label: <a style={{ textDecoration: "none" }}>Pregled korisnika</a>,
          key: "setting:6",
        },
        {
          label: (
            <a onClick={logout} style={{ textDecoration: "none" }}>
              Log out
            </a>
          ),
          key: "setting:7",
        },
      ],
    },
  ];
  //   const navbarItems = checkIfAuthorized() ? userItems : guestItems;
  const navbarItems = userItems;

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={navbarItems}
      style={{
        display: "block",
        fontSize: 25,
        background: " #D1D1D1",
        opacity: "0.8",
        margin: "20px",
        padding: "12px",
      }}
    />
  );
}
