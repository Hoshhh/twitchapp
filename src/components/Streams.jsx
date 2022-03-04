import React from 'react'

const Streams = ({streamId}) => {
    //console.log(streamId)
  return (
    <iframe 
        src={`https://player.twitch.tv/?channel=${streamId}&parent=localhost`} 
        frameborder="0" 
        title="test" 
        height="500"
        width="350"
    >
    </iframe>
  )
}

export default Streams