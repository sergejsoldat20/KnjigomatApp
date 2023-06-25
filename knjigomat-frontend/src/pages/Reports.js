/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Radio, Space, Table, Tag } from "antd";
import { Grid, Button } from "@mui/material";
import userService from "../services/userService";
import reportService from "../services/reportService";
import { useNavigate } from "react-router-dom";
import postService from "../services/postService";

export default function AllUsers() {
  const [users, setUsers] = useState([]);
  // const [adminId, setAdminId] = useState(0);
  const [deletedId, setDeletedId] = useState(0);
  const [reports, setReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // loadUsers();
    loadReports();
  }, []);

  const loadReports = () => {
    reportService.getAllReports().then((result) => {
      console.log(result.data);
      setReports(result.data);
    });
  };

  const deleteReport = (id) => {
    reportService.deleteReport(id).then(() => {
      loadReports();
    });
    // setDeletedId(id);
  };

  const navigateToPost = (postId) => {
    navigate(`/posts/${postId}`);
  };

  const findReportedUser = (report) => {};

  const columns = [
    {
      title: "Id objave",
      key: "id",
      // dataIndex: "id",
      render: (report) => {
        const color = "blue";

        return (
          <span>
            <Tag color={color} key={report.postId}>
              {report.postId}
            </Tag>
          </span>
        );
      },
    },
    {
      title: "Tekst prijave",
      key: "reportText",
      dataIndex: "reportText",
      render: (reportText) => {
        const color = "volcano";
        return (
          <span>
            <Tag color={color} key={reportText}>
              {reportText}
            </Tag>
          </span>
        );
      },
    },
    {
      title: "Action",
      key: "id",
      render: (report) => (
        <Space size="middle">
          <Button type="primary" onClick={() => navigateToPost(report.postId)}>
            Objava
          </Button>
          <Button type="primary" onClick={() => deleteReport(report.id)}>
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
              <Table columns={columns} dataSource={reports} />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
