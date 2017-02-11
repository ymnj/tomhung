<template>
	<div id="photos-container">
		<header>
			<h1>Photography</h1>
			<p>Started with a Nikon D80 with a kit 18-55mm & 50mm prime. While using it on trips, I realized the size and weight of a DSLR was too cumbersome for the type of travel photography I enjoy so the hobby never took off. 
			Since then I've switched to a considerably smaller Fujifilm X100T which has been fastastic to shoot with. </p>
		</header>
		<ul>
			<li v-for="cover in albumCovers"><img class="test" @click="navigateTo(cover.title)" :src="cover.url"></li>
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
				url: "http://res.cloudinary.com/tomhung/image/upload/q_60/v1486438922/asia/Taiwan_050611_147"
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

	$font: 'Ek Mukta', sans-serif;

	#photos-container {
		font-family: $font;
		padding: 100px 10% 0;
		background-color: #fff;

		header {
			h1 {
				text-align: center;
				letter-spacing: 1px;
				font-family: $font;
				font-weight: 600;
				font-size: 4.5em;
			}

			p {
				max-width: 600px;
				padding: 5% 0;
				font-size: 1.4em;
				letter-spacing: 1px;
				margin: 0 auto;
			}

			@media only screen and (max-width : 926px) {
				h1 {
					font-size: 4em;
				}

				p {
					font-size: 1.2em;
					padding: 10% 2.5%;
				}
			}

		}
		
		ul {
			padding: 0;
			display: flex;
			flex-wrap: wrap;
			
			li {
				width: 50%;
			}

			img {
				width: 100%;
				position: relative;
				display: block;
			}

			img:hover {
			    opacity: 0.9;
			    cursor: pointer;
			    filter: alpha(opacity=50); /* For IE8 and earlier */
			}
			
			@media only screen  and (max-width : 926px) {
				flex-direction: column;
				li {
					width: 100%;
				}
			}
		}


	}
</style>