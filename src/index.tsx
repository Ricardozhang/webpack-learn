import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@layouts/header';
import Footer from '@layouts/footer';
import RouterArea from '@components/routerArea';
import { routes } from './index.router';

class App extends React.Component<{}, {}> {

    render() {
        return (
            <Router>
                <div className="normal">
                    <Header routes={ routes } />
                    <div className="body">
                        <RouterArea routes={ routes } />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

const element = document.createElement('div');
document.body.append(element);
ReactDOM.render(<App />, element);
// setTimeout(() => {
//     import(/* webpackChunkName: "print" */'./common').then(module => {
//         module.aaa();
//     });
// }, 5000);
