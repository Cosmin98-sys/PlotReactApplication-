import React, { Component } from 'react';
import { Home } from './components/Home';
import { UtilizatorInfo } from './components/UtilizatorInfo';
import './custom.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from './components/Layout'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Router>
                <Switch>
                    <Layout>
                        <Route path="/" exact component={Home} />
                        <Route path="/UtilizatorInfo" component={UtilizatorInfo} />
                    </Layout>
                </Switch>
            </Router>
        );
    }
}
