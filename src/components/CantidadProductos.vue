<template>

 <div class="d-flex mt-3 ">
    <a class="btn mb-2 px-1"> <i class="fas fa-minus fs-6 text-warning" @click="restar()"></i></a>

    <h5 class="align-self-center border px-3">{{ contador }}</h5>

    <a class="btn mb-2 px-1"><i class="fas fa-plus fs-6 text-warning" @click="sumar()"></i></a>

  

  </div>

 
</template>

<script>
export default {
 
  data() {
    return {
      contador: 1
    };
  },
  methods: {
    sumar() {
      this.contador++;
      this.$emit("cantidadProductos", this.contador);
    },
    restar() {
      if (this.contador > 1) {
        this.contador--;
      }
      this.$emit("cantidadProductos", this.contador);
    },
    reset(){      
      this.contador = 1
    }
  },
  props: {
    propCantidad: {
      type: Number
    }
  }
};
</script>

