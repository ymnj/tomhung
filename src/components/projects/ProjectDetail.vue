<template>
	<div class="project-wrap">
			<div :id="`${project.title}-screen`" class="project-image">
				<img :src="project.screen">
			</div>
			<div class="project-info">
				<h1>{{project.title}}</h1>
				<p>{{ project.intro }}</p>
				<span class="side-arrow"></span>
			</div>
		</div>
</template>

<script>
	export default {
		props: ['project']
	}
</script>

<style lang="scss">
	
	.project-wrap {
		display: flex;
		background-color: blue;

		.side-arrow {
			width: 50px;
			height: 50px;
			top: 50%;
			margin-top: -25px;
			margin-left: -25px;
			background-color: #fff;
			position: absolute;
			transform: rotate(45deg);
			z-index: -1;
		}
		
		.project-image {
			width: 50%;
			z-index: 1;

			img {
				object-fit: cover;
				display: block;
			}
		}

		.project-info {
			position: relative;
			max-width: 50%;
			background-color: #fff;
			z-index: 5;

			h1{
				margin: 10% 5%;
				padding-left: 2.5%;
				border-left: 5px solid #ff4081;
				font-size: 1.5em;
				text-transform: uppercase;
			}

			p {
				margin: 5%;
			}
		}
	}

	.project-wrap:nth-child(odd){
		.project-image{
			order: 2
		}

		.side-arrow {
			right: 0;
			margin-right: -25px;
		}
	}

	@media only screen and (max-width : 926px){
		.project-wrap {
			flex-direction: column;
			
			.project-image {
				width: 100%;
			}
		}

	}
</style>