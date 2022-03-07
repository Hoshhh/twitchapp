import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    icontainer: {
        padding: '0px',
        margin: '0px',
        display: 'inline-block'
    },
    video: {
        marginRight: '10px',
        marginBottom: '5px',
    }
}))

const Streams = ({ streamId, amount }) => {
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    
    const classes = useStyles()

    const onLoad = () => {
        if (amount === 2){ setWidth("780px"); setHeight("840px"); }
        if (amount === 4){ setWidth("780px"); setHeight("420px"); }
        if (amount === 6){ setWidth("520px"); setHeight("420px"); }
        if (amount === 8){ setWidth("380px"); setHeight("420px"); }
    }

  return (
    <div className={classes.icontainer}>
        <iframe 
            className={classes.video}
            onLoad={() => onLoad()}
            src={`https://player.twitch.tv/?channel=${streamId}&parent=localhost`} 
            frameborder="0" 
            title="test" 
            height={height}
            width={width}
        >
        </iframe>
      </div>
    
  )
}

export default Streams