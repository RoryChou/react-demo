/**
 * Created by Administrator on 2017/1/17.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var FooterNav = require('../app/components/footer-nav/footer-nav.jsx');
var HomePage = require('../app/components/home/home.jsx');
var FenleiPage = require('../app/components/fenlei/fenlei.jsx');

require('./rem.js');

ReactDOM.render((<Router history={hashHistory}>
                    <Route path='/' component={FooterNav}>
                        <IndexRoute component={HomePage}/>
                        <Route path='/' component={HomePage} />
                        <Route path='/fenlei' component={FenleiPage} />
                    </Route>
                </Router>),document.querySelector('#content'));

