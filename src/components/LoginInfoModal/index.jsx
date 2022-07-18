import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Container, Box, DivButton } from './styles';
import Button from '../Button';

export default function LoginInfoModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <DivButton>
        <Button onClick={handleOpen}>!</Button>
      </DivButton>
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