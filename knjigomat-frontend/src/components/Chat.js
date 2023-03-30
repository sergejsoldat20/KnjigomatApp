/* eslint-disable no-unused-vars */
import { Avatar, Button, List, message, Skeleton } from "antd";
import UserOutlined from "@ant-design/icons";
import ChatList from "./ChatUsersComponent";
import React, { useEffect, useState, useRef } from "react";
import { PropTypes } from "prop-types";
import Message from "./MessageComponent";
import SendMessage from "./SendMessageComponent";
import chatService from "../services/chatService";
import userService from "../services/userService";
const Chat = (props) => {
  const messagesEndRef = useRef(null);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    loadCurrentUser();
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [props.messages]);

  const loadCurrentUser = () => {
    userService.getCurrentUser().then((result) => {
      setCurrentUser(result.data);
    });
  };

  const getMessageType = (message) => {
    if (message.senderId === currentUser.id) {
      return "sent";
    } else {
      return "received";
    }
  };

  return (
    <div className="col-8">
      <div
        className="card"
        style={{ height: "500px", overflowY: "scroll" }}
        ref={messagesEndRef}
      >
        <List
          dataSource={props.messages}
          bordered={false}
          renderItem={(message) => (
            <List.Item
              style={{
                border: "none",
                alignItems:
                  getMessageType(message) === "sent" ? "right" : "left",
              }}
            >
              <Message content={message.text} type={getMessageType(message)} />
            </List.Item>
          )}
        />
      </div>
      <SendMessage receiverId={props.receiverId} />
    </div>
  );
};
export default Chat;
Chat.propTypes = {
  receiverId: PropTypes.number,
  messages: PropTypes.array,
};
