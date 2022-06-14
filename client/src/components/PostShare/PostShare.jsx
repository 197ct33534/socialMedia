import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import EditLocationOutlinedIcon from '@mui/icons-material/EditLocationOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import ProfileIMG from 'img/profileImg.jpg';
import { useRef, useState } from 'react';
import './PostShare.scss';
const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage({ img: URL.createObjectURL(img) });
    }
  };
  return (
    <div className="PostShare">
      <img src={ProfileIMG} alt="" />
      <div>
        <input type="text" placeholder="What's happening" />
        <div className="PostShare__options">
          <div
            className="PostShare__options--option"
            style={{ color: '#4cb256' }}
            onClick={() => imageRef.current.click()}
          >
            <AddPhotoAlternateOutlinedIcon />
            Photo
          </div>
          <div className="PostShare__options--option" style={{ color: '#4a4eb7' }}>
            <PlayCircleOutlineOutlinedIcon />
            Video
          </div>
          <div className="PostShare__options--option" style={{ color: '#ef5757' }}>
            <EditLocationOutlinedIcon />
            Location
          </div>
          <div className="PostShare__options--option" style={{ color: '#e1ae4a' }}>
            <CalendarMonthOutlinedIcon />
            Schedule
          </div>
          <button className="button PostShare__options--btn">Share</button>
          <div style={{ display: 'none' }}>
            <input type="file" name="myImage" ref={imageRef} onChange={handleImageChange} />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <CloseOutlinedIcon
              onClick={() => {
                setImage(null);
              }}
            />
            <img src={image.img} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
