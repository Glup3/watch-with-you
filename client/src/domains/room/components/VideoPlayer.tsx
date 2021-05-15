import React, { useContext, useEffect, useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import YouTube, { Options } from 'react-youtube'
import { YouTubePlayer } from 'youtube-player/dist/types'
import { SocketContext } from '../../../common/context/socketContext'

const playerOptions: Options = {
    width: '100%',
    height: '500px',
    playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0
    }
}

export const VideoPlayer = () => {
    const { socket } = useContext(SocketContext)
    const [player, setPlayer] = useState<YouTubePlayer | null>(null)

    useEffect(() => {
        socket.on('player:onPlay', () => player?.playVideo())
        socket.on('player:onPause', () => player?.pauseVideo())

        return () => {
            socket.off('player:onPlay')
            socket.off('player:onPause')
        }
    }, [socket, player])

    return (
        <Grid item xs={12} md={9}>
            <Box>
                <YouTube
                    opts={playerOptions}
                    videoId="NoYKBAajoyo"
                    onReady={({ target }) => setPlayer(target)}
                    onPlay={() => socket.emit('player:play')}
                    onPause={() => socket.emit('player:pause')}
                />
            </Box>
        </Grid>
    )
}
