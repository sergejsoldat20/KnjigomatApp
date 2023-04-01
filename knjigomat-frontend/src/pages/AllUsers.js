/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Radio, Space, Table, Tag } from "antd";
import { Grid, Button } from "@mui/material";
import userService from "../services/userService";
export default function AllUsers() {
  const [users, setUsers] = useState([]);
  const [adminId, setAdminId] = useState(0);
  const [deletedId, setDeletedId] = useState(0);

  useEffect(() => {
    loadUsers();
  }, [deletedId, adminId]);

  const loadUsers = () => {
    userService.getAllUsers().then((result) => {
      console.log(users);
      setUsers(result.data);
    });
  };

  const deleteUser = (id) => {
    userService.deleteUser(id).then(() => {
      loadUsers();
    });
  };

  const makeAdmin = (id) => {
    userService.makeAdmin(id).then(() => {
      loadUsers();
    });
  };

  const columns = [
    {
      title: "Ime",
      dataIndex: "firstName",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Prezime",
      dataIndex: "lastName",
      key: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "id",
    },
    {
      title: "Uloga",
      key: "role",
      dataIndex: "role",
      render: (role) => {
        const color = role === "ADMIN" ? "volcano" : "geekblue";
        return (
          <span>
            <Tag color={color} key={role}>
              {role}
            </Tag>
          </span>
        );
      },
    },
    {
      title: "Action",
      key: "id",
      render: (user) => (
        <Space size="middle">
          <Button type="primary" onClick={() => makeAdmin(user.id)}>
            Admin
          </Button>
          <Button type="primary" onClick={() => deleteUser(user.id)}>
            Obrisi
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Grid alignItems="center" justifyContent="center" className="text-center">
      <div className="container">
        <div className="rom">
          <h2 className="text-center m-4">Korisnici</h2>

          <div className="card">
            <div className="card-header">
              <Table columns={columns} dataSource={users} />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
