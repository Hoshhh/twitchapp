import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0px',
        margin: '0px',
        display: 'inline-block'
    },
    video: {
        marginRight: '15px',
    }
}))

const Streams = ({ streamId, amount }) => {
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    
    const classes = useStyles()

    const onLoad = () => {
        if (amount === 2){ setWidth("760px") }
        if (amount === 4){ setWidth("500px") }
        if (amount === 6){ setWidth("300px") }
        if (amount === 8){ setWidth("250px") }
    }

  return (
    <div className={classes.container}>
        <iframe 
            className={classes.video}
            onLoad={() => onLoad()}
            src={`https://player.twitch.tv/?channel=${streamId}&parent=localhost`} 
            frameborder="0" 
            title="test" 
            height="500"
            width={width}
        >
        </iframe>
      </div>
    
  )
}

export default Streams