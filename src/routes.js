import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import {DynamicRoute} from './components/pages/DynamicRoute';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoute
}];