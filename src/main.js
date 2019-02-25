import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase';
import config from './assets/firebase/apiKey.js';
import VueRouter from 'vue-router';
import routes from './assets/router/routes.js';


Vue.config.productionTip = false

// Initialize Firebase
firebase.initializeApp(config)

Vue.use(VueRouter);

const router = new VueRouter({mode: 'history', routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
