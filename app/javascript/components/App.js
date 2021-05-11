/**
 * Third party components on top
 */
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

/**
 * Custom or app components here
 */
import Schedules from './Schedules/Schedules'

const App = () => {

    return(
        <Fragment>
            <Switch>
                <Route exact path="/" component={Schedules} />
                <Route exact path="/agenda" component={Schedules} />
            </Switch>
        </Fragment>
    )
}

export default App