import "./topbar.css";
import { Search, Chat, Notifications } from "@material-ui/icons";
import AppsIcon from "@material-ui/icons/Apps";
import { NavLink } from "react-router-dom";

export default function Topbar() {

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <NavLink to='/' className="logo">CoderBook</NavLink>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <NavLink className="topbarProfileLinks" to="/profile">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          <span className="topbarImgName">Kamronbey</span>
        </NavLink>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <AppsIcon />
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}
