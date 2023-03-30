/* eslint-disable no-unused-vars */
import { Avatar, Button, List, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { UserOutlined } from "@ant-design/icons";
import chatService from "../services/chatService";
const ChatList = (props) => {
  const getRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 24) + 1;
    return `/avatars/avatar_${randomNumber}.jpg`;
  };

  return (
    <div className="col-4">
      <div className="card">
        <List
          className="demo-loadmore-list text-center"
          itemLayout="horizontal"
          dataSource={props.users}
          renderItem={(item) => (
            <List.Item
              onClick={() => props.onSelectUser(item.id)}
              style={
                props.receiverId === item.id
                  ? { backgroundColor: "rgba(211, 211, 200, 0.5)" }
                  : {}
              }
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    icon={<UserOutlined />}
                    style={{ marginLeft: "10px" }}
                  />
                }
                title={<p> {item.firstName + " " + item.lastName}</p>}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};
export default ChatList;
ChatList.propTypes = {
  users: PropTypes.array,
  receiverId: PropTypes.number,
  onSelectUser: PropTypes.function,
};
