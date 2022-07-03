import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PostShare from 'components/PostShare/PostShare';

const style = {
  position: 'absolute',
  //   top: '50%',
  left: '50%',
  transform: 'translate(-50%, 0)',
  //   width: 'calc(100 % -38rem)',
  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

export default function ShareModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ width: 'calc(1440px - 38rem)' }}>
          <PostShare />
        </Box>
      </Modal>
    </div>
  );
}
