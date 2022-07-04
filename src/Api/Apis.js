import axios from "axios";
const UrlApi = "https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1"



const apiServices  = {
     getProductos: async(filtro) =>{ 
      try { 
        let product =[]    
        const  data  = await axios.get(UrlApi + '/productos');
        if(filtro == 'Todos'){
             return data.data
        }else{
          for(let item of data.data){
            if(filtro == item.categoria){
              product.push(item )
            }
             
          }
              return product;   
        }
           
       } catch (err) {console.log ('Error de conección '+err)}      
     },
     getUsuarios: async() =>{ 
      try {        
         const  data  = await axios.get(UrlApi + '/usuarios');
            return data.data;       
       } catch (err) {console.log ('Error de conección '+err)}      
     },
     getCompras: async() =>{ 
      try {        
         const  data  = await axios.get(UrlApi + '/compras');
            return data.data;       
       } catch (err) {console.log ('Error de conección '+err)}      
     },
      PostUsuario: async(usuario) =>{
      await axios.post(UrlApi + '/usuarios', usuario)
        .then(respuesta => { 
            console.log('Se agregó este usuario '+ respuesta.data.nombre)            
        })
        .catch(error =>{console.log(error.message)})                     
    },
    PostCompra: async(compra) =>{
      await axios.post(UrlApi + '/compras', compra)
        .then(respuesta => { 
            console.log('Se agregó esta compra '+ respuesta.data.fecha)            
        })
        .catch(error =>{console.log(error.message)})                     
    },
}
export default apiServices 