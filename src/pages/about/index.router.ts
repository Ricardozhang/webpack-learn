
import { IRouteProps } from '@components/routerArea';
import loadable from '@loadable/component';

export const routes: IRouteProps[] = [{
    path: '/about/content',
    name: '首页',
    component: loadable(() => import('@pages/about/content'))
}, {
    path: '/about/content2',
    name: '关于',
    component: loadable(() => import('@pages/about/content2'))
}];