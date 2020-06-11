
import React from 'react';
import './index.less';

interface IFooterProps {}
interface IFooterState {}

export default class Footer extends React.Component<IFooterProps, IFooterState> {


    render() {
        return (
            <footer className="wrap">Made with <span className="heart">❤</span>by Ricardo</footer>
        );
    }
}