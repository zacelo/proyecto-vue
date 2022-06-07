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
            :propListaProductos="productos"
            @agregarAlCarrito="AgregoCarrito"
        />
         
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import ListaProductos from '@/components/ListaProductos.vue';
import AgregarCarrito from "@/components/AgregarCarrito.vue"; 
import axios from "axios";
    export default {
        name: "PaginaInicio",
        mounted(){
           this.GetProductos()
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
     async GetProductos(){
                 await axios.get("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos")
                 .then(respuesta => { 
                     this.productos = respuesta.data                                      
                })
                 .catch(error =>{console.log(error.message)})
                 .finally(() => {console.log('Finalizo la peticion')})
            },

    AgregoCarrito(producto, cantidad) {
     
      const product = this.productosCarrito.find(
        (element) => element.id == producto.id
      );
      if (product == undefined) {
        producto.cantidad = cantidad;
        producto.total = producto.precio * cantidad
        this.productosCarrito.push(producto);
      } else {
        producto.cantidad = cantidad;
          producto.total = producto.precio * cantidad
      
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