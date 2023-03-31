/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Input, Button } from "antd";
import { PropTypes } from "prop-types";
import { SendOutlined } from "@ant-design/icons";
import chatService from "../services/chatService";
export default function SendMessage(props) {
  const [message, setMessage] = useState("");

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
  };
  return (
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
  );
}

SendMessage.propTypes = {
  receiverId: PropTypes.number,
};
