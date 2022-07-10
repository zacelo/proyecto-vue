<template>
    <div class="mb-5 container">
        <div class="row altura mt-4">
            <div class="col-12 fondo bordes  ">
                <h2 class="text-center bg-dark py-2">Ventas</h2>

                <div class="d-flex justify-content-between ">
                    <div class="col-4 mb-2 bordes p-3  ">
                        <label for="buscar" class="h5 ">Buscar por fecha:</label>
                        <input type="date" v-model="buscarFecha" class="form-control  w-75 mt-2 d-inline"
                            placeholder="Buscar por fecha ....." id="buscar" autocomplete="off">
                        <div class="d-inline">
                            <button class="btn btn-warning ms-2 fw-bolder align-middle pb-1 mb-1 bordes"
                                @click="reset">Reset</button>
                        </div>
                    </div>
                    <div class=" d-flex align-items-end ">
                        <div >
                                                     
                            <paginate-links class="mb-1"
                                :classes="{ ul: ['pagination'], li: ['page-item'], a: ['page-link'] }"
                                for="ventas" :show-step-links="true" :limit="8" :step-links="{
                                    next: 'Siguiente',
                                    prev: 'Anterior'
                                }">
                            </paginate-links>
                            <div class="text-end  mb-2 me-1 rounded h6">
                                <span v-if="$refs.paginator">
                                    ventas {{ $refs.paginator.pageItemsCount }} total
                                </span>
                            </div>
                        </div>
                    </div>


                </div>
                <div>
                    <table class="table">
                        <thead>
                            <tr class="bordes">
                                <th class="bg-warning text-center" v-for="(item, index) of titulos" :key="index">{{ item
                                }}
                                </th>

                            </tr>
                        </thead>
                        <paginate ref="paginator" name="ventas" :list="items" :per="10" tag="tbody">
                            <tr class="align-middle text-center bordes " v-for="(ven, index) in paginated('ventas')"
                                :key="index">
                                <th class="text-center bordes">{{ ven.id }}</th>
                                <td class="text-center bordes">{{ ven.fecha }}</td>
                                <td class="text-center bordes">{{ ven.hora }}</td>
                                <td class="text-center bordes"><button class="btn btn-outline-primary  py-0"
                                        data-bs-toggle="modal" data-bs-target="#datosUsuario"
                                        @click="datoUsuario(ven.idUsuario)">{{ ven.idUsuario }}</button></td>
                                <td class="text-center w-25 bordes">$ {{ ven.total }}</td>                               
                            </tr>
                        </paginate>
                    </table>
                    
                </div>

            </div>


        </div>

        <!-- Modal -->
        <div class="modal fade" id="datosUsuario" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-warning">
                        <h5 class="modal-title" id="exampleModalLabel">Datos Usuario</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div v-for="(user, index) of usuariosTodos" :key="index">

                            <div v-if="user.id == usuario">

                                <span>Nombre: <h4>{{ user.nombre }}</h4></span><br>
                                <span>Email: <h4>{{ user.email }}</h4></span>


                            </div>

                        </div>
                    </div>
                    <div class="modal-footer bg-warning">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    mounted() {
        this.$store.dispatch("usuarios/todasLasVentas")
        this.$store.dispatch("usuarios/todosLosUsuarios")
    },
    data() {
        return {
            titulos: ['Id', 'Fecha', 'Hora', 'Id-Usuario', 'Total'],
            usuario: '',
            buscarFecha: '',
            paginate: ['ventas']
        }
    },

    methods: {
        ...mapActions('usuarios', ['todasLasVentas']),
        datoUsuario(id) {
            this.usuario = id
        },
        async reset() {
            this.buscarFecha = ''
            let buscarFecha = this.buscarFecha
            await buscarFecha

            if (this.$refs.paginator) {
                this.$refs.paginator.goToPage(1)
            }
        },
    },
    computed: {
        items() {
            let formatFecha = this.buscarFecha.split('-');
            formatFecha = formatFecha.reverse().toString().replace(/,/g, "/")

            return this.ventas.filter(item => {
                return item.fecha.includes(formatFecha);
            });
        },
        ...mapState('usuarios', ['ventas', 'usuariosTodos'])
    }
}
</script>

<style lang="css" scoped>
.altura {
    min-height: 750px;
}

h2 {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 37px;
    text-decoration: underline;
    color: #FEA116;
}

td {
    font-size: 20px;
}

.fondo {
    background-color: #f8e6d1;
}

.bordes {
    border: 1px solid rgb(189, 180, 180)
}
</style>