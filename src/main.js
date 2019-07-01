import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueYouTubeEmbed from 'vue-youtube-embed'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate, {Validator} from 'vee-validate';  // Add this
import nl from 'vee-validate/dist/locale/nl';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VCalendar from 'v-calendar';


Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed);
Vue.use(BootstrapVue);
Vue.use(VCalendar);
Vue.use(VeeValidate);
Validator.localize('nl', nl);



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
