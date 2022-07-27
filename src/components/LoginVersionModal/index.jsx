import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Container, Box } from './styles';
import Button from '../Button';

export default function LoginVersionModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true)
  }
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Button onClick={(e) => handleOpen(e)}>V5.2.0.1</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          aaaaa
        </Box>
      </Modal>
    </Container>
  );
}