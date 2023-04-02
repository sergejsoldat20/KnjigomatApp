import { Button, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import CheckIfAdmin from "../utils/CheckIfAdmin";
import CheckIfAuthorized from "../utils/CheckIfAuthorized";
const { Search } = Input;
export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    navigate("/");
  };
  const login = () => {
    navigate("/");
  };
  const onSearch = (value) => {
    console.log(value);
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light  "
      style={{
        fontSize: 25,
        paddingRight: 30,
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
          {CheckIfAuthorized() && (
            <li className="nav-item active" style={{ width: 100 }}>
              <a
                className="nav-link"
                style={{ paddingLeft: "2rem" }}
                href="/upload-post"
              >
                Objavi
              </a>
            </li>
          )}
          {CheckIfAuthorized() && (
            <li className="nav-item active">
              <a
                className="nav-link"
                style={{ paddingLeft: "2rem" }}
                href="/chat"
              >
                Chat
              </a>
            </li>
          )}
          {CheckIfAuthorized() && (
            <li className="nav-item active">
              <a
                className="nav-link"
                style={{ paddingLeft: "2rem" }}
                href={`/users/${localStorage.getItem("id")}`}
              >
                Profil
              </a>
            </li>
          )}
          {CheckIfAdmin() && (
            <li className="nav-item active">
              <a
                className="nav-link"
                style={{ paddingLeft: "2rem" }}
                href={`/administration-users`}
              >
                Administracija
              </a>
            </li>
          )}
        </ul>
      </div>
      <Search
        placeholder="Pretraga"
        allowClear
        onSearch={onSearch}
        size="large"
        style={{
          width: 500,
          float: "right",
        }}
      />
      <div style={{ width: 100 }}></div>
      <Button
        type="text"
        style={{
          float: "right",
          fontSize: 20,
          height: 50,
          width: 120,
          borderRadius: 30,
        }}
        onClick={() => {
          CheckIfAuthorized() ? logout() : login();
        }}
      >
        {CheckIfAuthorized() ? "Odjavi se" : "Prijavi se"}
      </Button>
    </nav>
  );
}
