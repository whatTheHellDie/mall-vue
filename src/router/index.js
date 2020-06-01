import Vue from 'vue'
import Router from 'vue-router'
import http from '@/utils/httpRequest'
Vue.use(Router)
const globalRoutes = [
]

// 主入口路由(需嵌套上左右整体布局)
const mainRoutes = {
  path: '/',
  component: resolve=>require(['@/views/main'],resolve),
  name: 'main',
  redirect: {name: 'index'},
  meta: {title: '主入口整体布局'},
  children: [
    // 通过meta对象设置路由展示方式
    // 1. isTab: 是否通过tab展示内容, true: 是, false: 否
    // 2. iframeUrl: 是否通过iframe嵌套展示内容, '以http[s]://开头': 是, '': 否
    // 提示: 如需要通过iframe嵌套展示内容, 但不通过tab打开, 请自行创建组件使用iframe处理!
    {path: '/index', component: resolve=>require(['@/views/index'],resolve), name: 'index', meta: {title: '跨境商城'}},
    {path: '/detail', component: resolve=>require(['@/views/detail'],resolve), name: 'detail', meta: {title: '商品详情',showTab:1}},
    {path: '/confirmOrder', component: resolve=>require(['@/views/confirmOrder'],resolve), name: 'confirmOrder', meta: {title: '确认订单',showTab:1}},
    {path: '/address', component: resolve=>require(['@/views/address'],resolve), name: 'address', meta: {title: '收货地址',showTab:1}},
    {path: '/success', component: resolve=>require(['@/views/success'],resolve), name: 'success', meta: {title: '支付成功',showTab:1}},
    {path: '/orderDetail', component: resolve=>require(['@/views/orderDetail'],resolve), name: 'orderDetail', meta: {title: '订单详情',showTab:1}},
    {path: '/myOrder', component: resolve=>require(['@/views/myOrder'],resolve), name: 'myOrder', meta: {title: '订单详情',showTab:1}},
    {path: '/list', component: resolve=>require(['@/views/list'],resolve), name: 'list', meta: {title: '商品列表',showTab:1}},
    {path: '/login', component: resolve=>require(['@/views/login'],resolve), name: 'login', meta: {title: '登录'}},
  ],
  beforeEnter(to, from, next) {
    // if (to.meta.title) {
    //   document.title = to.meta.title
    // }
    next()
  }
}


const router = new Router({
  scrollBehavior: () => ({y: 0}),
  isAddDynamicMenuRoutes: false, // 是否已经添加动态(菜单)路由
  routes: globalRoutes.concat(mainRoutes)
})

export default router;

//export default new Router({
// routes: [
// {
// path: '/',
// name: 'casino-dapp',
// component: CasinoDapp
// }
// ]
//})
