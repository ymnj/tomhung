import Home from './components/Home.vue';
import Photos from './components/Photos.vue';
import Projects from './components/projects/Projects.vue';
import Album from './components/album/Album.vue';
import Blog from './components/Blog.vue';
import Post from './components/Post.vue';


export const routes = [
	{path: '/', component: Home},
	{path: '/photos', component: Photos},
	{path: '/projects', component: Projects},
	{path: '/photos/:album', component: Album},
	{path: '/blog', component: Blog},
	{path: '/blog/:slug', component: Post}
];