<template>
  <div>

    <div class=" mb-5 mt-5">

      <div class="text-center " >
        <h2 class="section-title  text-center  mb-5 ">─── Nuestro Menú ───</h2>
        <!-- <h1 class="mb-5">Elige una Categoría</h1> -->
      </div>
      <div class="tab-class text-center " >
        <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">


          <li class="nav-item " @click="filtrar('Pizza')">
            <a class="d-flex align-items-center text-start  mx-3 pb-3  btn ">
              <div :class="pizza">              
               <i class="fas fa-pizza-slice fa-2x"></i>
              </div>

              <div class="ps-3">

                <h6 class="mt-n1 mb-0 " >Pizzas</h6>
              </div>
            </a>
          </li>
          <li class="nav-item" @click="filtrar('Milanesa')">
            <a class="d-flex align-items-center text-start mx-3 pb-3 btn  ">
              <div :class="milanesa">               
               
                <i class="fas fa-utensils fa-2x"></i>
              </div>

              <div class="ps-3">

                <h6 class="mt-n1 mb-0" >Milanesas</h6>
              </div>
            </a>
          </li>
          <li class="nav-item" @click="filtrar('Hamburguesa')">
            <a class="d-flex align-items-center text-start mx-3 me-0 pb-3 btn">
              <div :class="hamburguesa">
                <i class="fa fa-hamburger fa-2x "></i>
              </div>

              <div class="ps-3">

                <h6 class="mt-n1 mb-0" >Hamburguesas</h6>
              </div>
            </a>
          </li>
        </ul>
        <div class="tab-content wow animate__animated   animate__backInUp ">
          <div class="tab-pane fade show p-0 active">
            <div class="row g-4">

              <div class="col-lg-6 px-md-5 " v-for="(item, index) in listaProductos" :key="index">

                <div class="d-flex align-items-center ">
                  <img class="flex-shrink-0 img-fluid rounded" :src=item.imagen alt="">
                  <div class="w-100 d-flex flex-column text-start ps-4">
                    <h5 class="d-flex justify-content-between border-bottom pb-2">
                      <span>{{ item.nombre }}</span>
                      <span class="precio">${{ item.precio }}</span>
                    </h5>
                    <small class="fst-italic"> {{ item.descripcion }}</small>
                    <div class="d-flex ">
                      <CantidadProductos ref="cantidad" :propCantidad="cantidad"
                        @cantidadProductos="cantidadSeleccionada" />
                      <a class="btn btn-warning btnAnadir mt-3 ms-2" @click="agregarCarrito(item, index)">Agregar</a>


                    </div>

                  </div>

                </div>
                <hr />
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import CantidadProductos from "./CantidadProductos.vue";
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "ListaProductos",

  data() {
    return {
      cantidad: 1,
      product: [],
      productosFiltrados: [],
      pizza: 'activo',
      milanesa: 'desactivo',
      hamburguesa: 'desactivo'
    };
  },
  mounted() {
    this.$store.dispatch("inicioCargaProductos/GetProductos", 'Pizza')
  },
  methods: {

    filtrar(filtro) {
      this.$store.dispatch("inicioCargaProductos/GetProductos", filtro)
      if (filtro == 'Hamburguesa') {
        this.pizza = 'desactivo',
        this.milanesa = 'desactivo',
        this.hamburguesa = 'activo'
      }else if(filtro == 'Milanesa'){
        this.pizza = 'desactivo',
        this.milanesa = 'activo',
        this.hamburguesa = 'desactivo'
      }else{
        this.pizza = 'activo',
        this.milanesa = 'desactivo',
        this.hamburguesa = 'desactivo'
      }
    },

    agregarCarrito(producto, index) {
      producto.cantidad = this.cantidad
      producto.precio = parseInt(producto.precio)
     
      this.$store.dispatch("carrito/listaCarrito", producto);
      
      this.cantidad = 1
      this.$refs.cantidad[index].reset()
      this.$swal.fire({
        icon: "success",
        title: "Agregado al Carrito",
        showConfirmButton: false,
        timer: 1000,
      });
    },
    cantidadSeleccionada(cant) {
      this.cantidad = cant
    },
    ...mapActions('inicioCargaProductos', ['GetProductos']),
    ...mapActions('carrito', ['listaCarrito']),


  },

  computed: {
    ...mapGetters('inicioCargaProductos', ['listaProductos']),

  },
  components: {
    CantidadProductos,
  },
};
</script>

<style lang="css" scoped>
.card-text {
  min-height: 100px;
}

h5 {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;

}

.precio {
  font-size: 24px;

}

.btnAnadir {
  font-family: 'Nunito', sans-serif;
  height: 40px;
}

img {
  width: 100px;
}

.section-title {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  color: #fea116;
  font-size: 37px
}

.activo {
  color: #fea116
}

.desactivo {
  color: #99948f
}
</style>