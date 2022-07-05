<template>
  <div class="container text-center">
    <banner-contacto/>
    <comp-nosotros/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import BannerContacto from '@/components/BannerContacto.vue'
import CompNosotros from '@/components/CompContacto.vue'
export default {  

    
    
    mounted() {
      if(this.usuario.rol == 'admin'){
         this.$router.push({ name: 'panel' })
      }
    },
    computed: {
        ...mapState('usuarios', ['usuario'])
    },
    components: {
         BannerContacto,
         CompNosotros
    }

}
</script>
