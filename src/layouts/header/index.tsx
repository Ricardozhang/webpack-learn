
import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';
import { IRouteProps } from '@components/routerArea';

interface IHeaderProps {
    routes: IRouteProps[]
}
export default class Header extends React.Component<IHeaderProps> {

    render() {
        const { routes } = this.props;
        return (
            <header className="header">
                <div className="logo">webpack</div>
                <Menu mode="horizontal" className="menu" theme="dark">
                    {
                        routes.map(router => (
                            router.hide
                            ? null
                            :
                            <Menu.Item key={ router.path as string }>
                                <NavLink to={ router.path }>{ router.name }</NavLink>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </header>
        );
    }
}