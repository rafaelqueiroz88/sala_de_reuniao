/**
 * Third party components on top
 */
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

/**
 * Custom or app components here
 */
import Books from './Books/Books'

const App = () => {

    return(
        <Fragment>
            <Switch>
                <Route exact path="/" component={Books} />
                <Route exact path="/agenda" component={Books} />
            </Switch>
        </Fragment>
    )
}

export default App