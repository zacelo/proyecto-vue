import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
       productos:[],
       cantidad:1,      
    },

    getters: {
        listaProductos(state){
            return state.productos
        },
        cantidasSeleccionada(state){
            return state.cantidad
        },
        productosEncarrito(state){
            return state.productosCarrito
        }        
    },

    mutations: {
        cargarProductos(state, data){
               state.productos = data;              
          },

          cantidadTotal(state, cant){
              state.cantidad = cant;            
          },

          AgregoCarrito(state, producto) {           
              const product = state.productosCarrito.find(
              (element) => element.id == producto.id);            
            if (product == undefined) {
              producto.cantidad = state.cantidad
              producto.total = producto.precio * state.cantidad
              state.productosCarrito.push(producto);
            } else {          
             producto.total = producto.precio * state.cantidad            
            }           
          },
         
         
    },

    actions: {
        async GetProductos(context) {
             await axios.get("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos")
                .then(respuesta => {
                   context.commit('cargarProductos',respuesta.data) 
                })
                .catch(error => { console.log(error.message) })
                .finally(() => { console.log('Finalizo la peticion') })
        },

       cantidadSeleccionada(context,cant){
           context.commit('cantidadTotal',cant)
       },

       listaCarrito(context,product, cant){
        context.commit('AgregoCarrito',product, cant)
        },
      
    }
})