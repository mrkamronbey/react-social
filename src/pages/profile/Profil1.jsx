import { Image } from "../../dummyData";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

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
 function ProfilePicture () {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const BtnRef1 = React.useRef();
    const BtnRef2 = React.useRef();
    const BtnRef3 = React.useRef();
    const BtnRef4 = React.useRef();
    const BtnRef5 = React.useRef();
    const BtnRef6 = React.useRef();
    const BtnRef7 = React.useRef();
    const BtnRef8 = React.useRef();
  
    const list1 = React.useRef();
    const list2 = React.useRef();
    const list3 = React.useRef();
    const list4 = React.useRef();
    const list5 = React.useRef();
    const list6 = React.useRef();
    const list7 = React.useRef();
    const list8 = React.useRef();

    return (
      <>
        <div className="c-profil-picture-box">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h4 style={{ fontSize: "22px", fontWeight: "450" }}>
              Profile Picture
            </h4>
            <Button
              sx={{
                textTransform: "capitalize",
                fontSize: "16px",
                color: "blue",
              }}
              onClick={handleOpen}
            >
              <span> Edit</span>
            </Button>
          </div>
          <div
            className="c-profile-pic-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="profileUserImgs"
              src="assets/person/7.jpeg"
              alt="image"
            />
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              <h4 style={{ fontSize: "22px", fontWeight: "450" }}>
                Update profile picture
              </h4>
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
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <label
                      htmlFor="contained-button-file"
                      sx={{ background: "#E7F3FF" }}
                    >
                      <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                      />
                      <Button
                        className="upload-btn"
                        component="span"
                        sx={{
                          boxShadow: "none",
                          padding: "0",
                          width: "250px",
                          borderRadius: "10px",
                        }}
                      >
                        <span
                          style={{
                            textTransform: "capitalize",
                            fontSize: "16px",
                            color: "blue",
                            background: "#E7F3FF",
                            width: "100%",
                            padding: "5px 20px",
                            textAlign: "center",
                            borderRadius: "10px",
                          }}
                        >
                          + Upload Image
                        </span>
                      </Button>
                    </label>
                  </Stack>
                  <Button
                    sx={{
                      boxShadow: "none",
                      padding: "0",
                      width: "250px",
                      borderRadius: "10px",
                    }}
                  >
                    <span
                      style={{
                        textTransform: "capitalize",
                        fontSize: "16px",
                        color: "#000",
                        background: "#E4E6EB",
                        width: "100%",
                        padding: "5px 20px",
                        textAlign: "center",
                        borderRadius: "10px",
                      }}
                    >
                      + Add Frame
                    </span>
                  </Button>
                  <Button
                    sx={{
                      boxShadow: "none",
                      padding: "0",
                      width: "40px",
                      borderRadius: "10px",
                    }}
                  >
                    <span
                      style={{
                        textTransform: "capitalize",
                        fontSize: "20px",
                        color: "#000",
                        background: "#E4E6EB",
                        width: "100%",
                        padding: "9px 20px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i class="bx bxs-edit-alt"></i>
                    </span>
                  </Button>
                </div>
                <div
                  className="c-scrool-modal-box"
                  style={{ marginTop: "10px" }}
                >
                  <div>
                    <h4 style={{ fontSize: "20px", fontWeight: "450" }}>
                      Suggested Photos
                    </h4>
                    <ul
                      ref={list1}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        padding: "15px 0",
                      }}
                    >
                      {Image.slice(0, 6).map((elem) => (
                        <li
                          key={elem.id}
                          style={{
                            width: "90px",
                            height: "90px",
                            margin: "6px 0",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                            src={elem.photo}
                            alt="image"
                          />
                        </li>
                      ))}
                    </ul>
                    <Button
                      ref={BtnRef1}
                      style={{
                        border: "none",
                        borderRadius: "10px",
                        background: "#E4E6EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "5px 10px",
                        cursor: "pointer",
                        width: "100%",
                      }}
                      onClick={(e) => {
                        list1.current.classList.add("work");
                        if (list1.current.classList.contains("work")) {
                          list1.current.style.display = "none";
                          list2.current.style.display = "flex";
                          e.target.style.display = "none";
                          BtnRef2.current.style.display = "none";
                          BtnRef1.current.style.display = "none";
                        } else {
                          list1.current.style.display = "flex";
                          list2.current.style.display = "none";
                          e.target.style.display = "block";
                          BtnRef1.current.style.display = "none";
                        }
                      }}
                    >
                      <span
                        style={{
                          fontSize: "17px",
                          color: "#000",
                          textTransform: "capitalize",
                        }}
                      >
                        See more
                      </span>
                    </Button>
                    <ul
                      ref={list2}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        padding: "15px 0",
                        display: "none",
                      }}
                    >
                      {Image.slice(0, 24).map((elem) => (
                        <li
                          key={elem.id}
                          style={{
                            width: "90px",
                            height: "90px",
                            margin: "6px 0",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                            src={elem.photo}
                            alt="image"
                          />
                        </li>
                      ))}
                    </ul>
                    <Button
                      ref={BtnRef2}
                      style={{
                        border: "none",
                        borderRadius: "10px",
                        background: "#E4E6EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "5px 10px",
                        cursor: "pointer",
                        width: "100%",
                        display: "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "17px",
                          color: "#000",
                          textTransform: "capitalize",
                        }}
                      >
                        See more
                      </span>
                    </Button>
                  </div>
                  <div style={{ marginTop: "10px" }}>
                    <h4 style={{ fontSize: "20px", fontWeight: "450" }}>
                      Uploads
                    </h4>
                    <ul
                      ref={list3}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        padding: "15px 0",
                      }}
                    >
                      {Image.slice(0, 6).map((elem) => (
                        <li
                          key={elem.id}
                          style={{
                            width: "90px",
                            height: "90px",
                            margin: "6px 0",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                            src={elem.photo}
                            alt="image"
                          />
                        </li>
                      ))}
                    </ul>
                    <Button
                      ref={BtnRef3}
                      style={{
                        border: "none",
                        borderRadius: "10px",
                        background: "#E4E6EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "5px 10px",
                        cursor: "pointer",
                        width: "100%",
                      }}
                      onClick={(e) => {
                        list3.current.classList.add("work");
                        if (list3.current.classList.contains("work")) {
                          list3.current.style.display = "none";
                          list4.current.style.display = "flex";
                          e.target.style.display = "none";
                          BtnRef4.current.style.display = "none";
                          BtnRef3.current.style.display = "none";
                        } else {
                          list3.current.style.display = "flex";
                          list4.current.style.display = "none";
                          e.target.style.display = "block";
                          BtnRef3.current.style.display = "none";
                        }
                      }}
                    >
                      <span
                        style={{
                          fontSize: "17px",
                          color: "#000",
                          textTransform: "capitalize",
                        }}
                      >
                        See more
                      </span>
                    </Button>
                    <ul
                      ref={list4}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        padding: "15px 0",
                        display: "none",
                      }}
                    >
                      {Image.slice(0, 12).map((elem) => (
                        <li
                          key={elem.id}
                          style={{
                            width: "90px",
                            height: "90px",
                            margin: "6px 0",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                            src={elem.photo}
                            alt="image"
                          />
                        </li>
                      ))}
                    </ul>
                    <Button
                      ref={BtnRef4}
                      style={{
                        border: "none",
                        borderRadius: "10px",
                        background: "#E4E6EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "5px 10px",
                        cursor: "pointer",
                        width: "100%",
                        display: "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "17px",
                          color: "#000",
                          textTransform: "capitalize",
                        }}
                      >
                        See more
                      </span>
                    </Button>
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <h4 style={{ fontSize: "20px", fontWeight: "450" }}>
                      Profil Pictures
                    </h4>
                    <ul
                      ref={list5}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        padding: "15px 0",
                      }}
                    >
                      {Image.slice(6, 12).map((elem) => (
                        <li
                          key={elem.id}
                          style={{
                            width: "90px",
                            height: "90px",
                            margin: "6px 0",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                            src={elem.photo}
                            alt="image"
                          />
                        </li>
                      ))}
                    </ul>
                    <Button
                      ref={BtnRef5}
                      style={{
                        border: "none",
                        borderRadius: "10px",
                        background: "#E4E6EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "5px 10px",
                        cursor: "pointer",
                        width: "100%",
                      }}
                      onClick={(e) => {
                        list5.current.classList.add("work");
                        if (list5.current.classList.contains("work")) {
                          list5.current.style.display = "none";
                          list6.current.style.display = "flex";
                          e.target.style.display = "none";
                          BtnRef6.current.style.display = "none";
                          BtnRef5.current.style.display = "none";
                        } else {
                          list5.current.style.display = "flex";
                          list6.current.style.display = "none";
                          e.target.style.display = "block";
                          BtnRef5.current.style.display = "none";
                        }
                      }}
                    >
                      <span
                        style={{
                          fontSize: "17px",
                          color: "#000",
                          textTransform: "capitalize",
                        }}
                      >
                        See more
                      </span>
                    </Button>
                    <ul
                      ref={list6}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        padding: "15px 0",
                        display: "none",
                      }}
                    >
                      {Image.slice(6, 18).map((elem) => (
                        <li
                          key={elem.id}
                          style={{
                            width: "90px",
                            height: "90px",
                            margin: "6px 0",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                            src={elem.photo}
                            alt="image"
                          />
                        </li>
                      ))}
                    </ul>
                    <Button
                      ref={BtnRef6}
                      style={{
                        border: "none",
                        borderRadius: "10px",
                        background: "#E4E6EB",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "5px 10px",
                        cursor: "pointer",
                        width: "100%",
                        display: "none",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "17px",
                          color: "#000",
                          textTransform: "capitalize",
                        }}
                      >
                        See more
                      </span>
                    </Button>
                  </div>

                  <div style={{ marginTop: "10px" }}>
                    <h4 style={{ fontSize: "20px", fontWeight: "450" }}>
                      Cover photos
                    </h4>
                    <ul
                      ref={list5}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        padding: "15px 0",
                      }}
                    >
                      {Image.slice(15, 21).map((elem) => (
                        <li
                          key={elem.id}
                          style={{
                            width: "90px",
                            height: "90px",
                            margin: "6px 0",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                            src={elem.photo}
                            alt="image"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Typography>
          </Box>
        </Modal>
      </>
    );
  };

 function CoverPicture() {
    return (
      <>
        <div className="c-cover-picture-box">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <h4 style={{ fontSize: "22px", fontWeight: "450" }}>Cover Photo</h4>
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
                  sx={{ boxShadow: "none" }}
                >
                  <span
                    style={{
                      textTransform: "capitalize",
                      fontSize: "16px",
                      color: "blue",
                    }}
                  >
                    Edit
                  </span>
                </Button>
              </label>
            </Stack>
          </div>
          <div
            className="c-profile-pic-box"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              className="profileCovers"
              src="assets/post/3.jpeg"
              alt="image"
            />
          </div>
        </div>
      </>
    );
  };

 function Bio () {
    return (
      <>
        <div className="c-cover-picture-box">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <h4 style={{ fontSize: "22px", fontWeight: "450" }}>Bio</h4>
            <Button
              className="upload-btn"
              variant="contained"
              component="span"
              sx={{ boxShadow: "none" }}
            >
              <span
                style={{
                  textTransform: "capitalize",
                  fontSize: "16px",
                  color: "blue",
                }}
              >
                Edit
              </span>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <p>Alloh is always watching me</p>
          </div>
        </div>
      </>
    );
  };

 function Intro () {
    return (
      <>
        <div className="c-cover-picture-box">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <h4 style={{ fontSize: "22px", fontWeight: "450" }}>
              Customize your intro
            </h4>
            <Button
              className="upload-btn"
              variant="contained"
              component="span"
              sx={{ boxShadow: "none" }}
            >
              <span
                style={{
                  textTransform: "capitalize",
                  fontSize: "16px",
                  color: "blue",
                }}
              >
                Edit
              </span>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                class="bx bxs-home"
                style={{ fontSize: "20px", marginRight: "10px" }}
              ></i>
              Lives in
              <span
                style={{ color: "#000", fontWeight: "bold", marginLeft: "5px" }}
              >
                London, United Kingdom
              </span>
            </p>

            <p
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                class="bx bxs-location-plus"
                style={{ fontSize: "20px", marginRight: "10px" }}
              ></i>
              From
              <span
                style={{ color: "#000", fontWeight: "bold", marginLeft: "5px" }}
              >
                London, United Kingdom
              </span>
            </p>
            <p
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <i
                class="bx bxl-instagram-alt"
                style={{ fontSize: "20px", marginRight: "10px" }}
              ></i>
              <a href="https://www.instagram.com/kamronch1k_001/">
                kamronch1k_001
              </a>
            </p>
          </div>
        </div>
      </>
    );
  };

  export {ProfilePicture, CoverPicture, Bio, Intro}