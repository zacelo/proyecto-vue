<template>
  <div>
    <section class="vh-100 gradient-custom">
      <div class="container h-100">
        <div class="row d-flex justify-content-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white" style="border-radius: 1rem">
              <div class="card-body p-5">
                <div class="text-center mb-4 ">
                  <h2>Entrar a la tienda</h2>
                  <img src="@/assets/tienda.jpg" alt="" id="img" />
                </div>

                <form @submit.prevent="validar()">
                  <div class="mb-md-5 mt-md-4 pb-5">
                    <div class="form-outline form-white mb-4">
                      <span class="text-dark ">_</span>
                      <span
                        class="text-danger "
                        v-if="enviado && !$v.datosFormulario.usuario.required"
                        >{{ campoVacio }}</span
                      >
                      <span
                        class="text-danger"
                        v-if="enviado && !$v.datosFormulario.usuario.minLength"
                        >El usuario debe tener al menos 4 caracteres</span
                      >
                      <input
                        type="text"
                        id="typeEmailX"
                        class="form-control form-control-lg"
                        placeholder="Ingrese nombre usuario ....."
                        autocomplete="off"
                        v-model="datosFormulario.usuario"
                      />
                      <label class="form-label mt-2" for="typeEmailX"
                        >Nombre Usuario</label
                      >
                      <p
                        class="text-success d-inline"
                        v-if="
                          $v.datosFormulario.usuario.minLength &&
                          $v.datosFormulario.usuario.required
                        "
                      >
                        <i class="bi bi-check-circle-fill fs-5 ms-2"></i>
                      </p>
                    </div>

                    <div class="form-outline form-white mb-4">
                      <span class="text-dark ">_</span>
                      <span
                        class="text-danger "
                        v-if="enviado && !$v.datosFormulario.clave.required"
                        >{{ campoVacio }}</span
                      >
                      <span
                        class="text-danger"
                        v-if="enviado && !$v.datosFormulario.clave.minLength"
                        >La contraseña debe tener al menos 6 caracteres</span
                      >
                      <input
                        type="password"
                        id="typePasswordX"
                        class="form-control form-control-lg"
                        placeholder="Ingrese contraseña ....."
                        v-model="datosFormulario.clave"
                      />
                      <label class="form-label mt-2" for="typePasswordX"
                        >Contraseña</label
                      >
                      <p
                        class="text-success d-inline"
                        v-if="
                          $v.datosFormulario.clave.minLength &&
                          $v.datosFormulario.clave.required
                        "
                      >
                        <i class="bi bi-check-circle-fill fs-5 ms-2"></i>
                      </p>
                    </div>

                    <button class="btn btn-outline-light btn-lg px-5 " type="submit">
                      Acceder
                    </button>
                  </div>
                   <p class="text-white">Usuario: zacelo</p>
                   <p class="text-white">Contraseña: 123456</p>
                </form>
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "FormularioAdmin",
  data() {
    return {
      datosFormulario: {
        usuario: "",
        clave: "",
      },
      enviado: false,
      campoVacio: "",
    };
  },
  methods: {
    validar() {
      this.enviado = true;
      if (this.$v.$invalid) {
        this.campoVacio = "Este Campo esta vacío";
        return false;
      }
      this.$emit("datosUsuarioLogin", this.datosFormulario);
      this.resetearForm()
    },
    resetearForm(){
      this.datosFormulario.usuario='',
      this.datosFormulario.clave =''
      this.enviado=false,
      this.campoVacio=''
    }
  },
  validations: {
    datosFormulario: {
      usuario: {
        required,
        minLength: minLength(4),
      },
      clave: {
        required,
        minLength: minLength(6),
      },
    },
  },
};
</script>

<style lang="css" scoped>
#img {
  width: 100px;
}
</style>
