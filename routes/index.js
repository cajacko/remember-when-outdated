var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;

var Loop = require('../views/pages/loop');
var Add = require('../views/pages/add');
var Single = require('../views/pages/single');
var FourOhFour = require('../views/pages/404');
var Layout = require('../views/sublayouts/layout');

// TODO: animate between pages
// TODO: save last state of pages, if recently visited

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={Loop}/>
        <Route path="/add" component={Add}></Route>
        <Route path="/single" component={Single}></Route>
        <Route path="*" component={FourOhFour}></Route>
    </Route>
  </Router>
), document.getElementById('page'));
