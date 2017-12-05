import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/components/productBox'
import home from './app/components/home'
import configure from './app/components/configure'
import {Router, Route, hashHistory,IndexRoute} from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute/>{/*默认路由*/}
            {/*<Route path='/:userName/:id' component={home}/>/!*输入路径／tab/configure时会默认先匹配第一个路径*!/*/}
            <Route path='/home' component={home}/>
            <Route path='/configure' component={configure}/>
        </Route>
    </Router>, document.getElementById('app'))