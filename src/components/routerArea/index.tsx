

import React from 'react';
import { Route, Switch, RouteProps, HashRouter } from 'react-router-dom';


export interface IRouteProps extends RouteProps {
    path: string;
    component: any;
    hide?: boolean;
    name?: string;
    children?: IRouteProps[];
}
interface IRouterAreaProps {
    routes: IRouteProps[];
}

export default class RouterArea extends React.Component<IRouterAreaProps, {}> {

    constructor(props: any) {
        super(props);
    }
    render() {
        const { routes } = this.props;
        return (
            <Switch>
                {
                    routes.map(route => {
                        const Component = route.component;
                        return (
                            <Route
                                key={ route.path as string }
                                path={ route.path }
                                exact={ route.exact }
                                render={ () => <Component /> }
                            />
                        );
                    })
                }
            </Switch>
        );
    }
}

