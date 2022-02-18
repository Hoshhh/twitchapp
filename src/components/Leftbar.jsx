import React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      backgroundColor: '#1F2933',
      color: '#F5F7FA',
      position: 'sticky'
    },
});

const Leftbar = () => {
    const classes = useStyles();
  return <Container className={classes.container}>
    left bar
  </Container>
};

export default Leftbar;
