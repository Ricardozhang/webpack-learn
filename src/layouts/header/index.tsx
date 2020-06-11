
import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';

export default class Header extends React.Component {

    render() {
        // const { routes } = this.props;
        return (
            <header className="header">
                <Menu mode="horizontal" className="menu">
                    {/* {
                        routes.map(router => (
                            <Menu.Item key={ router.path }>
                                <NavLink to={ router.path }>{ router.name }</NavLink>
                            </Menu.Item>
                        ))
                    } */}
                </Menu>
            </header>
        );
    }
}