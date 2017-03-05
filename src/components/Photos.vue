<template>
	<div id="photos-container">
		<header>
			<h1>Photography</h1>
			<p>Started with a Nikon D80 with a kit 18-55mm & 50mm prime. While using it on trips, I realized the size and weight of a DSLR was too cumbersome for the type of travel photography I enjoy so the hobby never took off. 
			Since then I've switched to a considerably smaller Fujifilm X100T which has been fastastic to shoot with. </p>
		</header>
		<ul>
			<li v-for="cover in albumCovers" @click="navigateTo(cover.url)" class="animated fadeIn">
				<img v-lazy="cover.imgUrl" lazy="loading">
				<figcaption class="coverDescription">
					<h2>{{cover.title}}</h2>
					<p>{{cover.tagLine}}</p>
				</figcaption>
			</li>
		</ul>
	</div>
</template>

<script>		

import albums from './album/albums.js';

export default {
	data() {
		return {
			albumCovers: albums
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

		@media only screen and (max-width : 926px) {
			padding: 100px 0 0;	
		}

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
					padding: 10% 5%;
				}
			}

		}
		
		ul {
			padding: 0;
			margin: 0;
			display: flex;
			flex-wrap: wrap;
			
			li {
				width: 50%;
				position: relative;
				text-align: center;
				overflow: hidden;


				//Animate CSS delay to render after transition fadein
				-webkit-animation-duration: 2s;
			  -webkit-animation-delay: 0.25s;
			  -moz-animation-duration: 1s;
			  -moz-animation-delay: 0.25s;
			  -o-animation-duration: 1s;
			  -o-animation-delay: 0.25s;
			  -ms-animation-duration: 1s;
			  -ms-animation-delay: 0.25s;
			  
				.coverDescription {
					background-color: rgba(0, 0, 0, 0.5);
					opacity: 0;
					color: #fff;
					position: absolute;
				 	top: 0; 
				  left: 0; 
				 	padding-top: 20%;
				  width: 100%;  
				  height: 100%; 
				  margin: 0 auto;

				  p {
				  	letter-spacing: 5px;
				  }
				}

			}

			img {
				max-width: 100%;
				position: relative;
				display: block;
			}

			img[lazy=loading] {
			 	background: url('../assets/spinner.svg') no-repeat center center; 
			}
	
			li:hover {
					transition: all 1s ease;
			    cursor: pointer;
					
			    img {
						transform: scale(1.2);
			    	transition: all 0.75s;
			    }

					.coverDescription {
						transition: all 0.8s ease;
						opacity: 1;
					}

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