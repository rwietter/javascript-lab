import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import About from './components/About'
import Nav from './components/Nav'
import Shop from './components/Shop'
import Home from './components/Home'

function App() {
    return (
        <Router>

            <div>
                <Nav />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/shop' exact component={Shop} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
