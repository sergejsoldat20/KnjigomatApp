/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import postService from "../services/postService";
import { PropTypes } from "prop-types";
import { Box, Grid } from "@mui/material";
import { Card, Image, Divider, Col, Row, Button, Modal, Empty } from "antd";
import { Link, useParams, useNavigate } from "react-router-dom";
import getAvatar from "../utils/getAvatar";
import "../static/Administration.css";
import SendMessageComponent from "../components/SendMessageComponent";
import PostComment from "../components/PostComment";
import authService, { CheckIfAdmin } from "../services/authService";
import userService from "../services/userService";
const { Meta } = Card;
const ViewPost = (props) => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: 0,
    name: "",
    description: "",
    price: 0,
    authorName: "",
    createdTime: "",
    deleted: false,
    state: "",
    categoryName: "",
    userId: 0,
    userUsername: "",
    userGender: "",
  });
  const [firstPhoto, setFirstPhoto] = useState({
    id: 0,
    photoUrl: "",
    postId: 0,
  });
  const [photos, setPhotos] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(0);
  useEffect(() => {
    loadPost();
    loadFirstPhoto();
    loadPhotos();
    loadCurrentUserId();
    console.log("useEffect(ViewPost)");
    console.log("URL:" + firstPhoto.photoUrl);
    console.log(`CURRENT USER ${currentUserId}`);
    console.log(`POST USER ${post.userId}`);
    console.log(`ispis`);
  }, []);
  const loadPost = () => {
    postService.getPostById(props.id).then((result) => {
      setPost(result.data);
    });
  };
  const loadCurrentUserId = () => {
    userService.getCurrentUserId().then((result) => {
      setCurrentUserId(result.data);
    });
  };
  const loadFirstPhoto = () => {
    postService.getFirstPhotoByPostId(props.id).then((result) => {
      setFirstPhoto(result.data);
    });
  };
  const loadPhotos = async () => {
    await postService.getPhotosByPostId(props.id).then((result) => {
      setPhotos(result.data);
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(0);
  const showModal = (number) => {
    setIsModalOpen(number);
  };
  const handleCancel = () => {
    setIsModalOpen(0);
  };
  const deletePost = async (id) => {
    await postService.deletePost(id);
    navigate("/home");
  };
  const sendButton = {
    height: 65,
    width: 150,
    borderRadius: 50,
    borderColor: "#4182fc",
    color: "#4182fc",
  };
  return (
    <Row>
      <Col span={12}>
        <Card style={{ minHeight: 570 }}>
          <Image
            style={{ borderRadius: 10 }}
            alt="example"
            width={450}
            height={450}
            src={firstPhoto.photoUrl}
          />

          <Meta
            title={<b style={{ fontSize: 20 }}>{`${post.name}`}</b>}
            description={
              <b
                style={{ color: "#595E60", fontSize: 20 }}
              >{`${post.price} KM`}</b>
            }
            style={{ whiteSpace: "pre-line", paddingTop: 5 }}
          />
        </Card>
      </Col>
      <Col span={12}>
        <Box style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}>
          <Card
            style={{
              textAlign: "left",
              fontSize: 20,
              borderTop: 0,
              borderBottom: 0,
              minHeight: 350,
            }}
          >
            <p>
              <b>Autor :</b> {post.authorName}
            </p>
            <p>
              <b>Kategorija :</b> {post.categoryName}
            </p>
            <p>
              <b>Stanje :</b> {post.state}
            </p>
            <p>
              <b>Datum :</b> {post.createdTime.split("T")[0]}
            </p>
            <p>
              <b>Objavio :</b> {post.userUsername}
            </p>
            <p>
              <b>Opis :</b> {post.description}
            </p>
          </Card>
          {authService.CheckIfAuthorized() && (
            <Box
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(1,1fr)",
                justifyContent: "space-around",
                alignItems: "space-around",
                paddingLeft: 120,
                paddingTop: "20%",
              }}
            >
              <Button style={sendButton} onClick={() => showModal(1)}>
                Pitanje
              </Button>
              <Modal
                title="Javno pitanje"
                open={isModalOpen === 1}
                footer={null}
                closable={false}
              >
                <PostComment postId={post.id} closeModal={handleCancel} />
              </Modal>
              <Button style={sendButton} onClick={() => showModal(2)}>
                Poruka
              </Button>
              <Modal
                title="Privatna poruka"
                open={isModalOpen === 2}
                footer={null}
                closable={false}
              >
                <SendMessageComponent
                  receiverId={post.userId}
                  messageType={"post"}
                  closeModal={handleCancel}
                />
              </Modal>
            </Box>
          )}
        </Box>
        <Divider style={{ fontSize: 20 }}>Profil</Divider>
        <Card
          style={{
            textAlign: "left",
            fontSize: 20,
            minHeight: 156,
            borderTop: 0,
            borderRight: 0,
          }}
        >
          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              justifyContent: "space-around",
              alignItems: "space-around",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
              }}
            >
              <a href={`/users/${post.userId}`}>
                <img
                  src={getAvatar(post.userGender)}
                  alt="Not Found"
                  height={100}
                  width={100}
                  style={{ borderRadius: 50 }}
                />
              </a>
              <Link
                to={`/users/${post.userId}`}
                style={{ textDecoration: "none" }}
              >
                {post.userUsername}
              </Link>
            </Box>
            {(currentUserId === post.userId || CheckIfAdmin) && (
              <Box
                style={{
                  display: "grid",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button
                  style={{
                    height: 65,
                    width: 150,
                    borderRadius: 50,
                    borderColor: "#4182fc",
                    color: "#4182fc",
                  }}
                  onClick={() => showModal(3)}
                >
                  Obrisi oglas
                </Button>
                <Modal
                  title="Da li zelite da obriste ovaj oglas?"
                  onOk={() => deletePost(post.id)}
                  onCancel={handleCancel}
                  open={isModalOpen === 3}
                  closable={false}
                  okText="Da"
                  cancelText="Ne"
                ></Modal>
              </Box>
            )}
          </Box>
        </Card>
      </Col>
    </Row>
  );
};
ViewPost.propTypes = {
  id: PropTypes.number,
};
export default ViewPost;
