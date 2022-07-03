import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import 'pages/auth/auth.scss';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',

  boxShadow: 24,
  p: 4,
};

export default function ProfileModal({ modalOpened, setModalOpened }) {
  return (
    <div>
      <Modal
        open={modalOpened}
        onClose={() => setModalOpened(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className="infoForm">
            <h3>Your info</h3>

            <div>
              <input type="text" className="infoInput" name="FirstName" placeholder="First Name" />

              <input type="text" className="infoInput" name="LastName" placeholder="Last Name" />
            </div>

            <div>
              <input type="text" className="infoInput" name="worksAT" placeholder="Works at" />
            </div>

            <div>
              <input type="text" className="infoInput" name="livesIN" placeholder="LIves in" />

              <input type="text" className="infoInput" name="Country" placeholder="Country" />
            </div>

            <div>
              <input type="text" className="infoInput" placeholder="RelationShip Status" />
            </div>

            <div>
              Profile Image
              <input type="file" name="profileImg" />
              Cover Image
              <input type="file" name="coverImg" />
            </div>

            <button className="button infoButton">Update</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
