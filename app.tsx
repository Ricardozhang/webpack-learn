import './app.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'antd';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Header from '@layouts/header';
import loadable from '@loadable/component';

const OtherComponent = loadable(() => import('@layouts/footer'));

export class App extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Router>
                <div className="normal">
                    <Header />
                    <NavLink to="other">other</NavLink>
                    <div className="body">
                        <Switch>
                            <Route path="/" exact>
                                home
                            </Route>
                            <Route path="/home">
                                <Button>aaa</Button>
                            </Route>
                            <Route path="/about">
                                <Input />
                            </Route>
                            <Route path="/other">
                                <OtherComponent />
                            </Route>
                            <Route path="*">
                                404
                            </Route>
                        </Switch>
                    </div>
                    {/* <Footer /> */}
                </div>
            </Router>
        );
    }
}

const element = document.createElement('div');
document.body.append(element);
ReactDOM.render(<App />, element);