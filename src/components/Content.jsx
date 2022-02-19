import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: '#323F4B',
      color: '#F5F7FA',
      paddingTop: theme.spacing(10),
      height: '100vh',
    },
}));

const Content = () => {
  const classes = useStyles()
  return <Container className={classes.container} maxWidth={false}>
    Content
  </Container>;
};

export default Content;
