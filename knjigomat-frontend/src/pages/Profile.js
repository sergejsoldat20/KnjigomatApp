import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewUserInformation from "../views/ViewUserInformation";
import postService from "../services/postService";
import ViewMiniPost from "../views/ViewMiniPost";
import { Button } from "antd";
export default function Profile() {
  const { id } = useParams();
  const userId = parseInt(id, 10);
  const [currentPage, setCurrentPage] = useState(0);
  const [postsSize, setPostsSize] = useState(0);
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    loadUserPosts();
    console.log("useEffect(Profile)");
  }, []);
  const loadUserPosts = () => {
    postService.getAllByUserIdPaginated(0, 12, userId).then((result) => {
      setUserPosts(result.data.content);
      setPostsSize(result.data.totalElements);
    });
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    window.scrollTo(0, 0);
  };
  console.log("NESTO" + 103);
  return (
    <div>
      <Box
        style={{ display: "grid", gridTemplateColumns: "1fr 4fr", gap: "20px" }}
      >
        <ViewUserInformation id={userId} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {userPosts.map((post) => (
            <ViewMiniPost id={post.id} key={post.id} />
          ))}
          {Array(Math.max(0, 4 - userPosts.length))
            .fill()
            .map((_, i) => (
              <div key={i} />
            ))}
        </div>
      </Box>
      <Grid
        container
        item
        sx={{ justifyContent: "center", paddingLeft: "24%" }}
      >
        <Button
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={(currentPage + 1) * 12 >= postsSize}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </Grid>
    </div>
  );
}
