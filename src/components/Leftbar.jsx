import React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      backgroundColor: '#1F2933',
      color: '#F5F7FA',
      height: '100vh',
      position: 'sticky'
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: '32px',
    },
    icon: {
      fontSize: 40, 
      color: '#F5F7FA', 
      margin: 'auto'
    }
});

const Leftbar = () => {
    const classes = useStyles();
  return <Container className={classes.container}>
    <div className={classes.item}>
      <IconButton className={classes.icon}>
        <AddCircleOutlineIcon fontSize="inherited" />
      </IconButton>
    </div>  
  </Container>
};

export default Leftbar;
