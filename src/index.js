import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './sass/app.sass'
const app = document.getElementById('app')
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

ReactDOM.render(<Router>
                    <Switch>
                        <Route path='/' exact component={App} />
                    </Switch>
                </Router>, app)