import React from 'react'

const Streams = ({streamId}) => {
    console.log(streamId)
  return (
    <iframe src={`https://player.twitch.tv/?channel=37402112&parent=localhost`} frameborder="0" title="test"></iframe>
  )
}

export default Streams