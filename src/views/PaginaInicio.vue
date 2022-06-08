<template>
    <div>
         <div class="container mt-4">
        <div class="row">
         
        <div class="col-12">

          <agregar-carrito
            :carrito="productosCarrito"
            @eliminarCarrito="eliminarProductosCarrito"
           
          />
         
        <lista-productos
         @listaCarrito="AgregoCarrito"/>
         
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import ListaProductos from '@/components/ListaProductos.vue';
import AgregarCarrito from "@/components/AgregarCarrito.vue"; 
//import axios from "axios";
    export default {
        name: "PaginaInicio",
        mounted(){         
           this.$store.dispatch("GetProductos")
        },
        components: {
           ListaProductos,
           AgregarCarrito,                
        },
         data() {
          return {
            productos: [],
            productosCarrito: [], 
           
          }
        },
   methods: {
    
    AgregoCarrito(producto) {
      const product = this.productosCarrito.find(
        (element) => element.id == producto.id
      );
      if (product == undefined) {
        producto.cantidad = this.$store.getters.cantidasSeleccionada;
        producto.total = producto.precio * this.$store.getters.cantidasSeleccionada
        this.productosCarrito.push(producto);
      } else {
        producto.cantidad = this.$store.cantidasSeleccionada;
          producto.total = producto.precio * this.$store.cantidasSeleccionada
      
      }
     
    },
    eliminarProductosCarrito(id, cant) {

      if (cant > 1) {
        const product = this.productosCarrito.find(
          (element) => element.id == id
        );
        product.cantidad -= 1;
        product.total -= product.precio
        this.$swal.fire({
          icon: "error",
          title: "Producto eliminado",
          showConfirmButton: false,
          timer: 1000,
        });

      } else {
        this.productosCarrito = this.productosCarrito.filter(
          (agregarCarrito) => agregarCarrito.id != id
        );
        this.$swal.fire({
          icon: "error",
          title: "Producto eliminado",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
   
  },
        
    }
</script>

<style lang="css" scoped>

</style>