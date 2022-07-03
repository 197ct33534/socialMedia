import React from 'react';
import './Post.scss';
import Comment from 'img/comment.png';
import Share from 'img/share.png';
import Heart from 'img/like.png';
import NotLike from 'img/notlike.png';

const Post = ({ data }) => {
  return (
    <div className="post">
      <img src={data.img} alt="" />
      <div className="post__React">
        <img src={data.liked ? Heart : NotLike} alt="" />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>
      <span style={{ color: 'rgba(36, 45, 73, 0.65)', fontSize: '12px' }}>{data.likes} likes</span>
      <div className="post__detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
