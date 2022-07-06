
<template>
    <div class="container mt-4">
        <h1 class="mb-4 text-center">Panel de administrador</h1>
       
        <TablaProducto :propsTituloTabla='tituloTabla' :propsProductos="productos" @ProductoParaAgregar="PostProducto"
            @ProductoParaEliminar="DelProducto" @ProductoParaModificar="PutProducto" />
        

        <tabla-ventas/>
    </div>
</template>

<script>
import TablaProducto from '@/components/admin/TablaProducto.vue'
import TablaVentas from '@/components/admin/TablaVentas.vue'
import axios from "axios";
import { mapState } from 'vuex'

export default {
    name: 'PanelAdministrador',
    data() {
        return {
            tituloTabla: ['Imagen', 'Nombre', 'Precio', 'Descripción', 'Categoría'],
            productos: [],

        }
    },

    mounted() {
        this.GetProductos(),
            this.validarEntradaUsuario()

    },
    components: {
        TablaProducto,
        TablaVentas
    },
    computed: {
        ...mapState('usuarios', ['usuario'])
    },
    methods: {
        validarEntradaUsuario() {
            if (this.usuario.rol == undefined || this.usuario.rol != 'admin') {
                this.$router.push({ name: 'inicio' })                
            } 

        },
        async GetProductos() {
            await axios.get("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos")
                .then(respuesta => {
                    this.productos = respuesta.data
                })
                .catch(error => { console.log(error.message) })
                .finally(() => { console.log('Finalizo la peticion') })
        },
        async PostProducto(product) {
            await axios.post("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos", product)
                .then(respuesta => {
                    console.log('Se agregó este registro ' + respuesta.data.nombre)
                    this.GetProductos()
                })
                .catch(error => { console.log(error.message) })

        },
        async PutProducto(id, product) {

            await axios.put("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos/" + id, product)
                .then(respuesta => {
                    console.log('Se modifico este registro ' + respuesta.data.nombre)
                    this.GetProductos()
                })
                .catch(error => { console.log(error.message) })
        },
        async DelProducto(id) {
            await axios.delete("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos/" + id)
                .then(respuesta => {
                    console.log("Se eliminó " + respuesta.data.nombre)
                    this.GetProductos()
                })
                .catch(error => { console.log(error.message) })
        },

    }
}
</script>

<style lang="scss" scoped>
</style>