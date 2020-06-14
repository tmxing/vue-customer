import { get, post_json, post } from '@/http/axios'

export default {
    namespaced: true,
    state: {
        allProduct: [],
        allCategory: [],
        product:[]
    },
    getters: {
        newAllProduct(state) {
            return state.allProduct.map((item) => {
                return item.photo;
            })
        }
    },
    mutations: {
        refreshProduct(state,product){
            state.product = product
        },
        refreshAllCategory(state, allCategory) {
            state.allCategory = allCategory
        },
        refreshAllProduct(state, allProduct) {
            state.allProduct = allProduct
        },
    },
    actions: {
        // 根据栏目id查询产品
        async findProductById({commit},id) {
            let res = await get('/product/findByCategoryId',{id});
            // console.log(res.data)
            commit('refreshProduct', res.data)
        },
        async findAllCategory(context) {
            let res = await get('/category/findAll');
            context.commit('refreshAllCategory', res.data)
        },
        async findAllProduct(context) {
            let res = await get('/product/findAll');
            context.commit('refreshAllProduct', res.data)
        },
    }
}