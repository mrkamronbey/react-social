import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import * as React from "react";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import {ProfilePicture, CoverPicture, Bio, Intro} from './Profil1'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
};

const Input = styled("input")({
  display: "none",
});

export default function Profile() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



 
  return (
    <>
      <Topbar />
      <div className="profile">
        <div className="container">
          {/* <Sidebar /> */}
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                  src="assets/post/3.jpeg"
                  alt=""
                />
                <div className="img-upload-box">
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                      <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                      />
                      <Button
                        className="upload-btn"
                        variant="contained"
                        component="span"
                      >
                        <PhotoCamera className="upload-btn-icon" />
                        <span>Edit cover photo</span>
                      </Button>
                    </label>
                  </Stack>
                </div>
                <img
                  className="profileUserImg"
                  src="assets/person/7.jpeg"
                  alt=""
                />
              </div>
              <div className="profileInfo">
                <div>
                  <h4 className="profileInfoName">Komronbey Sunnatov</h4>
                  <span className="profileInfoDesc">91 Friends</span>
                </div>
                <div className="c-profil-btn-box">
                  <Button
                    className="upload-btns c-story-btn"
                    variant="contained"
                    component="span"
                    onClick={handleOpen}
                  >
                    <i class="bx bxs-edit-alt c-profil-edit-icon"></i>
                    <span>Edit profil</span>
                  </Button>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <Box sx={style}>
                        <Typography
                          id="transition-modal-title"
                          variant="h6"
                          component="h2"
                          className="c-modal-title-box"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginBottom: "20px",
                          }}
                        >
                          <h4 style={{ fontSize: "27px" }}>Edit profil</h4>
                          <button
                            onClick={handleClose}
                            style={{
                              border: "none",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "10px",
                              cursor: "pointer",
                            }}
                          >
                            <i class="bx bx-x" style={{ fontSize: "20px" }}></i>
                          </button>
                        </Typography>
                        <Divider />
                        <Typography
                          id="transition-modal-description"
                          sx={{ mt: 2 }}
                          className="c-scroll-modal"
                        >
                          <ProfilePicture />
                          <CoverPicture />
                          <Bio />
                          <Intro />
                        </Typography>
                      </Box>
                    </Fade>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
