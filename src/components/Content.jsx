import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@mui/material/Container';

const useStyles = makeStyles({
  container: {
      backgroundColor: '#323F4B',
      color: '#F5F7FA',
      height:'100vh',
      width: '100%',
      padding: '0px',
      margin: '0px'
    },
  item: {
    display: 'flex',
    alignItems: 'center'
  }
});

const Content = () => {
    const classes = useStyles()
  return <Container className={classes.container}>
    <div className={classes.item}>
      Content
    </div>
  </Container>;
};

export default Content;
