import './app.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Input } from 'antd';

export class App extends React.Component<{}, {}> {

    constructor(props: any) {
        super(props);
    }
    render() {
        return <React.Fragment>
            <Input /><Button type="primary">确定</Button>
        </React.Fragment>;
    }
}

const element = document.createElement('div');
document.body.append(element);
ReactDOM.render(<App />, element);