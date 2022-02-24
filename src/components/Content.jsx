import React from 'react';
import { alpha, Box, makeStyles, Paper, Typography } from '@material-ui/core';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: '#323F4B',
      color: '#F5F7FA',
      paddingTop: theme.spacing(10),
      height: '100vh',
      display: (props) => (props.showResults ? "block" : "none")
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
      display: (props) => (props.showResults ? "block" : "none")
    }
}));

const Content = ({ data, showResults}) => {
  const classes = useStyles({ showResults })
  console.log(data)
  return <Container className={classes.container} maxWidth={false}>
    <div className={classes.searchcontainer}>
      <div className={classes.searchbox}>
        {
          data.map((streamer) => (
          <li className={classes.searchitems}>
            <Typography varaint="h5">{streamer}</Typography>
          </li>
          ))
        }
      </div>
    </div>
    
  </Container>;
};

export default Content;
