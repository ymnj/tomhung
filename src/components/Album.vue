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

		<div class="image-flex-wrap">
			<div class="image-cell" v-for="image in images">
				<img :src="image">
			</div>
		</div>
		
	</div>
</template>

<script>
import cloudinary from 'cloudinary';
import config from '../config/cloudinary.json';
import axios from 'axios';
import zenscroll from 'zenscroll';

import albums from '../albums/albums.js';

cloudinary.config({
  "cloud_name": config.NAME,
  "api_key": config.KEY,
  "api_secret": config.SECRET
});

export default {
	data() {
		return {
			album: this.$route.params.album,
			albumInfo: {},
			images: [],
			backgroundImage: ""
		}
	},
	methods: {
		init() {
			this.albumInfo = albums[`${this.album}`];
			this.backgroundImage = `background: url(${this.albumInfo.imgUrl}) #fff no-repeat center center; background-size: cover;`;
		},
		getImg() {
			let url = cloudinary.url(this.album, {format: 'json', type: 'list'});

			//Cloudinary.url cannot return JSON of all photos in an album. Must manually tag photos for tag search through Cloudinary.url

			axios.get(url)
				.then((res) => {
					this.images = res.data.resources.map(item => {
						let id = item.public_id;
						return (function(){
							return cloudinary.url(id, { quality: 1 });
						})(id);
					});
					this.loading = false;
				}).catch((err) => {
					console.log(err)
				})
		},
		scroll() {
			let duration = 1000;
		  let edgeOffset = 0;
		  let scrollDiv = document.getElementById("main")
		  let myScroller = zenscroll.createScroller(scrollDiv, duration, edgeOffset)
		  let target = document.getElementById("intro")
		  myScroller.to(target);
		},
		infoSetup(album){
			albumInfo = `albums.${album}`;
		}	
	},
	mounted() {
		this.init();
		this.getImg();

	}
}
</script>

<style lang="scss" scoped>
 
	#album-container {
		background-color: #fff;
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

		.image-flex-wrap {
			margin: 5% 10% 0;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
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

		.image-cell {
			width: 48%;
			height: auto;
			margin-bottom: 4%;

			img {
				width: 100%;
				height: 100%;
			}
		}

		

	}
</style>