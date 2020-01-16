import React, { Fragment } from 'react';
import { Data } from './components/Data';
import { BrowserRouter, Route, Redirect, NavLink, Switch } from 'react-router-dom'
import { Courses } from './components/Courses';


function App() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">SWAPI</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/students/1">Characters</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses/1">Courses</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Redirect exact from="/" to="/students" />
                <Route exact path="/students/1" component={Data} />
                <Route path="/courses" component={Courses} />
            </Switch>
        </BrowserRouter>
    );
}
export default App;