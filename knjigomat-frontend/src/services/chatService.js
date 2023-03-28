import base from "./baseService";

const instance = base.service(true);

export const getChatMessages = (receiverId) => {
  return instance.get(`/messages/for-chat/${receiverId}`);
};

export const sendMessage = (receiverId, message) => {
  return instance.post(`/messages/send-message/${receiverId}`, message);
};

export default {
  getChatMessages,
  sendMessage,
};
