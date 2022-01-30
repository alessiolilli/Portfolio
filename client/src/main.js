import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './index.css'
import Home from './components/Home.vue'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faInstagram,faLinkedinIn)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueRouter);

const routes=[
  {
    path:'',
    name:'home',
    component:Home
  },
];
const router = new VueRouter({
  mode:'history',
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')