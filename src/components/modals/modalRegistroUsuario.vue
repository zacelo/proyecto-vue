<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="registrar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h5 class="modal-title " id="exampleModalLabel">Registro Usuario</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="validar">
                            <div class="mb-3">
                                <label for="nombre" class="form-label d-block">Nombre</label>
                                <input type="text" placeholder="Nombre...." v-model="formulario.nombre"
                                    class="form-control w-75 d-inline" id="nombre" aria-describedby="emailHelp"
                                    autocomplete="off" />
                                <p class=" text-danger" v-if="enviado && !$v.formulario.nombre.required">{{ campoVacio }}
                                </p>
                                <p class=" text-danger" v-if="enviado && !$v.formulario.nombre.minLength">Ingrese un
                                    nombre de al menos 3 caracteres</p>
                                <p class=" text-success d-inline"
                                    v-if="$v.formulario.nombre.minLength && $v.formulario.nombre.required"><i
                                        class="bi bi-check-circle-fill fs-4 ms-2"></i></p>
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label d-block">Email</label>
                                <input type="text" placeholder="Email...." v-model="formulario.email"
                                    class="form-control w-75 d-inline" id="email" aria-describedby="emailHelp"
                                    autocomplete="off" />
                                <p class=" text-danger" v-if="enviado && !$v.formulario.email.required">{{ campoVacio }}
                                </p>
                                <p class=" text-danger" v-if="enviado && !$v.formulario.email.email">Ingrese un email
                                    valido</p>
                                <p class=" text-success d-inline"
                                    v-if="$v.formulario.email.required && $v.formulario.email.email"><i
                                        class="bi bi-check-circle-fill fs-4 ms-2"></i></p>
                            </div>

                            <div class="mb-3">
                                <label for="pass" class="form-label d-block">Contraseña</label>
                                <input type="password" placeholder="Contraseña....." v-model="formulario.pass"
                                    class="form-control w-75 d-inline" id="pass" aria-describedby="emailHelp"
                                    autocomplete="off" />
                                <p class=" text-danger" v-if="enviado && !$v.formulario.pass.required">{{ campoVacio }}
                                </p>
                                <p class=" text-danger" v-if="enviado && !$v.formulario.pass.minLength">Contraseña
                                    inválida - Debe tener al menos 8 caracteres</p>
                                <p class=" text-success d-inline"
                                    v-if="$v.formulario.pass.required && $v.formulario.pass.minLength"><i
                                        class="bi bi-check-circle-fill fs-4 ms-2"></i></p>
                            </div>

                            <div class="mb-3">
                                <label for="confirmPass" class="form-label d-block">Confirmar Contraseña</label>
                                <input type="password" placeholder="Confirmar Contraseña....."
                                    v-model="formulario.confirmarPass" class="form-control w-75 d-inline"
                                    id="confirmPass" aria-describedby="emailHelp" autocomplete="off" />

                                <p class=" text-danger" v-if="enviado && !$v.formulario.confirmarPass.confirPass">Las
                                    contraseñas deben ser iguales</p>
                                <p class=" text-success d-inline"
                                    v-if="$v.formulario.confirmarPass.required && $v.formulario.confirmarPass.confirPass"><i
                                        class="bi bi-check-circle-fill fs-4 ms-2"></i></p>
                            </div>

                            <button type="submit" class="btn mt-3 me-2 acceder" v-if="$v.formulario.email.required && $v.formulario.email.email && $v.formulario.confirmarPass.required && $v.formulario.confirmarPass.confirPass" data-bs-dismiss="modal">Registrarse</button>
                            <button type="button" class="btn btn-secondary mt-3" data-bs-dismiss="modal">Cerrar</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "FormularioContacto",
  data() {
    return {    
      enviado:false,
      campoVacio: '',
      formulario:{
          nombre: "",
          email:'',
          pass:'',
          confirmarPass:''
      },
      usuario:{
        nombre:'',
        email:'',
        pass:'',
        rol:'cliente'
      }
    };
  },
  methods: {
    validar(){
      this.enviado=true;       
      if(this.$v.$invalid){
        this.campoVacio='Este Campo esta vacío'
        return false;
      } 

    this.usuario.nombre = this.formulario.nombre
    this.usuario.email = this.formulario.email
    this.usuario.pass = this.formulario.pass

    this.$store.dispatch("usuarios/agregarUsuario", this.usuario);
    
    this.resetearFormulario()
     this.$swal.fire({
        icon: "success",
        title: "Registrado corectamente",
        text: "Ingresa con tu usuario y contraseña",
        showConfirmButton: false,
        timer: 2000,
      });
    },
    resetearFormulario(){    
    
        this.formulario.nombre=""
        this.formulario.email=""
        this.formulario.pass=""
        this.formulario.confirmarPass=""
        this.campoVacio=""
    },
    
    ...mapActions('usuarios',['agregarUsuario','validarUsuario'])
  },
  validations: {
    formulario: {
      nombre:{
        required,
        minLength: minLength(3),
      },
      email :{
        required,
        email,
      },
      pass:{
        required,
        minLength: minLength(8),
      },
      confirmarPass:{
        required,
        confirPass: sameAs("pass")
      }
     
    },    
  },
};
</script>

<style scoped>
h5 {
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    color: #FEA116;
}
.acceder {
    font-family: 'Nunito', sans-serif;
    background-color: #FEA116;
}
</style>