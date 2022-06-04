import Vue from 'vue'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './router'
import Vuelidate from 'vuelidate'


Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueSweetalert2);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')



