import React, { useState } from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { alpha, makeStyles, Typography } from '@material-ui/core';
import { AccountCircle, Filter2, Filter4, Filter6, Filter8 } from '@mui/icons-material';
import { useEffect } from 'react';

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
    },
    streams: {
      marginBottom: theme.spacing(6),
    },
    streamsBtn: {
      color: '#F5F7FA',
      paddingBottom: '0px',
      '&:hover': {
        backgroundColor: alpha('#F5F7FA', 0.25)
      },
    },
    btnContainer: {
      display: 'inline',
    }
}));

const Leftbar = (props) => {
  const [streamerList, setStreamerList] = useState([])
  //const [amount, setAmount] = useState(0)

  const handleStreamers = (n) => {
    props.changeAmount(n)
    let array = [];
    
    for(let i=0; i < n; i++) {
      array.push(
        <div className={classes.item} key={i}>
          <AccountCircle fontSize="large" />
          <Typography className={classes.text}>Streamer</Typography>
        </div>
      )
    }
    setStreamerList(array)
  }

  console.log(streamerList)
  //console.log(amount)

  const classes = useStyles();
  return <Container className={classes.container}>
    <div className={classes.streams}>
      <div className={classes.btnContainer}>
        <IconButton onClick={() => handleStreamers(2)}>
          <Filter2 className={classes.streamsBtn}/>
        </IconButton>
      </div>
      <div className={classes.btnContainer}>
        <IconButton onClick={() => handleStreamers(4)}>
          <Filter4 className={classes.streamsBtn}/>
        </IconButton>
      </div>
      <div className={classes.btnContainer}>
        <IconButton onClick={() => handleStreamers(6)}>
          <Filter6 className={classes.streamsBtn}/>
        </IconButton>
      </div>
      <div className={classes.btnContainer}>
        <IconButton onClick={() => handleStreamers(8)}>
          <Filter8 className={classes.streamsBtn}/>
        </IconButton>
      </div>
    </div>

    {
      streamerList
    }
  </Container>
};

export default Leftbar;
