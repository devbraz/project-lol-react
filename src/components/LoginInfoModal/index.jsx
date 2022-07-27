import * as React from 'react';
import Modal from '@mui/material/Modal';

import {
  Container,
  Box,
  DivButton,
  DivPos,
  Title,
  Date,
  Message,
  DivLink
} from './styles';

import Button from '../Button';

import { FaExclamation } from 'react-icons/fa'
import { MdWatchLater } from 'react-icons/md'

export default function LoginInfoModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const arrayInfo =
    [
      {
        id: 1,
        date: '22/09/2018 21:49',
        message:
          `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque suscipit augue eros, sed efficitur mauris 
            bibendum ac. Ut commodo urna ut tempor molestie. 
            Sed vitae leo nec risus hendrerit faucibus id eget mauris.
          `,
        title: 'Neque porro quisquam est qui dolorem'
      },
      {
        id: 2,
        date: '12/05/2025 13:03',
        message:
          `
            Phasellus lacinia sapien ut nibh congue lacinia. 
            Etiam vel dolor id mauris efficitur elementum non sit amet dui. 
            Maecenas lacinia at sem ac pretium. Nullam tempor.
          `,
        title: 'Neque porro quisquam est qui dolorem'
      }
    ]

  return (

    <Container>
      {arrayInfo.length > 0 ?
        <DivButton>
          <Button
            onMouseEnter={handleOpen}
          >
            <FaExclamation />
          </Button>
        </DivButton>
        :
        <></>
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <DivPos>
          </DivPos>
          {arrayInfo.map((info) => {
            return (
              <div key={info.id}>
                <Title>{info.title}</Title>
                <Date><MdWatchLater />{info.date}</Date>
                <Message>{info.message}</Message>
              </div>
            )
          })}
          <DivLink>
            <a href="/login">MAIS DETALHES</a>
          </DivLink>
        </Box>
      </Modal>
    </Container>

  );

}