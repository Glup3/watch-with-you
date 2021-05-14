import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './common/components/Header'

import { Error404Page } from './pages/Error404Page'
import { RoomPage } from './pages/RoomPage'
import { StartPage } from './pages/StartPage'

function App() {
    return (
        <Router>
            <Fragment>
                <Header />
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
            </Fragment>
        </Router>
    )
}

export default App
