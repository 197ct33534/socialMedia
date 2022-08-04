import React from 'react';
import './ProfileCard.scss';
import Cover from 'img/cover.jpg';
import profileImg from 'img/profileImg.jpg';
const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileCard__Images">
        <img src={Cover} alt="" />
        <img
          src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-1/130753826_103801764935995_5967324349921112700_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rQBFVUxtdXAAX-0q3VL&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT_kd3RTSuY_CaF9uHyKrY4d677ABCq3JqrwlcA7T-JnJw&oe=62E8D3C6"
          alt=""
        />
      </div>
      <div className="ProfileCard__Name">
        <span>Nguyễn Thị Ngọc Diễm</span>
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
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="followStatus__follows">
                <span>3</span>
                <span>Post</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? '' : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
