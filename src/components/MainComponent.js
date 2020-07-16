import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponents';






class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }

        render() {


            return (
                <div>
                    <Header />
                    <Switch>
                        <Route path='/home' component={} />
                        <Route path='/myaccount' component={} />
                        <Route path='/orders' render={} />
                        <Route path='/messages' render={} />
                        <Route path='/sign-out' render={} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </div>
            );
        };
    }

    export default Main;