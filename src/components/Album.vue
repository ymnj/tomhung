<template>
	<div id="album-container">
		
		<div class="cover-image">
			<h1>Asia</h1>
			<p>Taiwan - Korea - Hong Kong</p>
			<i class="material-icons md-48" @click="scroll">arrow_drop_down_circle</i>
		</div>

		<section id="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatibus itaque natus totam perspiciatis temporibus blanditiis quo quia libero. Ipsum perspiciatis quisquam atque soluta quae hic, velit asperiores corporis officiis. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</section>

		<div class="image-flex-wrap">
			<div class="image-cell" v-for="image in images">
				<img :src="image">
			</div>
		</div>

		<div id="test">hhihhihi
	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		</div>
		
	</div>
</template>

<script>
import cloudinary from 'cloudinary';
import config from '../config/cloudinary.json';
import axios from 'axios';
import zenscroll from 'zenscroll';


cloudinary.config({
  "cloud_name": config.NAME,
  "api_key": config.KEY,
  "api_secret": config.SECRET
});

export default {
	data() {
		return {
			album: this.$route.params.album,
			loading: true,
			images: []
		}
	},
	methods: {
		getImg() {
			let url = cloudinary.url(this.album, {format: 'json', type: 'list'});

			//Cloudinary.url cannot return JSON of all photos in an album. Must manually tag photos for tag search through Cloudinary.url

			axios.get(`http://res.cloudinary.com/tomhung/image/list/${this.album}.json`)
				.then((res) => {
					this.images = res.data.resources.map(item => {
						let id = item.public_id;
						return (function(){
							return cloudinary.url(id, { quality: 70 });
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
		}
	},
	mounted() {
		this.getImg();
	}
}
</script>

<style lang="scss" scoped>
 
	#album-container {
		background-color: white;
		font-family: 'Ek Mukta', sans-serif;

		@media (max-width: 1024px){
			margin-top: 64px;
		}
		
		.cover-image {
			background: url('http://res.cloudinary.com/tomhung/image/upload/q_70/v1/asia/050611_001-Edit') #fff  no-repeat center;
			-webkit-background-size: cover;
		  -moz-background-size: cover;
		  -o-background-size: cover;
		  background-size: cover;
			min-height: 100vh;
			display: -webkit-flex;
		  display: flex;
		  -webkit-flex-direction: column;
		  flex-direction: column;
		  -webkit-align-items: center;
		  align-items: center;
		  -webkit-justify-content: center;
		  justify-content: center;
		  color: #fff;

		  h1 {
		  	font-family: 'Ek Mukta', sans-serif;
		  	letter-spacing: 2px;
		  }

			p {
				max-width: 600px;
				letter-spacing: 2px;
			}

			.material-icons.md-48 {
				font-size: 48px;
				cursor: pointer;
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