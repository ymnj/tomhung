<template>
	<div id="album-container">
		<button @click="backToPhotos">Back to Photos</button>
		{{ album }}
		<ul>
			<li v-for="image in images"><img :src="image"></li>
		</ul>
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

//cloudinary.url("asia", {format: "json", type: "list" })
// console.log(cloudinary)

export default {
	data() {
		return {
			album: this.$route.params.album,
			images: []
		}
	},
	methods: {
		backToPhotos() {
			this.$router.push('/photos');
		},

		getImg() {
			let url = cloudinary.url(this.album, {format: 'json', type: 'list'});
		
			axios.get(`http://res.cloudinary.com/tomhung/image/list/${this.album}.json`)
				.then((res) => {
					this.images = res.data.resources.map(item => {
						let id = item.public_id;
						return (function(){
							return cloudinary.url(id, { quality: 100 });
						})(id)
					});
				}).catch((err) => {
					console.log(err)
				})
		}
	},
	mounted() {
		this.getImg();
	}
}
</script>

<style lang="scss">
	#album-container {
		background-color: red;
		
		ul {
			padding: 0;

			li {
				width: 100%;
			}
			
			img {
				width: 50%;
			}
		}


	}
</style>