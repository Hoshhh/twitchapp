import React from 'react';
import { Box, makeStyles, Paper } from '@material-ui/core';
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
    <Box sx={{ display: 'flex', flexWrap: 'wrap', width: 1280, height: 320}}>
      <Paper>helloooooooooooooooooooooooooo</Paper>
      <Paper>helloooooooooooooooooooooooooo</Paper>
    </Box>
  </Container>;
};

export default Content;
