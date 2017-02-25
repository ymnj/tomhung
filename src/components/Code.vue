<template>
	<div id="code-container">
		<header>
			<h1>Code</h1>
			<p>
			Here is a selection of some of the projects I have worked on over the past year. If you'd like to see more, please check out my Github.</p>
		</header>

		<div class="project-wrap">
			<div class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-image">
				<img src="../assets/peregrine-screen.png">
			</div>
			<div class="project-image2">
				<img src="../assets/peregrine-screen.png">
			</div>

			<!-- <div class="project-info">
				
			</div> -->
		</div>
	</div>
</template>

<script>

var options = [
      {selector: '.project-image2', offset: 50, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
      {selector: '#staggered-test', offset: 205, callback: function(el) {
        Materialize.toast("Please continue scrolling!", 1500 );
      } },
      {selector: '#staggered-test', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#image-test', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(options);

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
			flex-direction: column;

			img{
				border-radius: 20px;
				display: block;
				width: 600px;
				height: 460px;
				box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.49);
		    -moz-box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.49);
		    -webkit-box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.49);
			}
		

			.project-info {
				width: 40%;
				background-color: red;
			}
		}

	}

</style>