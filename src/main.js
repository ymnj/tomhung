import Vue from 'vue';
import VueRouter from 'vue-router';
import VueLazyload from 'vue-lazyload';

import App from './App.vue';
import {routes} from './routes';


Vue.use(VueRouter);
Vue.use(VueLazyload);

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
