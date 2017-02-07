<template>
	<div id="album-container">
		<button @click="backToPhotos">Back to Photos</button>
		
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
		backToPhotos() {
			this.$router.push('/photos');
		},

		getImg() {
			let url = cloudinary.url(this.album, {format: 'json', type: 'list'});

			//Cloudinary.url cannot return JSON of all photos in an album. Must manually tag photos for tag search through Cloudinary.url

			axios.get(`http://res.cloudinary.com/tomhung/image/list/${this.album}.json`)
				.then((res) => {
					this.images = res.data.resources.map(item => {
						let id = item.public_id;
						return (function(){
							return cloudinary.url(id, { quality: 100 });
						})(id);
					});
					this.loading = false;
				}).catch((err) => {
					console.log(err)
				})
		}
	},
	mounted() {
		this.loading = true;
		this.getImg();
	}
}
</script>

<style lang="scss" scoped>
	
	body {
		background-image: none;
	}

	#album-container {
		
		.image-flex-wrap {
			background-color: red;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;background-color: red;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between; 
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