<template>
	<div id="album-container">
		<div class="cover-image" :style="backgroundImage">
			<div class="cover-text">
				<h1>{{ albumInfo.title }}</h1>
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
import zenscroll from 'zenscroll';

import albums from './albums.js';
import asia from './Asia.vue';
import tofino from './Tofino.vue';
import stanleypark from './StanleyPark.vue';
import seatosky from './SeaToSky.vue';

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
		tofino,
		"stanley-park": stanleypark,
		"sea-to-sky": seatosky
	},
	methods: {
		init() {
			this.albumInfo = albums[`${this.album}`];
			this.backgroundImage = `background: #fff url(${this.albumInfo.imgUrl}) no-repeat fixed center top`;
		},
		scroll() {
			let duration = 1000;
		  let edgeOffset = 0;
		  let scrollDiv = document.getElementById("main")
		  let myScroller = zenscroll.createScroller(scrollDiv, duration, edgeOffset)
		  let target = document.getElementById("intro")
		  myScroller.to(target);
		},
		titleFormat(title) {
		
		},
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
		 	position: relative;
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
			padding: 5% 0;
			margin: 0 auto;
			line-height: 1.3em;

			@media screen and (max-width: 926px) {
			font-size: 1em;
			padding: 5%;
			}
		}
		
	}
</style>