import Vue from 'vue'
import Vuex from 'vuex'

import inicioCargaProductos from '@/store/modules/inicioCargaProductos'
import carrito              from '@/store/modules/carrito'
import usuarios              from '@/store/modules/usuarios'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {      
        
    },

    getters: {       
                 
    },

    mutations: {   
         
    },

    actions: {
        
    },

    modules: {
        inicioCargaProductos,
        carrito,
        usuarios
    }
})