<template>
  <div class="container text-center">
    <h1>En construcción</h1>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {  

    
    
    mounted() {
      if(this.usuario.rol == 'admin'){
         this.$router.push({ name: 'panel' })
      }
    },
    computed: {
        ...mapState('usuarios', ['usuario'])
    },

}
</script>
