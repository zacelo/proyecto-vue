import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/PaginaInicio.vue')
    },
    {
      path: '/nosotros',
      name: 'nosotros',     
      component: () => import('../views/PaginaNosotros.vue')
    },
    
    {
      path: '/contacto',
      name: 'contacto',     
      component: () => import('../views/PaginaContacto.vue')
    },
   
    {
      path: '/panel-usuario',
      name: 'panel-usuario',     
      component: () => import('../views/PanelUsuario.vue')
    },
    {
      path: '/menu',
      name: 'menu',     
      component: () => import('../views/NuestroMenu.vue')
    },
    
    {
      path: '/admin/Panel',
      name: 'panel',
      component: () => import('../views/PanelAdministrador.vue')
      
    },
  ]

const router = new VueRouter({
    routes
  })
  
  export default router