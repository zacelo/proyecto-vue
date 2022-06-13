<template>
    <div>
         <div class="container mt-4">
        <div class="row">         
        <div class="col-12">
       
         
         
        <lista-productos/>
      
         
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import ListaProductos from '@/components/ListaProductos.vue';

    export default {
        name: "PaginaInicio",
       
        components: {
           ListaProductos
                   
        },        
        
    }
</script>

