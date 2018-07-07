const routers = [{
    path: '/index',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/mindex.vue'], resolve)
}];
export default routers;