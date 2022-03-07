import React, {useEffect, useState} from 'react';
import { alpha, Box, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import Container from '@mui/material/Container';
import api from '../api';
import { AddCircleOutline } from '@mui/icons-material';
import Streams from './Streams';

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: '#323F4B',
      color: '#F5F7FA',
      paddingTop: theme.spacing(10),
      height: '100%',
      minHeight: '100vh',
      display: (props) => (props.showResults ? "block" : "none"),
    },
    searchcontainer: {
      width: '33%',
      height: '148px',
      backgroundColor: alpha('#F5F7FA', 0.15),
      borderRadius: theme.shape.borderRadius,
      margin: 'auto',
      overflow: 'hidden',
      display: (props) => (props.showResults ? "block" : "none")
    },
    searchbox: {
      overflow: 'auto',
      width: '100%',
      height: '100%',
      paddingRight: '20px',
      display: (props) => (props.showResults ? "block" : "none")
    },
    searchitems: {
      listStyle: 'none',
      margin: '10px',
      marginRight: '0px',
      display: (props) => (props.showResults ? "block" : "none")
    },
    streamerContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      '&:hover': {
            backgroundColor: alpha('#F5F7FA', 0.25)
        },
    },
    addButton: {
      padding: '0px',
      color: '#F5F7FA'
    }
}));

const Content = ({ data, showResults, amount, setStreamer, setStreamList, streamList, setCurrentAmount, currentAmount }) => {

  const fetchUserAvatar = async (id) => {
    const results = await api.get('https://api.twitch.tv/helix/users?id=' + id)
    console.log(results.data.data)
    
    //"amount prop" is the amount of streams you can add
    if (amount > currentAmount) {
      setStreamList(streamList.concat(<Streams streamId={results.data.data[0].login} amount={amount} avatar={results.data.data[0].profile_image_url} />))
      setCurrentAmount(currentAmount + 1)
    }
  }
//console.log("current amount:" + currentAmount)

  const classes = useStyles({ showResults })
  //console.log(data)
  //console.log(streamList)
  
  return <Container className={classes.container} maxWidth={false}>
    <div className={classes.searchcontainer}>
      <div className={classes.searchbox}>
        {
          data.map((streamer) => (
          <li className={classes.searchitems} key={streamer.id}>
            <div className={classes.streamerContainer}>
              <Typography varaint="h5">{streamer.name}</Typography>
              <IconButton className={classes.addButton} onMouseDown={(id) => fetchUserAvatar(streamer.id)}>
                <AddCircleOutline />
              </IconButton>
            </div>
          </li>
          ))
        }
      </div>
    </div>
    {streamList}
  </Container>;
};

export default Content;
