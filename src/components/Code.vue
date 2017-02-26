<template>
	<div id="code-container">
		<header>
			<h1>Code</h1>
			<p>
			Here is a selection of some of the projects I have worked on over the past year. If you'd like to see more, please check out my Github.Here is a selection of some of the projects I have worked on over the past year. If you'd like to see more, please check out my Github.</p>
		</header>

		<div class="project-wrap">
			<div id="peregrine-screen" class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-info">
				<h2>Peregrine</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
		<div class="project-wrap project-two">
			<div id="codrlogue-screen" class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-info">
				<h2>Codrlogue</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
		<div class="project-wrap project-three">
			<div id="blog-screen" class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-info">
				<h2>Rails Blog</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</div>
	</div>
</template>

<script>
	var options = [
      {selector: '#peregrine-screen', offset: 700, callback: function(el) {
        let fadeInEl = document.getElementById('codrlogue-screen');
        fadeInEl.className += " animated fadeInLeft";
        el.nextElementSibling.className += " animated fadeInRight";
      } },
      {selector: '#code-container', offset: 1800, callback: function(el) {
        let fadeInEl = document.getElementById('blog-screen');
        fadeInEl.className += " animated fadeInLeft";
      } }
    ];
  Materialize.scrollFire(options);

 	export default {
 		mounted() {
 			let el = document.getElementById('peregrine-screen');
 			el.className += " animated fadeInLeft";
 			el.nextElementSibling.className += " animated fadeInUp";
 		}
 	}


</script>

<style lang="scss" scoped>

	$font: 'Ek Mukta', sans-serif;

	#code-container	{

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

		.project-wrap {
			margin-bottom: 10%;
			display: flex;

			.project-image {
				border-radius: 20px;
				opacity: 0;
				display: block;
				width: 600px;
				height: auto;
				// height: 375px;
				box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.30);
		    -moz-box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.30);
		    -webkit-box-shadow: 4px 4px 25px rgba(0, 0, 0, 0.30);
				
				img{
					border-radius: 20px;
					width: 100%;
					height: auto;
				}
			}


			.project-info {
				width: 40%;
				opacity: 0;
				padding-left: 2.5%;
			}
		}

	}

</style>