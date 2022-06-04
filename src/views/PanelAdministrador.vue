import TablaProductos from '@/';
<template>
    <div>
       
       <TablaProducto
       :propsTituloTabla='tituloTabla'
       :propsProductos="productos"
       @ProductoParaAgregar="PostProducto"
       @ProductoParaEliminar="DelProducto"
       @ProductoParaModificar="PutProducto"
      
       />
   
    </div>
</template>

<script>
import TablaProducto from '@/components/admin/TablaProducto.vue'
import axios from "axios";

    export default {
        name: 'PanelAdministrador',
        data(){
            return{
              tituloTabla:['Imagen','Nombre','Precio','Descripción','Categoría','',''],
              productos:[],
             
            }
        },
           
        mounted() {
            
            if (localStorage.getItem('rol') == 'admin') {                
              this.GetProductos()                     
            }else{
               this.$router.push({name:'login'})    
            }               
        },
        components: {
            TablaProducto
        },
        
        methods: {
            async GetProductos(){
                 await axios.get("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos")
                 .then(respuesta => { 
                     this.productos = respuesta.data                                      
                })
                 .catch(error =>{console.log(error.message)})
                 .finally(() => {console.log('Finalizo la peticion')})
            },
            async PostProducto(product) {
              await axios.post("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos", product)
                .then(respuesta => { 
                    console.log('Se agregó este registro '+ respuesta.data.nombre)
                    this.GetProductos() 
                })
                .catch(error =>{console.log(error.message)})
                             
            },
            async PutProducto (id,product){
            
               await axios.put("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos/"+id,product)
               .then(respuesta => { 
                    console.log('Se modifico este registro '+ respuesta.data.nombre)
                    this.GetProductos() 
                })
                .catch(error =>{console.log(error.message)})
            },
            async DelProducto (id){
                 await axios.delete("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos/"+id)
                  .then(respuesta =>{
                      console.log("Se eliminó " + respuesta.data.nombre)
                      this.GetProductos() 
                  })
                  .catch(error =>{console.log(error.message)})
            },
            
        }        
    }
</script>

<style lang="scss" scoped>

</style>