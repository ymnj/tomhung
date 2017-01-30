import Home from './components/Home.vue';
import Photos from './components/Photos.vue';
import Portfolio from './components/Portfolio.vue';


export const routes = [
	{path: '/', component: Home},
	{path: '/photos', component: Photos},
	{path: '/portfolio', component: Portfolio}
];