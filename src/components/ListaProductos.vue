<template>
  <div class="row">
    <div
      class="col-3 mb-3"
      v-for="(item, index) in propListaProductos"
      :key="index"
    >
      <div class="card">
        <img
          :src=item.imagen
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">{{ item.nombre }}</h5>

          <p class="card-text">
            {{ item.descripcion }}
          </p>         
             <h6 class="card-title">Precio: ${{ item.precio }}</h6>
            <CantidadProductos @cantidadProductos="cantidadDeProductos" />    

          <a class="btn btn-primary mt-2" @click="agregarCarrito(item)"
            >Añadir a carrito</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CantidadProductos from "./CantidadProductos.vue";

export default {
  name: "ListaProductos",

  data() {
    return {
      contador: 1,
    };
  },
  methods: {
    agregarCarrito(producto) {
      this.$emit("agregarAlCarrito", producto, this.contador);
       this.contador=1
      this.$swal.fire({
        icon: "success",
        title: "Agregado al Carrito",
        showConfirmButton: false,
        timer: 1000,
      });
    },
    cantidadDeProductos(cant) {      
      this.contador = cant;
    },
  },
  components: {
    CantidadProductos,
  },
  props: {
    propListaProductos: {
      type: Array,
    },
  },
};
</script>

<style lang="css" scoped>
.card-text {
  min-height: 100px;
}
</style>