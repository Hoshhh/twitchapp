import React, { useState } from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { alpha, Avatar, makeStyles, Typography } from '@material-ui/core';
import { Filter2, Filter4, Filter6, Filter8, RemoveCircleOutline } from '@mui/icons-material';

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
      },
      justifyContent: 'space-between'
    },
    streamerContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    text: {
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      },
      marginLeft: '10px'
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
    },
    removeBtn: {
      color: '#F5F7FA'
    },
    avatar: {
      width: '35px',
      height: '35px'
    }
}));

const Leftbar = (props) => {
  const [icon2Color, setIcon2Color] = useState(false) 
  const [icon4Color, setIcon4Color] = useState(false) 
  const [icon6Color, setIcon6Color] = useState(false) 
  const [icon8Color, setIcon8Color] = useState(false) 

  const handleStreamers = (n) => {
    props.changeAmount(n)

    props.setStreamList([])
    props.setCurrentAmount(0)
    

    if (n === 2) {
      setIcon2Color(true)
      setIcon4Color(false)
      setIcon6Color(false)
      setIcon8Color(false)
    }
    if (n === 4) {
      setIcon2Color(false)
      setIcon4Color(true)
      setIcon6Color(false)
      setIcon8Color(false)
    }
    if (n === 6) {
      setIcon2Color(false)
      setIcon4Color(false)
      setIcon6Color(true)
      setIcon8Color(false)
    }
    if (n === 8) {
      setIcon2Color(false)
      setIcon4Color(false)
      setIcon6Color(false)
      setIcon8Color(true)
    }
  }
  const removeStreamer = (id) => {
    const newList = props.streamList.filter(stream => stream.props.streamId !== id)
    //console.log(newList)
    props.setStreamList(newList)

    if (props.currentAmount > 0) {
      props.setCurrentAmount(newList.length)
    }
  }


  const classes = useStyles();
  return <Container className={classes.container}>
    <div className={classes.streams}>
      <div className={classes.btnContainer}>
        <IconButton onClick={() => handleStreamers(2)}>
          <Filter2 
            className={classes.streamsBtn} 
            sx={[
              icon2Color && {
                color: '#00897B'
              }
            ]}
          />
        </IconButton>
      </div>
      <div className={classes.btnContainer}>
        <IconButton onClick={() => handleStreamers(4)}>
          <Filter4 
            className={classes.streamsBtn}
            sx={[
              icon4Color && {
                color: '#00897B'
              }
            ]}
          />
        </IconButton>
      </div>
      <div className={classes.btnContainer}>
        <IconButton onClick={() => handleStreamers(6)}>
          <Filter6 
            className={classes.streamsBtn}
            sx={[
              icon6Color && {
                color: '#00897B'
              }
            ]}
          />
        </IconButton>
      </div>
      <div className={classes.btnContainer}>
        <IconButton onClick={() => handleStreamers(8)}>
          <Filter8 
            className={classes.streamsBtn}
            sx={[
              icon8Color && {
                color: '#00897B'
              }
            ]}
          />
        </IconButton>
      </div>
    </div>

    {
      props.streamList.map(streamer => (
      <div className={classes.item}>
        <div className={classes.streamerContainer}>
          <Avatar className={classes.avatar} src={streamer.props.avatar}/>
          <Typography className={classes.text} >
            {
              streamer.props.streamId
            }
          </Typography>
        </div>
        <IconButton onClick={() => removeStreamer(streamer.props.streamId)}>
          <RemoveCircleOutline className={classes.removeBtn}/>
        </IconButton>
      </div>
      ))
    }
  </Container>
};

export default Leftbar;
