import Vue from 'vue'
import Router from 'vue-router'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import userCenter from '../components/user/UserCenter'
import messageNotice from '../components/user/MessageNotice'
import collection from "../components/user/Collection";
import userDetail from "../components/user/UserDetail";
import myConcern from "../components/user/MyConcern";
import myWallet from "../components/user/MyWallet";

Vue.use(Router)
Vue.use(Vant)

export default new Router({
  routes: [
    {
      path: '/',
      name:'/userCenter',
      component:userCenter
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/messageNotice',
      name: 'messageNotice',
      component: messageNotice
    },
    {
      path: '/collection',
      name: 'collection',
      component: collection
    },
    {
      path: '/userDetail',
      name: 'userDetail',
      component: userDetail
    },
    {
      path: '/myConcern',
      name: 'myConcern',
      component: myConcern
    },
    {
      path: '/myWallet',
      name: 'myWallet',
      component: myWallet
    }
  ]
})
