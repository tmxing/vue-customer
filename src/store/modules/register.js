import {get,post_json,post} from '@/http/axios'

export default {
  namespaced:true,
  state: {
    
  },
  mutations: {
    
  },
  actions: {
   async getVcode(context,telephone){
       return await get('/customer/getVerCode',{telephone});
   },
  }
}