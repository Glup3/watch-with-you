import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { io } from 'socket.io-client'
import { Error404Page } from './pages/Error404Page'
import { RoomPage } from './pages/RoomPage'
import { StartPage } from './pages/StartPage'

function App() {
    useEffect(() => {
        const socket = io('http://localhost:3010')
        socket.emit('message', 'hi')
    })

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <StartPage />
                </Route>
                <Route path="/rooms/:roomId">
                    <RoomPage />
                </Route>
                <Route path="*">
                    <Error404Page />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
