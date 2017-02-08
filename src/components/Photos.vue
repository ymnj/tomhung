<template>
	<div id="photos-container">
		<header>

			<h1>Photography</h1>
			<p>Started with a Nikon D80 with a kit 18-55mm & 50mm prime. While using it on trips, I realized the size and weight of a DSLR was too cumbersome for the type of travel photography I enjoy so my hobby never took off. Many years later with the introduction of mirrorless cameras, I can now happily shoot with my considerably smaller Fujifilm X100T. It's great for inconspicuous street photography and easily carried on any trip. </p>
		</header>
		<ul>
			<li v-for="cover in albumCovers"><img @click="navigateTo(cover.title)" :src="cover.url"></li>
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
				url: "http://res.cloudinary.com/tomhung/image/upload/q_1/v1486438922/asia/Taiwan_050611_147"
				},
				{
				title: "tofino",
				description: "Here are some temp words",
				url: "http://res.cloudinary.com/tomhung/image/upload/q_1/v1/tofino/FUJI1158_deslkk"
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

</style>

<style lang="scss" scoped>

	@import url('https://fonts.googleapis.com/css?family=Ek+Mukta');
	$font: 'Ek Mukta', sans-serif;

	#photos-container {
		background-color: salmon;
		font-family: $font;
		padding-top: 100px;

		@media screen and (max-width: 1025px) {
			margin-top: 56.6px;	
		}

		header {
			h1 {
				text-align: center;
				margin-top: 0;
				font-family: $font;
				font-weight: 600;
				font-size: 4.5em;
			}

			p {
				max-width: 600px;
				padding: 5% 0;
				font-size: 1.4em;
				letter-spacing: 1px;
				
				@media screen and (max-width: 500px) {
				font-size: 1em;	
				}
			
			margin: 0 auto;

			}

		}
		
		ul {
			padding: 0;
			display: flex;
			
			li {
				width: 50%;
			}

			img {
				width: 100%;
			}
			
			@media only screen  and (max-width : 926px) {
				flex-direction: column;

			}
		}


	}
</style>