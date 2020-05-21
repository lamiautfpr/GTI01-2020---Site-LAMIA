import React from 'react';
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  List,
  ListItemText,
  Divider,
  ListItem,
  Slide,
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import styled from 'styled-components';

const RedDiv = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
`;
const BlueDiv = styled.div`
  background-color: blue;
  width: 100%;
  height: 100%;
`;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />; // Arrumar o erro do props
});

const App: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Buttao 1
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <>
          <Toolbar>
            <IconButton edge="start" onClick={handleClose} aria-label="close">
              fechar
            </IconButton>
          </Toolbar>
          <RedDiv> Teste 1</RedDiv>
        </>
      </Dialog>
      <Button variant="outlined" color="inherit" onClick={handleClickOpen2}>
        Buttao 2
      </Button>
      <Dialog
        fullScreen
        open={open2}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <>
          <Toolbar>
            <IconButton edge="start" onClick={handleClose2} aria-label="close">
              fechar
            </IconButton>
          </Toolbar>
          <BlueDiv> Teste 2</BlueDiv>
        </>
      </Dialog>
    </div>
  );
};

export default App;
