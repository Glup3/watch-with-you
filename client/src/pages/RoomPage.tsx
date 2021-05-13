import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { SocketContext } from '../common/context/socketContext'

export const RoomPage = () => {
    const { socket } = useContext(SocketContext)
    const { roomId } = useParams<{ roomId: string }>()

    useEffect(() => {
        socket.emit('JOIN_ROOM', roomId)

        return () => {
            socket.emit('LEAVE_ROOM', roomId)
        }
    })

    return (
        <div>
            <h1>Room ID: {roomId}</h1>
        </div>
    )
}
