<template>
	<div id="projects-container">
		<header>
			<h1>Projects</h1>
			<p>
			Here is a selection of some of the projects I have worked on over the past year. If you'd like to see more, please check out my Github.Here is a selection of some of the projects I have worked on over the past year. If you'd like to see more, please check out my Github.</p>
		</header>
	
		<projectDetail :project="project" v-for="project in projectsList"></projectDetail>
	
		
	</div>
</template>

<script>
import projectDetail from './ProjectDetail.vue';
import projects from './projects.js';

 	export default {
 		components: {
 			projectDetail
 		},
 		data() {
 			return {
 				projectsList: projects
 			}
 		},
 		mounted() {
 
 		}
 	}
</script>

<style lang="scss" scoped>

	$font: 'Ek Mukta', sans-serif;

	#projects-container	{

		font-family: $font;
		padding: 100px 10% 0;
	
		header{
			
			h1 {
				text-align: center;
				letter-spacing: 1px;
				font-family: $font;
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

	}

</style>