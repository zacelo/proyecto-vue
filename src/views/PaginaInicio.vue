<template>
    <div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-12">
                    <banner-inicio />                   
                    <lista-productos />
                    <testimonios-web class="bg-dark text-white px-2"/>
                    <componente-contacto/>                   
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ListaProductos from '@/components/ListaProductos.vue';
import BannerInicio from "@/components/BannerInicio.vue";
import TestimoniosWeb from '@/components/TestimoniosWeb.vue'
import ComponenteContacto from '@/components/CompContacto.vue'
import { mapState } from 'vuex'
export default {
    name: "PaginaInicio",

    components: {
        ListaProductos,
        BannerInicio,
        TestimoniosWeb,
        ComponenteContacto

        },
    
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

