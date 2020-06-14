import { get, post_json, post } from '@/http/axios'
// 使用lodash 进行地址的重新引用
import _ from 'lodash'

export default {
    namespaced: true,
    state: {
        orderLines:new Map()
    },
    getters: {
        // 订单总额
        total(state){
            let money = 0;
            for(let item of state.orderLines.values()){
                money += item.price*item.number;
            }
            return money;
        },
    },
    mutations: {
        addShopCar(state,product){
            // 将需要购买的商品存入  使用map集合，如果key键名有重复的，可以进行覆盖
            state.orderLines.set(product.productId,product)
             // 改变orderLines的引用地址，为了让vue监听到
             state.orderLines = _.clone(state.orderLines)
        },
    },
    actions: {
       
    }
}