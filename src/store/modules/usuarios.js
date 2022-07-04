import Apis from "@/Api/Apis";

export default {
  namespaced: true,

  state: {
    usuario: [],
    usuarioCompras:[],
    ventas:[],
    usuariosTodos:[]
  },

  getters: {
   
  },

  mutations: {
     validarUsuario(state, usuario) {      
      state.usuario = usuario; 
      
    },
    resetUser(state){
      state.usuario = []
    },
    cargarUsuarioLocal(state){
      if(JSON.parse(localStorage.getItem("user")) != null){
         state.usuario = JSON.parse(localStorage.getItem("user"))
      }
    },
    comprasDeUsuarios(state,compraUsuario){
       state.usuarioCompras = compraUsuario      
    },
    traerTodasLasVentas(state,ventas){      
       state.ventas = ventas.reverse()      
    },
    traerTodosLosUsuarios(state,usuarios){
       state.usuariosTodos = usuarios;
      
    }
  },

  actions: {
    async agregarUsuario(context, usuario) {
      await Apis.PostUsuario(usuario);
      context;
    },
    async validarUsuario(context, datosForm) {
      let usuarios = await Apis.getUsuarios();
      for (let item of usuarios) {
        if (item.nombre == datosForm.usuario && item.pass == datosForm.clave) {
          const user = {
            id: item.id,
            nombre: item.nombre,
            rol: item.rol,
          };
          localStorage.setItem("user", JSON.stringify(user));
          context.commit("validarUsuario", JSON.parse(localStorage.getItem("user")));
          
        }
      }
     
    },
    resetUsuario(context){
      context.commit('resetUser');
    },
    cargarUsuarioLocalStorage(context){     
      context.commit('cargarUsuarioLocal');
    },
    async comprasUsuario(context,idUsuario) {
      let comprasUsuarios = await Apis.getCompras();
      let compraUsuarioId=[]
      for(let item of comprasUsuarios.reverse()){
         if(item.idUsuario ==idUsuario ){
          compraUsuarioId.push(item)
         }
      }     
      context.commit('comprasDeUsuarios', compraUsuarioId)     
    },
    async todasLasVentas(context){
      let ventas = await Apis.getCompras();     
      context.commit('traerTodasLasVentas',ventas);
    },
    async todosLosUsuarios(context){
      let usuarios = await Apis.getUsuarios();
      let todos = []
      for(let i = 0; i < usuarios.length; i++){
        todos.push({id:usuarios[i].id,nombre:usuarios[i].nombre,email:usuarios[i].email})
        
      }
      
      context.commit('traerTodosLosUsuarios',todos);
      
    },
  },
};
