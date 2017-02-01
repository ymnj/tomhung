import Vue from 'vue';
import VueRouter from 'vue-router';
import cloudinary from 'cloudinary';


import cloudinaryConfig from './config/cloudinary.json';

console.log(cloudinaryConfig)
// cloudinary.config({ 
//   cloud_name: 'sample', 
//   api_key: '874837483274837', 
//   api_secret: 'a676b67565c6767a6767d6767f676fe1' 
// });

import App from './App.vue';
import {routes} from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
