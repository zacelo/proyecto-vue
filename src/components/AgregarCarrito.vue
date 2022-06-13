<template>
  <div>
    <!-- Button trigger modal -->

    <button type="button" class="btn btn-warning rounded-pill border border-3 position-relative" data-bs-toggle="modal"
      data-bs-target="#staticBackdrop">
      <i class="bi bi-cart3 h4"></i>
      <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
        {{ productosCarrito.length }}</span>
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Carrito</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" v-for="(item, index) in tituloTabla" :key="index" class="bg-warning">
                    {{ item }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in productosCarrito" :key="index">
                  <th>
                    <img :src=item.imagen class="img-thumbnail img" alt="..." />
                  </th>
                  <td class="align-middle fst-italic">{{ item.nombre }}</td>
                  <td class="align-middle">$ {{ item.precio }}</td>
                  <td class="align-middle">{{ item.cantidad }}</td>
                  <td class="align-middle">{{ item.total }}</td>
                  <td class="align-middle">
                    <i class="bi bi-trash rounded-3 text-danger btn fs-5"
                      @click="eliminarDeCarrito(item.id, item.cantidad, item.precio)"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 class="align-middle text-end pe-4 mx-3 py-2 bg-warning">
            Total: $ {{ precioTotal }}
          </h4>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="PostCompra(productosCarrito)">
              Finalizar Compra
            </button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      tituloTabla: ["Imagen", "Producto", "Precio", "Cantidad", "Total", ""],
      total: 0
    };
  },

  computed: {
    ...mapState('carrito', ['productosCarrito']),

    precioTotal() {
      let totalCarrito = this.productosCarrito.reduce((total, producto) => total + producto.total, 0) - this.total
      return totalCarrito
    }
  },

  methods: {



    eliminarDeCarrito(id, cant, precio) {
      this.total = precio
      this.total = 0
      let idNumber = parseInt(id);
      this.$store.dispatch('carrito/eliminarProductosCarro', { id: idNumber, cantidad: cant })
      //mensaje de producto eliminado
      this.$swal.fire({
        icon: "error",
        title: "Producto eliminado",
        showConfirmButton: false,
        timer: 1000,
      });
    },
    ...mapActions('carrito', ['eliminarProductosCarro', 'cargarCarritoDesdeLocal']),

     PostCompra(compra) {
      console.log(compra)   
    },
  },

};
</script>
<style lang="css" scoped>
.img {
  width: 100px;
}

.align-middle {
  font-weight: 600;
}
</style>
