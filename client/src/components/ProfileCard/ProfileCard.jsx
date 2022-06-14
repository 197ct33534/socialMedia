import React from 'react';
import './ProfileCard.scss';
import Cover from 'img/cover.jpg';
import profileImg from 'img/profileImg.jpg';
const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard__Images">
        <img src={Cover} alt="" />
        <img src={profileImg} alt="" />
      </div>
      <div className="ProfileCard__Name">
        <span>Trần Trung Nghĩa</span>
        <span>I'm a developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="followStatus__follows">
            <span>6.866</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="followStatus__follows">
            <span>1</span>
            <span>Followers</span>
          </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  );
};

export default ProfileCard;
