import Home from './components/Home.vue';
import Photos from './components/Photos.vue';
import Code from './components/Code.vue';
import Album from './components/Album.vue';
import Blog from './components/Blog.vue';
import Post from './components/Post.vue';


export const routes = [
	{path: '/', component: Home},
	{path: '/photos', component: Photos},
	{path: '/code', component: Code},
	{path: '/photos/:album', component: Album},
	{path: '/blog', component: Blog},
	{path: '/blog/:slug', component: Post}
];