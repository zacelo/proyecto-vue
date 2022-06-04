<template>
  <div class="d-flex">
    <i
      class="bi bi-arrow-left-circle-fill fs-3 btn text-warning"
      @click="restar()"
    ></i>
    <h5 class="align-self-center border px-3 mt-2">{{ contador }}</h5>
    <i
      class="bi bi-arrow-right-circle-fill fs-3 btn text-warning"
      @click="sumar()"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 1,
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
  },
};
</script>

