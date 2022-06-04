<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
            <FormularioAdmin
            @datosUsuarioLogin='emitDatosUsuarios'
            />        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormularioAdmin from '@/components/admin/FormularioAdmin.vue'
 import axios from "axios";
export default {
     name:'LoginAdmin',
     data(){
       return{
           usuario:'',
           clave:'',          
           usuariosApi:[],
          
       }
     },
     components:{
         FormularioAdmin,
     },
     methods:{
           emitDatosUsuarios(user){
             
              this.usuario=user.usuario
              this.clave=user.clave              
              this.GetUsuarios()
           },
          async GetUsuarios(){
            
                 await axios.get("https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/usuarios")
                 .then(respuesta => { 
                    this.usuariosApi=respuesta.data 
                                     
                    this.validarUsuario()                                               
                })
                 .catch(error =>{console.log(error.message)})
                 .finally(() => {console.log('Finalizo la peticion')})
                
            },
            validarUsuario(){
              for(let item of this.usuariosApi){                    
                   if(item.usuario == this.usuario && item.clave == this.clave){
                     
                     localStorage.setItem('usuario', this.usuario);
                     localStorage.setItem('rol', item.rol); 
                     this.$emit('usuario',item) 
                     if(item.rol == 'admin'){
                          this.$router.push({name:'panel'}) 
                     }else{
                       this.$router.push({name:'micuenta'})
                     }                  
                                                       
                   }
                  
              }
            }
     }
};
</script>
 
<style lang="css" scoped>

</style>