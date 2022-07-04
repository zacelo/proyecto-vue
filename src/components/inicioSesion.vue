<template>
    <div class="container" id="inicio">

      <button type="button" class="btn mt-1 ms-1 py-0" data-bs-toggle="modal" data-bs-target="#login"
        v-if="usuario.length == 0">
        <i class="fas fa-user-lock "></i>
        - Iniciar sesion
      </button>


      <div v-if="usuario.length != 0" class="bg-dark  py-1 px-2 d-flex align-items-center  ">
      
        <span class="text-white  mx-1" id="nom">{{ usuario.nombre }} / </span>
        <button type="button" class="btn  py-0" @click="cerrarSesion()">
          <i class="fas fa-user "></i>
          - Cerrar sesion 
        </button>
        
      </div>

    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
    export default {
      computed: {
    ...mapState("usuarios", ["usuario"]),
    ...mapGetters("usuarios", ["resetUsuarios"]),
  },
  methods: {
    cerrarSesion() { 
      
      localStorage.removeItem("user");
      this.$store.dispatch('usuarios/resetUsuario')
      if(this.$route.path != '/'){       
         this.$router.push({name:'inicio'})
      }
      this.$swal.fire({
        icon: "error",
        title: "Sesión Cerrada",
        showConfirmButton: false,
        timer: 1500,
      }); 
     
     
    },
    ...mapActions('usuarios', ['resetUsuario'])
  },  
    }
</script>

<style  scoped>
#inicio{
position: relative;  
}
.btn {
  background-color: #fea116;
  font-family: "Heebo", sans-serif;
  font-weight: 400;
  font-size: 15px;
  
}
.btn:hover {
  background-color: #e49554;
  color: black;
  color: rgb(90, 73, 73);
}

#nom{
  text-transform: uppercase;
   font-size: 17px;  
}
</style>