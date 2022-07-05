<template>
  <div>
    <div class="container">
        <banner-nosotros/>       
      <descripcion-nosotros/>
      <nuestro-equipo class="bg-dark text-white mb-5"/>
      <testimonios-web/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BannerNosotros from "@/components/BannerNosotros.vue"
import DescripcionNosotros from '@/components/DescNosotros.vue'
import NuestroEquipo from '@/components/NuestroEquipo.vue'
import TestimoniosWeb from '@/components/TestimoniosWeb.vue'
    export default {
  mounted() {
    this.validarEntradaUsuario()    
  },
   computed: {
    ...mapState('usuarios', ['usuario'])
  },
   methods: {
    validarEntradaUsuario() {      
      if (this.usuario.rol == 'admin') {
        this.$router.push({ name: 'panel' })
      }
    },
    
   
  },
        components: {
          BannerNosotros,
          DescripcionNosotros,
          TestimoniosWeb,
          NuestroEquipo
        }
    }
</script>


