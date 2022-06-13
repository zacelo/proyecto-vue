import Apis from '@/Api/Apis'

export default {
    
    namespaced: true,

    state: {        
        productos:[],
     },
 
     getters: {      
        listaProductos(state){
            return state.productos
        },   
     },
 
     mutations: {        
        cargarProductos(state, data){
            state.productos = data;              
       },
          
     },
 
     actions: {
        async GetProductos(context) {           
            let cargaProductos = await Apis.getProductos();                       
            context.commit('cargarProductos', cargaProductos)
       },
       
     }


}