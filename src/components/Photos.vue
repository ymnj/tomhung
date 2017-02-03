<template>
	<div id="photos-container">
		<h1>This is Photos</h1>
		<button @click="navigateTo('asia')">Asia</button>
		<button @click="navigateTo('tofino')">Tofino</button>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque voluptatibus commodi asperiores maxime pariatur dolore at fugiat 
		voluptatem repellendus ad. Porro odio sunt ipsa incidunt vel, ipsum amet animi sint.</p>
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