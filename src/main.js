import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import moment from 'moment'
import './common.css'

// 导入第三方图标库
import './assets/iconfont/icon.css'

// 轮播图 使用懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);

// 全局注册自定义组件
import FullLayout from './components/FullLayout'
import OrderItem from './components/OrderItem'
import AddressItem from './components/AddressItem'
import ProductItem from './components/ProductItem'
Vue.component('x-fulllayout',FullLayout)
Vue.component('x-order-item',OrderItem)
Vue.component('x-address-item',AddressItem)
Vue.component('x-product-item',ProductItem)
// 全局注册过滤器
Vue.filter('datefmt',function(val){
  if(val){
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
  }
  return val;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
