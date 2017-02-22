<template>
	<div id="album-container">
		<div class="cover-image" :style="backgroundImage">
			<div class="cover-text">
				<h1>{{ albumInfo.title | capitalize }}</h1>
				<p>{{ albumInfo.tagLine }}</p>
				<i class="material-icons md-48" @click="scroll">arrow_drop_down_circle</i>
			</div>
		</div>

		<section id="intro">{{ albumInfo.intro }}</section>

		<component v-bind:is="album">
		  <!-- component changes when album changes! -->
		</component>
		
	</div>
</template>

<script>
import cloudinary from 'cloudinary';
import config from '../../config/cloudinary.json';
import axios from 'axios';
import zenscroll from 'zenscroll';

import albums from './albums.js';
import asia from './Asia.vue';
import tofino from './Tofino.vue';

export default {
	data() {
		return {
			album: this.$route.params.album,
			albumInfo: {},
			images: [],
			backgroundImage: "",
			spinner: '../assets/spinner.svg'
		}
	},
	components: {
		asia,
		tofino
	},
	methods: {
		init() {
			this.albumInfo = albums[`${this.album}`];
			this.backgroundImage = `background: url(${this.albumInfo.imgUrl}) #fff no-repeat center center; background-size: cover;`;
		},
		scroll() {
			let duration = 1000;
		  let edgeOffset = 0;
		  let scrollDiv = document.getElementById("main")
		  let myScroller = zenscroll.createScroller(scrollDiv, duration, edgeOffset)
		  let target = document.getElementById("intro")
		  myScroller.to(target);
		}
	},
	mounted() {
		this.init();
	}
}
</script>

<style lang="scss" scoped>
 
	#album-container {
		background-color: #eee;
		font-family: 'Ek Mukta', sans-serif;
		
		.cover-image {
			-webkit-background-size: cover;
		  -moz-background-size: cover;
		  -o-background-size: cover;
		 	background-size: cover;
			
			width: 100%;
		  height: 100vh;
			text-align: center;

		  .cover-text {
		  	position: absolute;
		  	width: 500px;
		  	margin-left: -250px;
		  	top: 40%; 
		  	left: 50%;
		  	max-width: 600px;
		  	// margin: 0 auto;
		  	color: #fff;
			  letter-spacing: 3px;

				.material-icons.md-48 {
					font-size: 48px;
					cursor: pointer;
				}
		  }
		}
		
		#intro {
			max-width: 600px;
			font-size: 1.4em;
			letter-spacing: 1px;
			padding-top: 5%;
			margin: 0 auto;
			line-height: 1.3em;

			@media screen and (max-width: 500px) {
			font-size: 1em;	
			}
		}
		
	}
</style>