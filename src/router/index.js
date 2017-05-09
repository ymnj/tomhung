import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue';
import Photos from '../components/Photos.vue';
import Projects from '../components/projects/Projects.vue';
import Album from '../components/album/Album.vue';


export const routes = [
  {name: 'Home', path: '/', component: Home},
  {name: 'Photos', path: '/photos', component: Photos},
  {name: 'Projects', path: '/projects', component: Projects},
  {name: 'Album', path: '/photos/:album', component: Album}
];
