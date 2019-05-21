// Make sure ServiceWorkers are supported
if (navigator.serviceWorker) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('test_sw.js')
      .then(reg => console.log('Service Worker Registered'))
      .catch(err => console.log(`Service Worker Error: ${err}`));
  });
}


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VCalendar from 'v-calendar';


Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed);
Vue.use(BootstrapVue);
Vue.use(VCalendar);



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
