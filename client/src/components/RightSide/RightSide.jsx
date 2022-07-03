import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShareModal from 'components/ShareModal/ShareModal';
import TrendCard from 'components/TrendCard/TrendCard';
import Comment from 'img/comment.png';
import Home from 'img/home.png';
import Noti from 'img/noti.png';
import React from 'react';
import './RightSide.scss';
const RightSide = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <SettingsOutlinedIcon />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />

      <button className="button r-button" onClick={() => setOpen(true)}>
        Share
      </button>
      <ShareModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default RightSide;
