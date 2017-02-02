<template>
	<div id="photo-container">
		<h1>This is Photos</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatibus commodi asperiores maxime pariatur dolore at fugiat 
		voluptatem repellendus ad. Porro odio sunt ipsa incidunt vel, ipsum amet animi sint.</p>
		<button @click="getImg('asia')">Asia</button>
		<button @click="getImg('tofino')">Tofino</button>
		<ul>
			<li v-for="cover in albumCovers"><img :src="cover.url"></li>
		</ul>
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
			albumSelected: false,
			albumCovers: [
				{
				title: "asia",
				description: "Here are some temp words",
				url: "http://res.cloudinary.com/tomhung/image/upload/q_100/v1/asia/050611_087"
				},
				{
				title: "tofino",
				description: "Here are some temp words",
				url: "http://res.cloudinary.com/tomhung/image/upload/q_100/v1/tofino/FUJI1158_deslkk"
				}
			],
			images: []
		}
	},
	methods: {
		getImg(album) {
			let url = cloudinary.url(album, {format: 'json', type: 'list'});
			console.log('second', album);
			axios.get(`http://res.cloudinary.com/tomhung/image/list/${album}.json`)
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
	}
}
</script>

<style lang="scss">
	#photo-container {
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