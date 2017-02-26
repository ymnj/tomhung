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

	var options = [
      {selector: '#peregrine-screen', offset: 700, callback: function(el) {
        let fadeInEl = document.getElementById('codrlogue-screen');
        fadeInEl.className += " animated fadeInLeft";
        fadeInEl.nextElementSibling.className += " animated fadeInRight";
      } },
      {selector: '#code-container', offset: 1800, callback: function(el) {
        let fadeInEl = document.getElementById('blog-screen');
        fadeInEl.className += " animated fadeInLeft";
      } }
    ];

    Materialize.scrollFire(options);

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
 			let el = document.getElementById('peregrine-screen');
 			el.className += " animated fadeInLeft";
 			el.nextElementSibling.className += " animated fadeInRight";
 		}
 	}
</script>

<style lang="scss" scoped>

	$font: 'Ek Mukta', sans-serif;

	#projects-container	{

		font-family: $font;
		padding: 100px 20% 0;
		background-color: #fff;
		height: 100%;
	
		header{
			background-color: #fff;
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
		}

	}

</style>