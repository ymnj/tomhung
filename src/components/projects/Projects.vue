<template>
	<div id="projects-container">
		<header>
			<h1>Projects</h1>
			<p class="intro">
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
 		}
 	}
</script>

<style lang="scss" scoped>

	#projects-container	{

		padding-top: 100px;
	
		header{
			
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