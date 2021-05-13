import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { SocketContext } from '../common/context/socketContext'

export const RoomPage = () => {
    const { socket } = useContext(SocketContext)
    const { roomId } = useParams<{ roomId: string }>()

    useEffect(() => {
        socket.emit('room:join', roomId)

        return () => {
            socket.emit('room:leave', roomId)
        }
    })

    return (
        <div>
            <h1>Room ID: {roomId}</h1>
        </div>
    )
}
