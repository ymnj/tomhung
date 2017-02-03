import Home from './components/Home.vue';
import Photos from './components/Photos.vue';
import Projects from './components/Projects.vue';
import Album from './components/Album.vue';


export const routes = [
	{path: '/', component: Home},
	{path: '/photos', component: Photos},
	{path: '/projects', component: Projects},
	{path: '/photos/:album', component: Album}
];