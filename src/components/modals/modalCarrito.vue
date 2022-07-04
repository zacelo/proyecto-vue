<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h5 class="modal-title" id="staticBackdropLabel"><i class="fas fa-shopping-cart me-3"></i> CARRITO </h5>
            <i class="fa-solid fa-cart-shopping-fast bg-white"></i>
            <button type="button" class="btn-close btnCerrar" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body ">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" v-for="(item, index) in tituloTabla" :key="index">
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
          <h4 class="align-middle text-end pe-4 mx-3 py-2">
            Total: $ {{ precioTotal }}
          </h4>
          <div class="modal-footer bg-dark d-flex justify-content-between">


            <div class="text-center">
              <div v-if="usuario.length == 0">
                <span class="text-white ms-5 d-block">Para finalizar la compra debes ingresar
                  como usuario</span>
                <a href="#" data-bs-toggle="modal" data-bs-target="#login">Ingresar
                  !!!</a>
              </div>

              <button type="button" class="btn  btnFinalizarCompra" data-bs-dismiss="modal"
                @click="PostCompra(productosCarrito)" v-if="productosCarrito.length != 0 && usuario.length != 0">
                Finalizar Compra
              </button>
            </div>




            <button type="button" class="btn  btnCerrar" data-bs-dismiss="modal">
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
import { mapState, mapActions} from 'vuex'

export default {
  data() {
    return {
      tituloTabla: ["Imagen", "Producto", "Precio", "Cantidad", "Total", ""],
      total: 0
    };
  },

  computed: {
    ...mapState('carrito', ['productosCarrito']),   
    ...mapState('usuarios', ['usuario']),
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
      let date = new Date();
      let fecha = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear()        
      let hora = date.toLocaleTimeString() 
      let compraTotal = {
          idUsuario: parseInt(this.usuario.id),
          fecha:fecha,
          hora:hora,         
          compra:compra,
          total: this.precioTotal
      }
      this.$store.dispatch('carrito/agregarCompra', compraTotal)
      this.$swal.fire({
        icon: "success",
        title: "Su Compra a sido procesada",
        showConfirmButton: false,
        timer: 1500,
      });
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

.btn {
  font-family: 'Heebo', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
}

.carrito {
  background-color: white;
}

.btnFinalizarCompra {
  background-color: #FEA116;
  color: white;

}

.btnCerrar {
  background-color: rgb(121, 115, 115);
  color: white;
}

h5 {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: #FEA116;
}
</style>
