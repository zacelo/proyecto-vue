<template>
  <div id="app">
    <barra-navegacion/>
    <inicio-sesion/>  
    <router-view />
    <modal-carrito/>
    <modal-ingreso-usuario/>
    <modal-registro-usuario/>  
    <pie-pagina/>  
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
import BarraNavegacion from "@/components/BarraNavegacion.vue"
import  inicioSesion from "@/components/inicioSesion.vue"
import modalIngresoUsuario from "@/components/modals/modalIngresoUsuario.vue"
import modalRegistroUsuario from "@/components/modals/modalRegistroUsuario.vue"
import modalCarrito from '@/components/modals/modalCarrito.vue'
import PiePagina from "@/components/piePagina.vue";

export default {
  name: "App",
  data() {
    return {
    }
  },
  mounted() {
    this.cargarUsuarioLocalStorage()
    this.cargarCarritoLocalStorage()
  },
  components: {
    BarraNavegacion,
    modalIngresoUsuario,
    modalRegistroUsuario,
    modalCarrito,
    inicioSesion,
    PiePagina
  },
  computed: {
    ...mapState('usuarios',['usuario'])
  },
  methods: {
    cargarUsuarioLocalStorage(){
    this.$store.dispatch('usuarios/cargarUsuarioLocalStorage')
    },
    cargarCarritoLocalStorage(){
    this.$store.dispatch('carrito/cargarCarritoLocalStorage')
    },
    ...mapActions('usuarios',['cargarUsuarioLocalStorage']),
    ...mapActions('carrito' ,['cargarCarritoLocalStorage'])
  }
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap');
</style>
