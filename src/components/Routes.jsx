import React, { Fragment} from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

//components
import Home from '../pages/home';

const Routes = () => {
    return (
        <Fragment>
            <Router>
                <Link to="/" >home</Link>
                <Link to="/1" >step 1</Link>
                <Link to="/2">step 2</Link>
                <Link to="/3">step 3</Link>
                <Switch>
                    <Route exact path="/1"> <h1>step 1</h1></Route>
                    <Route path="/2"> <h1>step 2</h1></Route>
                    <Route path="/3"> <h1>step 3</h1></Route>
                    <Route path="/"> <Home /> </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default Routes
