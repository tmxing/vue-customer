import { get,post_obj_array} from '@/http/axios'

export default {
    namespaced: true,
    state: {
        allOrder:[],
    },
    getters: {
        // 根据订单状态进行分类过滤
        ordersStatusFilter(state){
            return (status)=>{
                return state.allOrder.filter(item => item.status === status)
            }
        },
    },
    mutations: {
        refreshAllOrder(state,allOrder){
            state.allOrder = allOrder
        },
    },
    actions: {
         // 保存订单
        async saveOrder(context,params){
            let res = await post_obj_array('/order/save',params)
            return res
        },
        // 根据登录客户订单查询其所有订单
        async findAllByUserId({commit},customerId){
            let res = await get('/order/query',{customerId});
            commit('refreshAllOrder',res.data)
        },
    }
}