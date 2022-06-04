<template>
  <div id="app">
    <div class="container mt-4 mb-5 text-center">
      <div class="row">
        <div class="col-12">
          <nav>
            <div class="d-flex justify-content-between">
              <div>
                <router-link
                  :to="{ name: 'inicio' }"
                  class="btn btn-warning text-white fw-bolder fs-5"
                  >Inicio</router-link
                >
                |
                <router-link
                  to="/galeria"
                  class="btn btn-warning text-white fw-bolder fs-5"
                  >Galería</router-link
                >
                |
                <router-link
                  to="/nosotros"
                
                  class="btn btn-warning text-white fw-bolder fs-5"
                  >Nosotros</router-link
                >
                |
                 <router-link
                  v-if="datos.boton"
                  :to="{ name: datos.ruta }"
                  class="btn btn-warning text-white fw-bolder fs-5"
                  >{{ datos.nombreBoton }}</router-link
                >
              </div>
              <div>
                <span class="align-bottom me-3 fs-5 "
                  >{{ datos.nombreUsuario + "/" }}
                  <router-link :to='{ name: datos.rutaLogin }' class="fs-5"  v-if="!datos.boton">{{
                    datos.loginLink
                  }}</router-link>
                  <a class="fs-5"  v-if="datos.boton" @click="cerrarSesion">{{
                    datos.loginLink
                  }}</a>
                  
                  </span
                >
                <img :src="require(`${datos.imagenUsuario}`)" alt="" id="user" />
              </div>
          
            </div>
          </nav>
        </div>
      </div>
    </div>

    <router-view 
    @usuario="validarUsuario"
  
     />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.validarLocal();
  },
  data() {
    return {
      datos:JSON.parse(localStorage.getItem("datos")),
     
    };
  },
  methods: {
    validarLocal() {
      if (!localStorage.getItem("usuario")) {
        let datos= {loginLink: "Entrar",
        rutaLogin: "login",
        ruta: "",
        nombreBoton: "",
        nombreUsuario: "usuario",
        imagenUsuario: "./assets/user1.png",
        boton: false,}
        localStorage.setItem("datos", JSON.stringify(datos))
      }
    },
    validarUsuario(usuario) {
     
      if (usuario.rol == "admin") {
        let datos= {loginLink: "Cerrar Sesion",
        rutaLogin: "inicio",
        ruta: "panel",
        nombreBoton: "Panel Administrador",
        nombreUsuario: "Bienvenido " + usuario.usuario,
        imagenUsuario: "./assets/user2.png",
        boton: true,}
        localStorage.setItem("datos", JSON.stringify(datos))
        this.datos=JSON.parse(localStorage.getItem("datos"))       
      }else{
         let datos= {loginLink: "Cerrar Sesion",
        rutaLogin: "inicio",
        ruta: "micuenta",
        nombreBoton: "Mi Cuenta",
        nombreUsuario: "Bienvenido " + usuario.usuario,
        imagenUsuario: "./assets/user2.png",
        boton: true,}
        localStorage.setItem("datos", JSON.stringify(datos))
        this.datos=JSON.parse(localStorage.getItem("datos"))   
      } 
    },
 
    cerrarSesion(){
       localStorage.removeItem('usuario');
       localStorage.removeItem('rol');
       this.validarLocal() 
       this.datos=JSON.parse(localStorage.getItem("datos"))
        this.$router.push({name:'login'}) 
    }
  },
};
</script>

<style>
#user {
  width: 35px;
}
</style>
