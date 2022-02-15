import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      backgroundColor: '#1F2933',
      color: '#F5F7FA',
      height: '100vh',
    },
    item: {
      display: 'flex',
      alignItems: 'center'
    }
});

const Leftbar = () => {
    const classes = useStyles();
  return <Container className={classes.container}>
      <div className={classes.item}>
          Left bar
        </div>
      
  </Container>
};

export default Leftbar;
