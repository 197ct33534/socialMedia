import React from 'react';
import './FollowCard.scss';
import { Followers } from 'Data/FollowersData';
const FollowCard = () => {
  return (
    <div className="FollowCard">
      <h3>Who is following you</h3>
      {Followers.map((follower, idx) => {
        return (
          <div key={`FollowCard-${idx}`} className="follower">
            <div>
              <img className="follower__Img" src={follower.img} alt="" />
              <div className="follower__name">
                <span>
                  <b>{follower.name}</b>
                </span>
                <span>#{follower.username}</span>
              </div>
            </div>
            <button className="button fc--button">Follower</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowCard;
