import axios from "axios";
const UrlApi = "https://628cc93ea3fd714fd0395fc2.mockapi.io/api/v1/productos"



const apiServices  = {
     getProductos: async() =>{ 
      try {        
         const  data  = await axios.get(UrlApi);
            return data.data;       
       } catch (err) {console.log ('Error de conección '+err)}      
   },
}
export default apiServices 