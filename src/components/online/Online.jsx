import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
      {/* <div className="rightTooltipbox">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt="image"
        />
        <div className="tooltipInfo-box">
          <span>{user.username}</span>
            <div className="tooltip-person-box">
              <PeopleAltIcon className='tooltip-icon'/>
              <span>87 friends</span>
            </div>
            <div className="tooltip-lacation-box">
              <AddLocationIcon className="tooltip-loaction-icon"/> 
              <span>Lives in New York, USA</span>
            </div>
        </div>
      </div> */}
    </li>
  );
}
