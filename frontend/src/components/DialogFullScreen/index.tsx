import React, { useState, useEffect } from 'react';
import { Dialog, Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';
import { Screen } from './style';

interface DialogProps {
  openDialog: boolean;
}

const DialogFullScreen: React.FC<DialogProps> = ({ openDialog }) => {
  const [open, setOpen] = useState(openDialog);

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
  };
  console.log(`Componet:${open} openDialog:${openDialog}`);

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <button onClick={handleClose}>close</button>
      </Dialog>
    </>
  );
};
export default DialogFullScreen;
