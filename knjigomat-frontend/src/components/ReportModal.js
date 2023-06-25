/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Input, Button, Row } from "antd";
import { PropTypes } from "prop-types";
import postService from "../services/postService";
import userService from "../services/userService";
import reportService from "../services/reportService";
export default function ReportModal(props) {
  const [report, setReport] = useState("");
  const [currentUserId, setCurrentUserId] = useState(0);
  const { TextArea } = Input;

  const loadCurrentUserId = () => {
    userService.getCurrentUserId().then((result) => {
      setCurrentUserId(result.data);
    });
  };

  const handleOnClick = () => {
    loadCurrentUserId();
    const reportData = {
      reportText: report,
      postId: props.postId,
      userId: currentUserId,
      createdTime: "",
    };

    reportService.insertReport(reportData).then((result) => {
      console.log(result.data);
    });
  };
  return (
    <div style={{ display: "grid" }}>
      <TextArea
        rows={6}
        value={report}
        onChange={(e) => setReport(e.target.value)}
      />
      <Row style={{ alignItems: "end", paddingTop: 20 }}>
        <div style={{ width: 338 }}></div>
        <Button onClick={props.closeModal}>Otkaži</Button>
        <div style={{ width: 8 }}></div>
        <Button
          type="primary"
          style={{ float: "right" }}
          onClick={() => {
            handleOnClick();
            props.closeModal();
          }}
        >
          OK
        </Button>
      </Row>
    </div>
  );
}
ReportModal.propTypes = {
  postId: PropTypes.number,
  closeModal: PropTypes.func,
};
