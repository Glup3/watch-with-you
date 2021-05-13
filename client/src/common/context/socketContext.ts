import React from 'react'
import { io } from 'socket.io-client'

export const socket = io('http://localhost:3010')
export const SocketContext = React.createContext({
    socket: socket
})
