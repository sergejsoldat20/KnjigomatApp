import { Button, Input } from "antd";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import userService from "../services/userService";
const { Search } = Input;
export default function Navbar(props) {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(0);

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("filterValues");
    navigate("/");
  };
  const login = () => {
    navigate("/");
  };
  const onSearch = (value) => {
    navigate("/home");
    props.onSearchProp(value);
  };

  useEffect(() => {
    loadUserId();
  }, []);
  const loadUserId = () => {
    userService.getCurrentUserId().then((result) => {
      setUserId(result.data);
    });
  };
  const setOdjaviPrijavi = () => {
    if (authService.CheckIfAuthorized) {
      loadUserId();
      return true;
    } else {
      loadUserId();
      return false;
    }
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
        <ul
          className="navbar-nav"
          style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
        >
          <li className="nav-item active">
            <a className="nav-link" href="/home">
              Početna
            </a>
          </li>
          {authService.CheckIfAuthorized() && (
            <li className="nav-item active">
              <a
                className="nav-link"
                style={{ paddingInline: "1rem" }}
                href="/upload-post"
              >
                Objavi
              </a>
            </li>
          )}
          {authService.CheckIfAuthorized() && (
            <li className="nav-item active">
              <a
                className="nav-link"
                style={{ paddingInline: "1rem" }}
                href="/chat"
              >
                Chat
              </a>
            </li>
          )}
          {authService.CheckIfAuthorized() && (
            <li className="nav-item active">
              <a
                className="nav-link"
                style={{ paddingInline: "1rem" }}
                href={`/users/${userId}`}
              >
                Profil
              </a>
            </li>
          )}
          {authService.CheckIfAdmin() && (
            <li className="nav-item active">
              <a
                className="nav-link"
                style={{ paddingInline: "1rem" }}
                href={"/administration"}
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
      <div style={{ width: 60 }}></div>
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
          authService.CheckIfAuthorized() ? logout() : login();
        }}
      >
        {setOdjaviPrijavi() ? "Odjavi se" : "Prijavi se"}
      </Button>
    </nav>
  );
}
Navbar.propTypes = {
  onSearchProp: PropTypes.func,
};
