import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Error404Page } from './pages/Error404Page'
import { RoomPage } from './pages/RoomPage'
import { StartPage } from './pages/StartPage'

function App() {
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
