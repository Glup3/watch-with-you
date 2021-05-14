import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { SocketContext } from '../common/context/socketContext'
import { Grid } from '@material-ui/core'
import { VideoPlayer } from '../domains/room/components/VideoPlayer'
import { UserList } from '../domains/room/components/UserList'

export const RoomPage = () => {
    const { socket } = useContext(SocketContext)
    const { roomId } = useParams<{ roomId: string }>()

    useEffect(() => {
        socket.connect()
        socket.emit('room:join', roomId)

        return () => {
            socket.disconnect()
        }
    }, [socket, roomId])

    return (
        <Grid container>
            <VideoPlayer />
            <UserList />
        </Grid>
    )
}
