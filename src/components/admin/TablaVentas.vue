<template>
    <div class="mb-5">
        <h2 class="mt-5 mb-3">Mis ventas</h2>
        <div class="col-8">
            <table class="table">
                <thead>
                    <tr class="border">
                        <th class="bg-warning text-center" v-for="(item, index) of titulos" :key="index">{{ item }}</th>

                    </tr>
                </thead>
                <tbody>
 
                    <tr class="border" v-for="(ven, index) of ventas" :key="index">
                      
                            <th class="text-center border">{{ ven.id }}</th>
                            <td class="text-center border">{{ ven.fecha }}</td>
                            <td class="text-center border">{{ ven.hora }}</td>
                            <td class="text-center border" ><button class="btn btn-outline-warning  py-0" data-bs-toggle="modal" data-bs-target="#datosUsuario" @click="datoUsuario(ven.idUsuario)">{{ ven.idUsuario}}</button></td>
                            <td class="text-center w-25 border">$ {{ ven.total }}</td>
                         

                    </tr>

                </tbody>
            </table>
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
               
               <span>Nombre: <h4>{{user.nombre}}</h4></span><br>
               <span>Email:  <h4>{{user.email}}</h4></span>
               
              
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
            usuario:''
           
        }
    },
    methods: {
        ...mapActions('usuarios', ['todasLasVentas']),
        datoUsuario(id){
            this.usuario = id
        }
    },
    computed: {
        ...mapState('usuarios', ['ventas', 'usuariosTodos'])
    }
}
</script>

<style lang="scss" scoped>
</style>