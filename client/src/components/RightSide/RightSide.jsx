import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TrendCard from 'components/TrendCard/TrendCard';
import Comment from 'img/comment.png';
import Home from 'img/home.png';
import Noti from 'img/noti.png';
import './RightSide.scss';
const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <SettingsOutlinedIcon />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
    </div>
  );
};

export default RightSide;
