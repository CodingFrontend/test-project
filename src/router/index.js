import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import News from '../views/News'
import Table from '../views/Table'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {layout: 'AppLayout'}
        },
        {
            path: '/about',
            name: 'About',
            component: About,
            meta: {layout: 'AppLayout'}
        },
        {
            path: '/news',
            name: 'News',
            component: News,
            meta: {layout: 'AppLayout'}
        },
        {
            path: '/table',
            name: 'Table',
            component: Table,
            meta: {layout: 'AppLayout'}
        }
    ],
    mode: "hash",
    base: '/test-project/'
})

export default router