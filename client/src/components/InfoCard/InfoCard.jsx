import React from 'react';
import './InfoCard.scss';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ProfileModal from 'components/profileModal/ProfileModal';
const InfoCard = () => {
  const [modalOpened, setModalOpened] = React.useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info </h4>
        <div>
          <CreateOutlinedIcon width="2rem" heigh="1.2rem" onClick={() => setModalOpened(true)} />
          <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
        </div>
      </div>
      <div className="info">
        <span>
          <b>Status</b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Hồ Chí Minh</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Văn Lang universe</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
