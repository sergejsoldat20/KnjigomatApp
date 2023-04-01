import { Button } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import Navbar from "react-bootstrap/Navbar";
// import CheckIfUser from "../utils/CheckIfUser";

export default function Navbar() {
  const navigate = useNavigate();

  // const checkIfAuthorized = () => {
  //   const token = localStorage.getItem("jwt");
  //   if (token) return true;
  //   else return false;
  // };

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light  "
      style={{
        fontSize: 25,
        // background: " #D1D1D1",
        // margin: "15px",
        // padding: "12px",
      }}
    >
      <a className="navbar-brand">
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/Stack-books-isolated-3d-rendering/960x0.jpg?format=jpg&width=960"
          width="50"
          height="40"
          alt=""
        />
      </a>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav" style={{ paddingLeft: "3rem" }}>
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Početna
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{ paddingLeft: "2rem" }}
              href="/upload-post"
            >
              Dodaj objavu
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{ paddingLeft: "2rem" }}
              href="/chat"
            >
              Chat
            </a>
          </li>
          <li className="nav-item active">
            <a
              className="nav-link"
              style={{ paddingLeft: "2rem" }}
              href="/profile"
            >
              Profil
            </a>
          </li>
          {localStorage.getItem("role") === "ADMIN" ? (
            <li className="nav-item active">
              <a
                className="nav-link"
                style={{ paddingLeft: "2rem" }}
                href="/administration-users"
              >
                Administracija
              </a>
            </li>
          ) : (
            ""
          )}
        </ul>
        <ul className="navbar-nav" style={{ paddingLeft: "15rem" }}>
          <li className="nav-item active" style={{ paddingLeft: "4rem" }}>
            <Link className="btn btn-outline-info" to={"/"}>
              Prijavi se
            </Link>
          </li>
          <li className="nav-item active" style={{ paddingLeft: "1rem" }}>
            <Button className="btn btn-outline-danger mx-3" onClick={logout}>
              Odjavi se
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
