<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="btn botones carrito rounded-pill border border-3 position-relative" data-bs-toggle="modal"
      data-bs-target="#staticBackdrop">
      <i class="bi bi-cart3 h4"></i>
      <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
        {{ productosCarrito.length }}</span>
    </button>


    
  </div>
</template>

<script>
//import axios from "axios";
import { mapState} from 'vuex'

export default {
  data(){
    return{
      saludo:''
    }
  },  
  computed: {
    ...mapState('carrito', ['productosCarrito']),
    ...mapState('usuarios',['usuario']),   
  },  
};
</script>


<style lang="css" scoped>
.carrito{
  background-color:white;
}
</style>
