<template>
    <div class="container">
        <banner-menu />
        <lista-productos />
        <testimonios-web class="bg-dark text-white px-2"/>
        <componente-contacto/>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ListaProductos from '@/components/ListaProductos.vue';
import BannerMenu from '@/components/BannerMenu.vue'
import TestimoniosWeb from '@/components/TestimoniosWeb.vue'
import ComponenteContacto from '@/components/CompContacto.vue'
export default {
    mounted() {
        this.validarEntradaUsuario()
    },
    components: {
        ListaProductos,
        BannerMenu,
        TestimoniosWeb,
        ComponenteContacto
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

}
</script>

