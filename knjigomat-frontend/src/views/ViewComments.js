/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import postService from "../services/postService";
import { PropTypes } from "prop-types";
import { Box, Grid } from "@mui/material";
import { Card, Image, Divider, Col, Row, Avatar, List } from "antd";
import getAvatar from "../utils/getAvatar";
const { Meta } = Card;
const ViewComments = (props) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    loadComments();
    console.log("useEffect(ViewComments)");
  }, []);
  const loadComments = () => {
    postService.getCommentsByPostId(props.id).then((result) => {
      setComments(result.data);
    });
  };
  const data = comments.map((comment) => {
    return {
      title: comment.userUsername,
      id: comment.userId,
      label: comment.text,
      gender: comment.userGender,
    };
  });
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      style={{ flex: "right" }}
      renderItem={(item, index) => (
        <List.Item style={{ flex: "right", flexDirection: "row-reverse" }}>
          <List.Item.Meta
            avatar={
              <a href={`/users/${item.id}`}>
                <Avatar src={getAvatar(item.gender)} />
              </a>
            }
            title={
              <a>
                {item.title} {item.id}
              </a>
            }
            description={`${item.label}`}
          />
        </List.Item>
      )}
    />

    // <Row>
    //   <Col span={12}>
    //     <Card style={{ minHeight: 570 }}>
    //       <Image
    //         style={{ borderRadius: 10 }}
    //         alt="example"
    //         width={450}
    //         height={450}
    //         src={firstPhoto.photoUrl}
    //       />

    //       <Meta
    //         title={<b style={{ fontSize: 20 }}>{`${post.name}`}</b>}
    //         description={
    //           <b
    //             style={{ color: "#595E60", fontSize: 20 }}
    //           >{`${post.price} KM`}</b>
    //         }
    //         style={{ whiteSpace: "pre-line", paddingTop: 5 }}
    //       />
    //     </Card>
    //   </Col>
    //   <Col span={12}>
    //     <Card
    //       style={{
    //         textAlign: "left",
    //         fontSize: 20,
    //         borderTop: 0,
    //         borderBottom: 0,
    //         minHeight: 350,
    //       }}
    //     >
    //       <p>
    //         <b>Autor :</b> {post.authorName}
    //       </p>
    //       <p>
    //         <b>Kategorija :</b> {post.categoryName}
    //       </p>
    //       <p>
    //         <b>Stanje :</b> {post.state}
    //       </p>
    //       <p>
    //         <b>Datum :</b> {post.createdTime.split("T")[0]}
    //       </p>
    //       <p>
    //         <b>Objavio :</b> {post.userUsername}
    //       </p>
    //       <p>
    //         <b>Opis :</b> {post.description}
    //       </p>
    //     </Card>
    //     <Divider style={{ fontSize: 20 }}>Profil</Divider>
    //     <Card
    //       style={{
    //         textAlign: "left",
    //         fontSize: 20,
    //         minHeight: 156,
    //         borderTop: 0,
    //       }}
    //     >
    //       <Box
    //         sx={{
    //           display: "grid",
    //           gridTemplateColumns: "repeat(4,1fr)",
    //         }}
    //       >
    //         <a href={`/user/${post.userId}`}>
    //           <img
    //             src="../images/woman.png"
    //             height={100}
    //             width={100}
    //             style={{ borderRadius: 50 }}
    //           />
    //         </a>
    //         <Link
    //           to={`/user/${post.userId}`}
    //           style={{ textDecoration: "none" }}
    //         >
    //           {post.userUsername}
    //         </Link>
    //       </Box>
    //     </Card>
    //   </Col>
    // </Row>
  );
};
ViewComments.propTypes = {
  id: PropTypes.number,
};
export default ViewComments;
