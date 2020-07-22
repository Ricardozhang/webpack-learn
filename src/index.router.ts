
import { IRouteProps } from './components/routerArea';
import loadable from '@loadable/component';
import { routes as aboutRoutes } from '@pages/about/index.router';

export const routes: IRouteProps[] = [{
    path: '/',
    exact: true,
    hide: true,
    component: loadable(() => import('@pages/home'))
}, {
    path: '/home',
    name: '首页',
    component: loadable(() => import('@pages/home'))
}, {
    path: '/about',
    name: '关于',
    component: loadable(() => import('@pages/about')),
    children: aboutRoutes,
}];