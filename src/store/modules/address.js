import {get,post_json,post} from '@/http/axios'

export default {
  namespaced:true,
  state: {
    addresses:[]
  },
  
  mutations: {
    refreshAddress(state,addresses){
      state.addresses = addresses
    }
  },
  actions: {
    //   查询用户的所有地址信息
    async findAddressById(context,id){
      let res = await get('/address/findByCustomerId',{id})
      context.commit('refreshAddress',res.data)
    },
    //   保存地址
    async saveAddress(context,address){
      let res = await post('/address/saveOrUpdate',address)
      return res;
    }
  }
}