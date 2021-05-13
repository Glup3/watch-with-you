import React from 'react'
import { useParams } from 'react-router'

export const RoomPage = () => {
    const { roomId } = useParams<{ roomId: string }>()

    return (
        <div>
            <h1>Room ID: {roomId}</h1>
        </div>
    )
}
