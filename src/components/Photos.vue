<template>
	<div id="photos-container">
		<h1>This is Photos</h1>
		<button @click="navigateTo('asia')">Asia</button>
		<button @click="navigateTo('tofino')">Tofino</button>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatibus commodi asperiores maxime pariatur dolore at fugiat 
		voluptatem repellendus ad. Porro odio sunt ipsa incidunt vel, ipsum amet animi sint.</p>
		<button @click="getImg('asia')">Asia</button>
		<button @click="getImg('tofino')">Tofino</button>
		<ul>
			<li v-for="cover in albumCovers"><img :src="cover.url"></li>
		</ul>
	</div>
</template>

<script>

export default {
	data() {
		return {
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
			]
		}
	},
	methods: {
		navigateTo(album) {
			this.$router.push(`/photos/${album}`);
<<<<<<< HEAD
=======
		},

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
>>>>>>> a442dc83329f3845503febf1d976361d41add41b
		}
	}
}
</script>

<style lang="scss">
	#photos-container {
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