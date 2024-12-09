import Vuex from 'vuex';

import cart from '@/store/modules/cart'
import product from '@/store/modules/product'

export default new Vuex.Store({
    state:{},
    getters:{},
    actions:{},
    mutations:{},
    modules:{
       product,
        cart
       
    }

})