import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Container, Box, ButtonDiv } from './styles';
import Button from '../Button';
import { FaUser } from 'react-icons/fa'

export default function LoginUserModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <ButtonDiv>
        <FaUser />
        <Button onClick={handleOpen}></Button>
      </ButtonDiv>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <h2>
            Text in a modal
          </h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </Container>
  );
}