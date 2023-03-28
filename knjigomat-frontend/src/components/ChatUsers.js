/* eslint-disable no-unused-vars */
import { Avatar, Button, List, Skeleton } from "antd";
import UserOutlined from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { style } from "@mui/system";
import Message from "./MessageComponent";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const ChatUsers = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const getRandomAvatar = () => {
    const randomNumber = Math.floor(Math.random() * 24) + 1;
    return `/avatars/avatar_${randomNumber}.jpg`;
  };

  const messages = [];
  for (let i = 1; i <= 15; i++) {
    messages.push({
      type: i % 2 === 0 ? "sent" : "received",
      content: `Message ${i}`,
    });
  }

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        }))
      )
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event("resize"));
      });
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <div className="container text-center" style={{ float: "left" }}>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <List
              className="demo-loadmore-list text-center"
              loading={initLoading}
              itemLayout="horizontal"
              loadMore={loadMore}
              dataSource={list}
              renderItem={(item) => (
                <List.Item>
                  <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={process.env.PUBLIC_URL + getRandomAvatar()}
                          style={{ marginLeft: "10px" }}
                        />
                      }
                      title={<a href="https://ant.design">{item.name?.last}</a>}
                      // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                  </Skeleton>
                </List.Item>
              )}
            />
          </div>
        </div>
        <div className="col-8">
          <div
            className="card"
            style={{ height: "500px", overflowY: "scroll" }}
          >
            <List
              dataSource={messages}
              bordered={false}
              renderItem={(message) => (
                <List.Item
                  style={{
                    border: "none",
                    alignItems: message.type === "sent" ? "right" : "left",
                  }}
                >
                  <Message content={message.content} type={message.type} />
                </List.Item>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChatUsers;
