<template>
	<div id="code-container">
		<header>
			<h1>Code</h1>
			<p>
			Here is a selection of some of the projects I have worked on over the past year. If you'd like to see more, please check out my Github.</p>
		</header>

		<div class="project-wrap">
			<div class="project-image">
			</div>
			<div class="project-info">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum explicabo reprehenderit ut quod eum, error voluptatum consectetur unde laborum magni at nemo, optio hic enim tenetur! In corporis ullam ex dolorem nulla officiis provident ab harum nostrum autem qui, dolores, rem architecto, quisquam repellendus debitis animi. Fugit nobis deleniti aliquid sint eaque soluta molestias unde asperiores blanditiis. Minima quidem, aliquid consequuntur tenetur placeat similique. Nam ipsum, delectus veritatis! Quod recusandae quia, consectetur. Laudantium saepe quisquam sapiente perferendis repellendus in molestiae hic consequatur. Aspernatur dolor saepe odio expedita eaque. Hic exercitationem accusantium enim repellat itaque doloribus sed quae, officia tempore soluta numquam velit cupiditate omnis commodi eum ex maxime voluptas aliquam culpa incidunt vero voluptatem beatae! Voluptates rem blanditiis ipsa nam aliquid, ullam voluptas nihil ut, laboriosam fugit fuga odit neque. Doloribus, adipisci reprehenderit eos sunt maxime voluptatum laboriosam, laborum, ipsum facere fugiat accusantium placeat tempora iste. Atque alias consequuntur at vel, voluptatibus non aspernatur eaque fugiat sint dolorum totam reprehenderit illo adipisci tempore sed delectus. Tempora qui natus, sapiente maiores error dolor ut molestiae dolores labore neque facere, possimus quibusdam placeat omnis, molestias consequuntur blanditiis. Neque ex ullam reprehenderit a alias, inventore, quis sunt vel, itaque culpa eos explicabo, fuga?
			</div>
		</div>

		<div class="project-wrap">
			<div class="project-image">
			</div>
			<div class="project-info">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum explicabo reprehenderit ut quod eum, error voluptatum consectetur unde laborum magni at nemo, optio hic enim tenetur! In corporis ullam ex dolorem nulla officiis provident ab harum nostrum autem qui, dolores, rem architecto, quisquam repellendus debitis animi. Fugit nobis deleniti aliquid sint eaque soluta molestias unde asperiores blanditiis. Minima quidem, aliquid consequuntur tenetur placeat similique. Nam ipsum, delectus veritatis! Quod recusandae quia, consectetur. Laudantium saepe quisquam sapiente perferendis repellendus in molestiae hic consequatur. Aspernatur dolor saepe odio expedita eaque. Hic exercitationem accusantium enim repellat itaque doloribus sed quae, officia tempore soluta numquam velit cupiditate omnis commodi eum ex maxime voluptas aliquam culpa incidunt vero voluptatem beatae! Voluptates rem blanditiis ipsa nam aliquid, ullam voluptas nihil ut, laboriosam fugit fuga odit neque. Doloribus, adipisci reprehenderit eos sunt maxime voluptatum laboriosam, laborum, ipsum facere fugiat accusantium placeat tempora iste. Atque alias consequuntur at vel, voluptatibus non aspernatur eaque fugiat sint dolorum totam reprehenderit illo adipisci tempore sed delectus. Tempora qui natus, sapiente maiores error dolor ut molestiae dolores labore neque facere, possimus quibusdam placeat omnis, molestias consequuntur blanditiis. Neque ex ullam reprehenderit a alias, inventore, quis sunt vel, itaque culpa eos explicabo, fuga?
			</div>
		</div>

		<div class="project-wrap">
			<div class="project-image">
			</div>
			<div class="project-info">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum explicabo reprehenderit ut quod eum, error voluptatum consectetur unde laborum magni at nemo, optio hic enim tenetur! In corporis ullam ex dolorem nulla officiis provident ab harum nostrum autem qui, dolores, rem architecto, quisquam repellendus debitis animi. Fugit nobis deleniti aliquid sint eaque soluta molestias unde asperiores blanditiis. Minima quidem, aliquid consequuntur tenetur placeat similique. Nam ipsum, delectus veritatis! Quod recusandae quia, consectetur. Laudantium saepe quisquam sapiente perferendis repellendus in molestiae hic consequatur. Aspernatur dolor saepe odio expedita eaque. Hic exercitationem accusantium enim repellat itaque doloribus sed quae, officia tempore soluta numquam velit cupiditate omnis commodi eum ex maxime voluptas aliquam culpa incidunt vero voluptatem beatae! Voluptates rem blanditiis ipsa nam aliquid, ullam voluptas nihil ut, laboriosam fugit fuga odit neque. Doloribus, adipisci reprehenderit eos sunt maxime voluptatum laboriosam, laborum, ipsum facere fugiat accusantium placeat tempora iste. Atque alias consequuntur at vel, voluptatibus non aspernatur eaque fugiat sint dolorum totam reprehenderit illo adipisci tempore sed delectus. Tempora qui natus, sapiente maiores error dolor ut molestiae dolores labore neque facere, possimus quibusdam placeat omnis, molestias consequuntur blanditiis. Neque ex ullam reprehenderit a alias, inventore, quis sunt vel, itaque culpa eos explicabo, fuga?
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style lang="scss" scoped>

	$font: 'Ek Mukta', sans-serif;

	#code-container	{

		font-family: $font;
		padding: 100px 10% 0;

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
			border: 1px solid black;
			display: flex;

			.project-image{
				width: 60%;
				min-height: 100%;
				background: url('../assets/peregrine-screen.png') center center;
				background-color: steelblue;
				-webkit-background-size: cover;
			  -moz-background-size: cover;
			  -o-background-size: cover;
			  background-size: cover;
			}

			.project-info {
				width: 40%;
				background-color: red;
			}
		}

	}

</style>