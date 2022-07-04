<template>
  <div class="container" id="barraFija" v-if="usuario.rol != 'admin'">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-3">
      <div>
        <div class="d-flex ">
          <h1 class="m-0 d-inline ms-3">
            <i class="fa fa-utensils me-3"></i>Pizza Ya
          </h1>
          <agregar-carrito class="ms-4" />
        </div>

      </div>



      <button class="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="fa fa-bars"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0 pe-4 ">

          <router-link :to="{ name: 'inicio' }" class=" nav-link text-center" onclick="window.scrollTo(0,0)" exact>
           <span
              data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Inicio</span></router-link>
          <div>
            <router-link :to="{ name: 'nosotros' }" class="nav-link text-center" onclick="window.scrollTo(0,0)"><span
              data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Nosotros</span>
            </router-link>
          </div>

          <router-link :to="{ name: 'menu' }" class=" nav-link text-center" onclick="window.scrollTo(0,0)"><span
              data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Menú</span>
          </router-link>

          <router-link :to="{ name: 'galeria' }" class=" nav-link text-center" onclick="window.scrollTo(0,0)"><span
              data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Galeria</span>
          </router-link>


          <router-link :to="{ name: 'panel-usuario' }" class=" nav-link text-center" v-if="usuario.rol == 'cliente'"
            onclick="window.scrollTo(0,0)"><span
              data-bs-toggle="collapse" data-bs-target="#navbarCollapse">Mi Cuenta</span></router-link>




        



        </div>

      </div>
    </nav>

    <!-- <div >

      <button type="button" class="btn mt-1 ms-1 py-0" data-bs-toggle="modal" data-bs-target="#login"
        v-if="usuario.length == 0">
        <i class="fas fa-user-lock "></i>
        - Iniciar sesion
      </button>


      <div v-if="usuario.length != 0" class="bg-dark py-1 px-2 d-flex align-items-center w-lg-25">
      
        <span class="text-white  mx-1 " id="nom">{{ usuario.nombre }} !!! / </span>
        <button type="button" class="btn  py-0" @click="cerrarSesion">
          <i class="fas fa-user "></i>
          - Cerrar sesion 
        </button>
        
      </div>

    </div> -->

  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import AgregarCarrito from "@/components/AgregarCarrito.vue";
export default {
  components: {
    AgregarCarrito,

  },
  updated() {
    if (this.usuario.rol == 'admin') {
      this.$router.push({ name: 'panel' })
    }
  },
  computed: {
    ...mapState("usuarios", ["usuario"]),
    ...mapGetters("usuarios", ["resetUsuarios"]),
  },
  methods: {
    cerrarSesion() {
      localStorage.removeItem("user");
      this.$store.dispatch('usuarios/resetUsuario')
    },
    ...mapActions('usuarios', ['resetUsuario'])
  },
};
</script>

<style  scoped>
h1 {
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  color: #fea116;
}

#barraFija {
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-dark .navbar-nav .nav-link {
  position: relative;
  margin-left: 25px;

  font-size: 17px;
  color: white;
  text-transform: uppercase;
  font-weight: 500;
  outline: none;
  transition: 0.5s;
  padding-top: 5px;
  padding-bottom: 5px
}


.router-link-exact-active {
  background-color: #fea116;
  cursor: pointer;
  border-radius: 8px;


}
</style>