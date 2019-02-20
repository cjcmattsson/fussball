import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase';
import config from './assets/firebase/apiKey.js';

Vue.config.productionTip = false

// Initialize Firebase
firebase.initializeApp(config)


new Vue({
  render: h => h(App),
}).$mount('#app')
