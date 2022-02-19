import React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { makeStyles, Typography } from '@material-ui/core';
import { AccountCircle } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: '#1F2933',
      color: '#F5F7FA',
      height: '100vh',
      paddingTop: theme.spacing(12),
      [theme.breakpoints.up("sm")]: {
        borderRight: '1px solid #3E4C59',
      }
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(3),
      }
    },
    text: {
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      }
    }
}));

const Leftbar = () => {
    const classes = useStyles();
  return <Container className={classes.container}>
    <div className={classes.item}>
      <AccountCircle />
      <Typography className={classes.text}>Streamer</Typography>
    </div>
    <div className={classes.item}>
      <AccountCircle />
      <Typography className={classes.text}>Streamer</Typography>
    </div>
    <div className={classes.item}>
      <AccountCircle />
      <Typography className={classes.text}>Streamer</Typography>
    </div>
    <div className={classes.item}>
      <AccountCircle />
      <Typography className={classes.text}>Streamer</Typography>
    </div>
    <div className={classes.item}>
      <AccountCircle />
      <Typography className={classes.text}>Streamer</Typography>
    </div>
    <div className={classes.item}>
      <AccountCircle />
      <Typography className={classes.text}>Streamer</Typography>
    </div>
    <div className={classes.item}>
      <AccountCircle />
      <Typography className={classes.text}>Streamer</Typography>
    </div>
    <div className={classes.item}>
      <AccountCircle />
      <Typography className={classes.text}>Streamer</Typography>
    </div>
  </Container>
};

export default Leftbar;
