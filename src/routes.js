import Home from './components/Home.vue';
import Photos from './components/Photos.vue';
import Projects from './components/Projects.vue';


export const routes = [
	{path: '/', component: Home},
	{path: '/photos', component: Photos},
	{path: '/projects', component: Projects}
];