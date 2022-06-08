<template>
  <div class="bg-primary p-3 text-center mb-3 d-flex justify-content-evenly">
    <!-- Button trigger modal -->
    <h1 class="text-center text-white">Solo Pizzas</h1>
    <button
      type="button"
      class="btn btn-warning rounded-pill border border-3 position-relative"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      <i class="bi bi-cart3 h4"></i>
      <span
        class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger"
      >
        {{ carrito.length }}</span
      >
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Carrito</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body">
            <table class="table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    v-for="(item, index) in tituloTabla"
                    :key="index"
                    class="bg-warning"
                  >
                    {{ item }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in carrito" :key="index">
                  <th>
                    <img
                      :src=item.imagen
                      class="img-thumbnail img"
                      alt="..."
                    />
                  </th>
                  <td class="align-middle fst-italic">{{ item.nombre }}</td>
                  <td class="align-middle">$ {{ item.precio }}</td>
                  <td class="align-middle">{{ item.cantidad }}</td>
                  <td class="align-middle">{{ item.total }}</td>
                  <td class="align-middle">
                    <i
                      class="bi bi-trash rounded-3 text-danger btn fs-5"
                      @click="eliminarDeCarrito(item.id, item.cantidad)"
                    ></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 class="align-middle text-end pe-4 mx-3 py-2 bg-warning">
            Total: $ {{  total }}
          </h4>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
               @click="PostCompra()"
            >
              Finalizar Compra
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
             
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      cant: 1,
      tituloTabla: ["Imagen", "Producto", "Precio", "Cantidad", "Total", ""],
      total: 0,
      
    };
  },

  props: {
    carrito: {
      type: Array,
    },
  },
  updated() {
    this.precioTotal();
  },

  methods: {
    eliminarDeCarrito(id, cant) {     
      this.$emit("eliminarCarrito", id, cant);
    },
    precioTotal() {
      let valor = 0;
      for (let i = 0; i < this.carrito.length; i++) {
        valor += this.carrito[i].total;
      }
      this.total = valor;
    },
     async PostCompra() {
       let compra = {
         'usuarioId':2,
         'nombre':'Pizza Muzarella',         
         'cantidad':2,
         'precio':125         
       }
       console.log(this.carrito)
              await axios.post("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/comprass", compra)
                .then(respuesta => { 
                    console.log('Se agregó este registro '+ respuesta.data.nombre)
                   
                })
                .catch(error =>{console.log(error.message)})
                             
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
