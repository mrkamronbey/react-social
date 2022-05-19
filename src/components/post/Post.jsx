import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState, useEffect, useRef } from "react";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AddLocationIcon from "@material-ui/icons/AddLocation";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     let tooltipBox = document.querySelector(".moreTooltip");
  //     tooltipBox.style.display = "none";
  //   }, 3);
  // }, []);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
            <div className="rightTooltipbox">
              <div className="tooltip-boxx">
                <img
                  className="tooltipImgs"
                  src={
                    Users.filter((u) => u.id === post?.userId)[0].profilePicture
                  }
                  alt="image"
                />
                <div className="tooltipInfo-box">
                  <span className="tooltip-name">
                    {" "}
                    {Users.filter((u) => u.id === post?.userId)[0].username}
                  </span>
                  <div className="tooltip-person-box">
                    <PeopleAltIcon className="tooltip-icon" />
                    <span>87 friends</span>
                  </div>
                  <div className="tooltip-lacation-box">
                    <AddLocationIcon className="tooltip-icon" />
                    <span>Lives in New York, USA</span>
                  </div>
                </div>
              </div>
              <div className="tooltipBtn-box">
                <button className="tooltip-btn">
                  <i class="bx bxl-messenger"></i>
                  <span>Message</span>
                </button>
                <button className="tooltip-btn">
                  <i class="bx bxs-user-plus"></i>
                  <span>Add Friend</span>
                </button>
                <button
                  onClick={() => {
                    let tooltipBox = document.querySelector(".moreTooltip");
                    tooltipBox.style.display = "block";
                    setTimeout(() => {
                      let tooltipBox = document.querySelector(".moreTooltip");
                      tooltipBox.style.display = "none";
                    }, 3000);
                  }}
                  className="tooltip-btn more-tooltip-btn"
                >
                  <MoreHorizIcon />
                </button>
                <div className="moreTooltip">
                  <Button className="more-btn" onClick={handleOpen}>
                    <i class="bx bx-block"></i> <span>Block</span>
                  </Button>
                  {/* <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Modal> */}
                </div>
              </div>
            </div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
