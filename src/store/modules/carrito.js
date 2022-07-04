import Apis from "@/Api/Apis";

export default {
  namespaced: true,

  state: {
    productosCarrito: [],
  },

  getters: {},

  mutations: {
    cargarCarritoLocal(state){
      if(JSON.parse(localStorage.getItem("carrito")) != null){
         state.productosCarrito = JSON.parse(localStorage.getItem("carrito"))
        
      }
    },
    AgregoCarrito(state, producto) {
      
      const product = state.productosCarrito.find(
        (element) => element.id == producto.id
      );
      
      if (product == undefined) {
        producto.total = producto.precio * producto.cantidad;
        state.productosCarrito.push(producto);
        localStorage.setItem('carrito',JSON.stringify(state.productosCarrito)) ; 
      } else {
        
        state.productosCarrito = state.productosCarrito.filter(
          (agregarCarrito) => agregarCarrito.id != producto.id
        );
        producto.total = producto.cantidad * producto.precio
        state.productosCarrito.push(producto);               
        localStorage.setItem('carrito',JSON.stringify(state.productosCarrito)) ;
      }
    },
    eliminarProductosCarrito(state, id_cantidad) {
      if (id_cantidad.cantidad > 1) {
        const product = state.productosCarrito.find(
          (element) => element.id == id_cantidad.id
        );
        product.cantidad -= 1;
        product.total -= product.precio;
        localStorage.setItem('carrito',JSON.stringify(state.productosCarrito)) ; 
      } else {
        state.productosCarrito = state.productosCarrito.filter(
          (agregarCarrito) => agregarCarrito.id != id_cantidad.id
        );
        localStorage.setItem('carrito',JSON.stringify(state.productosCarrito)) ;  
      }
    },
    limpiarElCarrito(state) {
      state.productosCarrito = [];
    },
  },

  actions: {
    listaCarrito(context, producto) {
      context.commit("AgregoCarrito", producto);
    },
    eliminarProductosCarro(context, id_cantidad) {
      context.commit("eliminarProductosCarrito", id_cantidad);
    },
    async agregarCompra(context, compra) {
     
      await Apis.PostCompra(compra);
      context.commit("limpiarElCarrito");
    },
    cargarCarritoLocalStorage(context){     
      context.commit('cargarCarritoLocal');
    },
  },
};
