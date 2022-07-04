<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-dark">
                        <h5 class="modal-title" id="exampleModalLabel">Ingresar</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="validar()">
                            <div class="mb-md-5  ">
                                <div class="form-outline form-white mb-4">

                                    <label class="form-label mt-2 d-block" for="typeEmailX">Nombre Usuario</label>
                                    <input type="text" id="typeEmailX"
                                        class="form-control form-control-lg w-75 d-inline"
                                        placeholder="Ingrese nombre usuario ....." autocomplete="off"
                                        v-model="datosFormulario.usuario" />
                                    <p class="text-success d-inline" v-if="
                                        $v.datosFormulario.usuario.minLength &&
                                        $v.datosFormulario.usuario.required
                                    ">
                                        <i class="bi bi-check-circle-fill fs-5 ms-2"></i>
                                    </p>
                                    <span v-if="!enviado" class=" d-block text-white">_</span>
                                    <span class="text-danger d-block"
                                        v-if="enviado && !$v.datosFormulario.usuario.required">{{
                                                campoVacio
                                        }}</span>
                                    <span class="text-danger d-block"
                                        v-if="enviado && !$v.datosFormulario.usuario.minLength">El
                                        usuario debe tener al menos 4 caracteres</span>

                                </div>

                                <div class="form-outline form-white mb-4">

                                    <label class="form-label mt-2 d-block" for="typePasswordX">Contraseña</label>
                                    <input type="password" id="typePasswordX"
                                        class="form-control form-control-lg w-75 d-inline"
                                        placeholder="Ingrese contraseña ....." v-model="datosFormulario.clave" />
                                    <p class="text-success d-inline" v-if="
                                        $v.datosFormulario.clave.minLength &&
                                        $v.datosFormulario.clave.required
                                    ">
                                        <i class="bi bi-check-circle-fill fs-5 ms-2"></i>
                                    </p>
                                    <span v-if="!enviado" class="text-white d-block">_</span>
                                    <span class="text-danger d-block"
                                        v-if="enviado && !$v.datosFormulario.clave.required">{{
                                                campoVacio
                                        }}</span>
                                    <span class="text-danger d-block"
                                        v-if="enviado && !$v.datosFormulario.clave.minLength">La
                                        contraseña debe tener al menos 6 caracteres</span>

                                </div>

                                <div class="d-flex justify-content-between mt-5 align-items-end">
                                    <div class="text-center ms-4">
                                        <span class="d-block"> ¿Aún no estás Registrado?</span>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#registrar" data-bs-dismiss="modal">Registrate
                                            </a>
                                    </div>

                                    <div>
                                        <button class="btn acceder me-2" type="submit" v-if="
                                        $v.datosFormulario.clave.minLength &&
                                        $v.datosFormulario.clave.required
                                    " data-bs-dismiss="modal">
                                            Acceder
                                        </button>
                                        <button type="button" class="btn btn-secondary "
                                            data-bs-dismiss="modal">Cerrar</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
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
    computed: {
        ...mapState('usuarios', ['usuario'])
    },
    methods: {
        validar() {
            
            this.enviado = true;
            if (this.$v.$invalid) {
                this.campoVacio = "Este Campo esta vacío";
                 
                return false;
            }
           
            let datosForm = { ...this.datosFormulario }
            
           this.$store.dispatch("usuarios/validarUsuario", datosForm);
           
            this.resetearForm()
           
             
        },
       
        resetearForm() {
            this.datosFormulario.usuario = '',
            this.datosFormulario.clave = ''
            this.enviado = false,
            this.campoVacio = ''
        },
        ...mapActions('usuarios', ['validarUsuario'])
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
h5 {
    font-family: 'Nunito', sans-serif;
    font-weight: 800;
    color: #FEA116;
}

.acceder {
    font-family: 'Nunito', sans-serif;
    background-color: #FEA116;
}

.modal {
    height: 470px;
}
</style>
