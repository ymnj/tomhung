import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import {routes} from './config/routes';

import '../node_modules/animate.css/animate.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/font-mfizz/font/font-mfizz.css';


import 'lazysizes';

Vue.use(VueRouter);
Vue.use(VueAnalytics, { 
  id: 'UA-96170872-1',
  router 
})


const router = new VueRouter({
	routes,
	mode: 'history',
	scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
