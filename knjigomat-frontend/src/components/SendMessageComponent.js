/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import { PropTypes } from "prop-types";
import { SendOutlined } from "@ant-design/icons";
import chatService from "../services/chatService";
export default function SendMessage(props) {
  const [message, setMessage] = useState("");
  const { TextArea } = Input;
  const handleSendMessage = () => {
    if (message !== "") {
      const messageRequest = {
        text: message,
      };
      console.log(messageRequest.text);
      console.log();
      chatService.sendMessage(props.receiverId, messageRequest);
    }
    setMessage("");
    console.log("Message sent!");
  };
  return props.messageType === "chat" ? (
    <div style={{ display: "flex" }}>
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onPressEnter={handleSendMessage}
      />
      <Button
        icon={<SendOutlined />}
        onClick={() => handleSendMessage()}
      ></Button>
    </div>
  ) : (
    <div style={{ display: "grid" }}>
      <TextArea
        rows={6}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Row style={{ alignItems: "end", paddingTop: 20 }}>
        <div style={{ width: 313 }}></div>
        <Button onClick={props.closeModal}>Otkaži</Button>
        <div style={{ width: 8 }}></div>
        <Button
          type="primary"
          style={{ float: "right" }}
          onClick={() => {
            handleSendMessage();
            props.closeModal();
          }}
        >
          Pošalji
        </Button>
      </Row>
    </div>
  );
}

SendMessage.propTypes = {
  receiverId: PropTypes.number,
  messageType: PropTypes.string,
  closeModal: PropTypes.func,
};
