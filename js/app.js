import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Home from './components/Home.js';
import About from './components/About.js';

import Navigation from './components/Navigation.js';

require('./../css/main.scss');

let App = React.createClass({
    render() {
        return (
            <div className="container--wrapper wrapper">
                <div className="banner">
                    <h1 className="title--bigass">First Aid Git</h1>
                </div>

                <Navigation/>
                    <RouteHandler/>
            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
      <Route name="home" path="/" handler={Home}/>
      <Route name="about" path="/about" handler={About}/>
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'))
});
