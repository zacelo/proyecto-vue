<template>
  <div>
    <div class=" container ">

      <div class="row mb-5 mt-4">
        <h1 class=" mt-3 text-center">─ Mis Compras ─</h1>
        <div v-for="(item, index) of usuarioCompras" :key="index" class=" d-flex align-middle justify-content-center">
          <div class="col-12 col-sm-11 border border-3 mt-4 ">
            <div class="text-end  bg-dark py-1 pe-4 color">
              <div class="d-flex justify-content-around ">
                <h4>Fecha: {{ item.fecha }}</h4>
                <h5 class="mt-1">Hora: {{ item.hora }}</h5>
              </div>

            </div>

            <table class="table table-borderless  align-middle mt-0">


              <tbody>
                <tr v-for="(compra, index) of item.compra" :key="index">

                  <th class="  "><img :src="compra.imagen" alt="" class="img me-2" />{{ compra.nombre }}</th>
                  <th class="  text-center ">$ {{ compra.precio }}</th>
                  <th class="  text-center">cant/ {{ compra.cantidad }}</th>
                  <th class="  text-center ">sub-total / ${{ compra.total }}</th>

                </tr>

              </tbody>

              <div>

              </div>

            </table>
            <hr />
            <div>
              <h4 class="text-end me-3 mt-2 mb-3 ">Total: ${{ item.total }}</h4>
            </div>




          </div>
        </div>

      </div>
    </div>


  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      titulos: ['imagen', 'nombre', 'precio', 'cantidad', 'subTotal']
    }
  },
  mounted() {
    this.validarEntradaUsuario()
    this.$store.dispatch("usuarios/comprasUsuario", this.usuario.id)
  },
  computed: {
    ...mapState('usuarios', ['usuario', 'usuarioCompras'])
  },
  methods: {
    validarEntradaUsuario() {
      if (this.usuario.rol == undefined) {
        this.$router.push({ name: 'inicio' })
      } else if (this.usuario.rol == 'admin') {
        this.$router.push({ name: 'panel' })
      }
    },
    ...mapActions('usuarios', ['comprasUsuario'])
   
  }
}

</script>

<style lang="css" scoped>
.img {
  width: 45px;
}

h1 {
  font-family: 'Nunito', sans-serif;
  font-weight: 800;
  color: #FEA116;
  font-size:40px
}

.color {
  color: #FEA116;
  font-family: 'Nunito', sans-serif;

}
</style>