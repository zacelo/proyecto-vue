
<template>
    <div class="container mt-3">        


        <h1 class="mb-2 text-center">─ Panel de administrador ─</h1>
        <button class="btn btn-warning fw-bolder fs-5 " @click="popo('producto')">Productos</button>
        <button class="btn btn-warning fw-bolder fs-5 ms-2" @click="popo('venta')">Ventas</button>

        <TablaProducto :propsTituloTabla='tituloTabla' :propsProductos="productos" @ProductoParaAgregar="PostProducto"
            @ProductoParaEliminar="DelProducto" @ProductoParaModificar="PutProducto" v-if="seccion == 'productos'" />

        <tabla-ventas v-if="seccion == 'ventas'" />
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
            estado: true,
            seccion: localStorage.getItem("seccion")
        }
    },

    mounted() {
        this.GetProductos(),
            this.validarEntradaUsuario()

        if (!this.seccion) {
            localStorage.setItem('seccion', 'productos')
        }

    },
    components: {
        TablaProducto,
        TablaVentas
    },
    computed: {
        ...mapState('usuarios', ['usuario'])
    },
    methods: {
        popo(item) {
            if (item == 'venta') {
                localStorage.setItem('seccion', 'ventas')
                this.seccion = localStorage.getItem("seccion")
            } else {
                localStorage.setItem('seccion', 'productos')
                this.seccion = localStorage.getItem("seccion")
            }

        },
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

<style lang="css" scoped>
h1 {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    font-size: 42px;
    color: #FEA116;
}
</style>