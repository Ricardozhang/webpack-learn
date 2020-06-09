import './app.less';
import React from 'react';
import ReactDOM from 'react-dom';
export class App extends React.Component<{}, {}> {
    render() {
        return'aaa';
    }
}

const element = document.createElement('div');
document.body.append(element);
ReactDOM.render(<App />, element);