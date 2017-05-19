<template>
	<div id="photos-container">

		<intro :title="title" :introduction='introduction'></intro>

		<ul>
			<li v-for="cover in albumCovers" @click="navigateTo(cover.url)" class="animated fadeIn">
				<img :src="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/` + cover.imgUrl"
						  :srcset="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/` + cover.imgUrl + ` 926w,
						  					http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/` + cover.imgUrl + ` 450w`"
						  :alt="cover.tagLine"
							sizes="(max-width: 450px) 450w, (min-width: 927px) 450w"/>
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
import intro from './Intro.vue';

export default {
	components: {
		intro
	},
	data() {
		return {
			albumCovers: albums,
			title: 'Photography',
 			introduction: `Started with a Nikon D80 with a kit 18-55mm & 50mm prime. While using it on trips, I realized the size and weight of a DSLR was too cumbersome for the type of travel photography I enjoy so the hobby never took off. 
			Since then I've switched to a considerably smaller Fujifilm X100T which has been fastastic to shoot with.`
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
		padding: 100px 10% 0;
		background-color: #fff;

		header {
			h1 {
				text-align: center;
				letter-spacing: 1px;
				font-weight: 600;
				font-size: 4.5em;
			}

			p {
				max-width: 600px;
				font-size: 1.4em;
				letter-spacing: 1px;
				padding: 5% 0;
				margin: 0 auto;
				line-height: 1.5em;
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
				animation-duration: 2s;
			 	animation-delay: 0.25s;
			  
			  
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
				  backface-visibility: hidden;

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
	
			li:hover {
		    cursor: pointer;
				
		    img {
					//transform: scale(1.2);
		    	transition: all 0.75s;
		    }

				.coverDescription {
					transition: opacity 0.8s;
					opacity: 1;
				}
			}
		}

		@media only screen  and (max-width : 926px) {
			padding: 100px 0 0;	

			ul {
				flex-direction: column;
				li {
					width: 100%;
				}
			}

			header h1 {
				font-size: 4em;
			}

			header p {
				font-size: 1.2em;
				padding: 5% 5%;
			}
		}

		@media screen and (max-width: 450px) {

		  header h1 {
				font-size: 3em;
			}

			p.intro {
				font-size: 1em;
			}
		}

	}
</style>