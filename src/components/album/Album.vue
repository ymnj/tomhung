<template>
	<div id="album-container">
		<div class="cover-banner">
			<div class="cover-image" :style="backgroundImage"></div>
			<figcaption class="cover-text">
				<h1 class="animated fadeInDown">{{ albumInfo.title }}</h1>
				<p class="animated fadeInUp">{{ albumInfo.tagLine }}</p>
				<i class="fa fa-chevron-circle-down fa-3x animated zoomIn" aria-hidden="true" @click="scroll"></i>
			</figcaption>
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
			this.backgroundImage = `background: url( http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/` + this.albumInfo.imgUrl + `) no-repeat center center fixed; background-size: cover;`;
		},
		scroll() {
			let duration = 1000;
		  let edgeOffset = 0;
			zenscroll.setup(duration, edgeOffset)
		  let target = document.getElementById("intro")
		  zenscroll.to(target);
		}
	},
	beforeMount() {
		this.init();
	}
}
</script>

<style lang="scss" scoped>

	#album-container {

		.cover-image {
		 	position: relative;
		 	top: 0;
		 	left: 0;
			width: 100%;
		  height: 100vh;
			text-align: center;
		}

		.cover-text {
	  	position: absolute;
	  	width: 300px;
	  	height: 220px;
	  	margin-left: -150px;
	  	margin-top: -110px;
	  	top: 50%; 
	  	left: 50%;
	  	text-align: center;
	  	color: #fff;
		  letter-spacing: 3px;

			.material-icons.md-48 {
				max-width: 48px;
				font-size: 48px;
				cursor: pointer;
			}
	  }

	  h1, p, i {
	  	animation-duration: 1s;
			animation-delay: 0.5s;
	  }

		#intro {
			max-width: 600px;
			font-size: 1.4em;
			letter-spacing: 1px;
			padding: 5% 0;
			margin: 0 auto;
			line-height: 1.5em;
		}
	}

	@media screen and (max-width: 926px) {
		#album-container {
			#intro {
				font-size: 1em;
				padding: 5%;
			}
			.cover-image {
				max-width: 926px;
				background-attachment:scroll !important;
			}
		}
	}

	@media screen and (max-width: 450px) {
		#album-container {
			.cover-image {
				max-width: 450px;
			}
		}

		.cover-text h1{
			font-size: 10vw;
		}

		i.fa {
			font-size: 1.5em;
		}
	}
</style>