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
      path: '/mi-cuenta',
      name: 'micuenta',         
      component: () => import('../views/MiCuenta.vue')
    },
    {
      path: '/galeria',
      name: 'galeria',     
      component: () => import('../views/GaleriaImagenes.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoguinUsuario.vue')
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