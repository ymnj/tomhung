<template>
	<div id="photos-container">
		<header>
			<h1>Photography</h1>
			<p>Started with a Nikon D80 with a kit 18-55mm & 50mm prime. While using it on trips, I realized the size and weight of a DSLR was too cumbersome for the type of travel photography I enjoy so my hobby never took off. Many years later with the introduction of mirrorless cameras, I can now happily shoot with my considerably smaller Fujifilm X100T. It's the perfect camera for inconspicuous street photography 
			and easily carried on any trip. I don't shoot as often as I like but I will try to keep this page updated with more photos.</p>
		</header>
		<ul>
			<li v-for="cover in albumCovers"><img @click="navigateTo(cover.title)"  :src="cover.url"></li>
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
		}
	}
}
</script>

<style lang="scss" scoped>
	#photos-container {
		background-color: red;

		header {
			h1 {
				text-align: center;
			}

			p {
				max-width: 500px;
				@media screen and (max-width: 500px) {
				font-size: 0.9em;	
				}
				margin: 0 auto;
			}
		}
		
		ul {
			padding: 0;
			display: flex;
			
			img {
				width: 100%;
			}
			
			@media only screen  and (max-width : 926px) {
				flex-direction: column;
			}
		}


	}
</style>