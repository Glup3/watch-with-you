import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { SocketContext } from '../common/context/socketContext'

export const RoomPage = () => {
    const { socket } = useContext(SocketContext)
    const { roomId } = useParams<{ roomId: string }>()
    const [users, setUsers] = useState<string[]>([])

    const handleSetUserList = useCallback((userList: string[]) => {
        setUsers(userList)
    }, [])

    useEffect(() => {
        socket.connect()
        socket.emit('room:join', roomId)

        return () => {
            socket.disconnect()
        }
    }, [socket, roomId])

    useEffect(() => {
        socket.on('room:userList', handleSetUserList)

        return () => {
            socket.off('room:userList', handleSetUserList)
        }
    }, [socket, handleSetUserList])

    return (
        <div>
            <h1>Room ID: {roomId}</h1>
            <p>Users:</p>
            <ul>
                {users.map((u) => (
                    <li key={u}>{u}</li>
                ))}
            </ul>
        </div>
    )
}
