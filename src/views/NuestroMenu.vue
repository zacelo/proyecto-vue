<template>
    <div class="container">
        <banner-menu />
        <lista-productos />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ListaProductos from '@/components/ListaProductos.vue';
import BannerMenu from '@/components/BannerMenu.vue'
export default {
    mounted() {
        this.validarEntradaUsuario()
    },
    components: {
        ListaProductos,
        BannerMenu
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

