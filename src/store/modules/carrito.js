

export default {

  namespaced: true,

  state: {
    productosCarrito: []
  },

  getters: {
     resetearProductoscarrito(state){
           state.productosCarrito = []
     }
  },


  mutations: {
    AgregoCarrito(state, producto) {
      const product = state.productosCarrito.find(
        (element) => element.id == producto.id);

      if (product == undefined) {
        producto.total = producto.precio * producto.cantidad
        state.productosCarrito.push(producto);       
      } else {
        producto.total = producto.precio * producto.cantidad      
      }     
    },
    eliminarProductosCarrito(state, id_cantidad) {

      if (id_cantidad.cantidad > 1) {
        const product = state.productosCarrito.find(
          (element) => element.id == id_cantidad.id          
        );
        product.cantidad -= 1;
        product.total -= product.precio
        
      } else {
        state.productosCarrito = state.productosCarrito.filter(
          (agregarCarrito) => agregarCarrito.id != id_cantidad.id          
        );
       
      }
     
    },   
  },


  actions: {  
    listaCarrito(context, producto) {
      context.commit('AgregoCarrito', producto)
    },
    eliminarProductosCarro(context, id_cantidad) {

      context.commit('eliminarProductosCarrito', id_cantidad)
    },
  }

}