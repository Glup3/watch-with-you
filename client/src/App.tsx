import React, { useEffect } from 'react'
import { io } from 'socket.io-client'

function App() {
    useEffect(() => {
        const socket = io('http://localhost:3010')
        socket.emit('message', 'hi')
    })

    return (
        <div className="App">
            <h1>Frontend runs</h1>
        </div>
    )
}

export default App
