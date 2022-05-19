import "./share.css";
import { Search, PermMedia, EmojiEmotions } from "@material-ui/icons";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Smile } from "../../dummyData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 3,
};
// ! Tab function
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// !tabs end
export default function Share() {
  const [foto, setFoto] = useState(false);
  const handleOpenFoto = () => setFoto(true);
  const handleCloseFoto = () => setFoto(false);

  const [live, setLive] = useState(false);
  const handleOpenLive = () => setLive(true);
  const handleCloseLive = () => setLive(false);

  const [feel, setFeel] = useState(false);
  const handleOpenFeel = () => setFeel(true);
  const handleCloseFeel = () => setFeel(false);

  const [searchName, setSearchName] = useState("");
  const [search, setSearch] = useState(Smile);

  const FilterProduct = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;

    if (inputValue !== "") {
      const result = Smile.filter((item) => {
        return item.name.toLowerCase().startsWith(inputValue.toLowerCase());
      });
      setSearch(result);
    } else {
      setSearch(Smile);
    }

    setSearchName(inputValue);
  };

  // !tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // ! tabs
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Komronbey?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <Button onClick={handleOpenLive} className="shareOption">
              <i class="bx bxs-video"></i>
              <span className="shareOptionText">Live Video</span>
            </Button>
            <Button onClick={handleOpenFoto} className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </Button>
            <Button onClick={handleOpenFeel} className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feeling/Activity</span>
            </Button>
          </div>
        </div>
      </div>
      {/* !modal */}
      <Modal
        open={live}
        onClose={handleCloseLive}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h3 className="live-title">Live Video</h3>
            <button onClick={handleCloseLive} className="live-modal-close">
              <i class="bx bx-x"></i>
            </button>
            <hr />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p className="modal-text">
              You didn't share your post yet. Are you sure you want to leave
              without posting?
            </p>
            <div className="modal-btn-box">
              <button onClick={handleCloseLive} className="modal-btn noBack">
                Keep Editing
              </button>
              <button className="modal-btn yesBack">Leave</button>
            </div>
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={foto}
        onClose={handleCloseFoto}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modal-box">
            <div className="post-modal-content">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h3 className="foto-title">Create post</h3>
                <button onClick={handleCloseFoto} className="live-modal-close">
                  <i class="bx bx-x"></i>
                </button>
                <hr />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="modalShar-box">
                  <div className="modal-post-box">
                    <img
                      className="shareProfileImg"
                      src="/assets/person/1.jpeg"
                      alt=""
                    />
                    <span>Kamronbek Sunnatov</span>
                  </div>
                </div>
                <div className="add-post-foto-box">
                  <input
                    placeholder="What's in your mind Komronbey?"
                    className="shareInputs"
                  />
                  <div className="foto-add-box">
                    <div className="add-foto-box">
                      <input type="file" />
                    </div>
                    <div className="add-foto-btn-box">
                      <p className="add-foto-btn-text">
                        <span className="phone-icon">
                          <i class="bx bx-mobile"></i>
                        </span>
                        <span className="add-foto-btn-text1">
                          Add photos and videos from your mobile device
                        </span>
                      </p>
                      <button className="add-foto-btn">Add</button>
                    </div>
                  </div>
                </div>
                <div className="add-your-post-box">
                  <button className="add-your-btn">Add to your post</button>
                  <div className="add-your-post-btns">
                    <button className="add-your-post-btn add-photo">
                      <i class="bx bxs-photo-album"></i>
                    </button>
                    <button className="add-your-post-btn add-person">
                      <i class="bx bxs-user"></i>
                    </button>
                    <button className="add-your-post-btn add-stiker">
                      <i class="bx bx-smile"></i>
                    </button>
                    <button className="add-your-post-btn add-location">
                      <i class="bx bxs-location-plus"></i>
                    </button>
                    <button className="add-your-post-btn  add-microfon">
                      <i class="bx bxs-microphone"></i>
                    </button>
                    <button className="add-your-post-btn add-more">
                      <i class="bx bx-dots-horizontal-rounded"></i>
                    </button>
                  </div>
                </div>
                <button className="posts-btn">Post</button>
              </Typography>
            </div>
            <div className="smile-modal-content">
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h3 className="smile-title">How are you feeling ?</h3>
                <hr />
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <Tabs value={value} onChange={handleChange}>
                      <Tab label="Feelings" className="smile-tabs" />
                      <Tab label="Activities" className="smile-tabs" />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0} className="smile-tabpanel">
                    <div className="searchbars">
                      <Search className="searchIcon" />
                      <input
                        placeholder="Search"
                        value={searchName}
                        onChange={FilterProduct}
                        className="searchInputSmile"
                      />
                    </div>
                    <div className="smile-boxs">
                      <ul className="smile-list">
                        {search && search.length > 0 ? (
                          search.map((elem) => (
                            <li key={elem.id} className="smile-item">
                              <p className="smile-text">
                                <span className="smile-span">{elem.smile}</span>
                                <span className="smile-name">{elem.name}</span>
                              </p>
                            </li>
                          ))
                        ) : (
                          <div className="notfount-box">
                            <h1 className="nocarts">
                              No results found!
                              <span className="smile-not-span">😔</span>
                            </h1>
                          </div>
                        )}
                      </ul>
                    </div>
                  </TabPanel>
                  <TabPanel value={value} index={1} className="smile-tabpanel">
                    Item Two
                  </TabPanel>
                </Box>
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>

      {/* <Modal
        open={feel}
        onClose={handleCloseFeel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="smile-modal-content">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h3 className="smile-title">How are you feeling ?</h3>
              <hr />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                  <Tabs value={value} onChange={handleChange}>
                    <Tab label="Feelings" className="smile-tabs" />
                    <Tab label="Activities" className="smile-tabs" />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0} className="smile-tabpanel">
                  <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                      placeholder="Search"
                      value={searchName}
                      onChange={FilterProduct}
                      className="searchInputSmile"
                    />
                  </div>
                  <div className="smile-boxs">
                    <ul className="smile-list">
                      {search && search.length > 0 ? (
                        search.map((elem) => (
                          <li key={elem.id} className="smile-item">
                            <p className="smile-text">
                              <span className="smile-span">{elem.smile}</span>
                              <span className="smile-name">{elem.name}</span>
                            </p>
                          </li>
                        ))
                      ) : (
                        <div className="notfount-box">
                          <h1 className="nocarts">
                            No results found!
                            <span className="smile-not-span">😔</span>
                          </h1>
                        </div>
                      )}
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1} className="smile-tabpanel">
                  Item Two
                </TabPanel>
              </Box>
            </Typography>
          </div>
        </Box>
      </Modal> */}
      {/* Modal */}
    </div>
  );
}
