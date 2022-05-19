import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  Person,
} from "@material-ui/icons";
import HomeIcon from '@material-ui/icons/Home';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li>
            <NavLink className="sidebarListItem" to="/">
              <HomeIcon className="sidebarIcon" />
              <span className="sidebarListItemText">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <Person className="sidebarIcon" />
              <span className="sidebarListItemText">Friends</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="sidebarListItem" to="/notfound">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </NavLink>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
