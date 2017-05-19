<template>
	<div id="projects-container">

		<intro :title="title" :introduction='introduction'></intro>
	
		<projectDetail :project="project" v-for="project in projectsList"></projectDetail>
	
	</div>
</template>

<script>
import projectDetail from './ProjectDetail.vue';
import intro from '../Intro.vue';
import projects from './projects.js';

 	export default {
 		components: {
 			projectDetail,
 			intro
 		},
 		data() {
 			return {
 				projectsList: projects,
 				title: 'Projects',
 				introduction: `Here is a selection of some of the projects I have worked on over the past year. If you'd like to see more, please check out my Github.`
 			}
 		}
 	}
</script>

<style lang="scss" scoped>

	#projects-container	{
		padding-top: 100px;

		@media only screen  and (max-width : 926px) {
			
			padding: 100px 0 0;	

			ul {
				flex-direction: column;
				li {
					width: 100%;
				}
			}
		}
	}
</style>