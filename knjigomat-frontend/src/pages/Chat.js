/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Input, Button, List, Avatar } from "antd";
import chatService from "../services/chatService";

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({
    text: "",
  });

  useEffect(() => {
    loadChatMessages();
  }, []);

  const receiverId = 106;

  const loadChatMessages = () => {
    chatService.getChatMessages(receiverId).then((result) => {
      console.log(result.data);
      setMessages(result.data);
    });
  };

  const handleMessageChange = (e) => {
    setMessage({ text: e.target.value });
  };

  const handleSendMessage = () => {
    chatService.sendChatMessage(receiverId, message.text).then((result) => {
      setMessages([...messages, result.data]);
      setMessage({ text: "" });
    });
  };

  return (
    <div>
      Chat
      <List>
        {messages.map((mess) => (
          <p key={mess.id}>{mess.text}</p>
        ))}
      </List>
    </div>
  );
}
