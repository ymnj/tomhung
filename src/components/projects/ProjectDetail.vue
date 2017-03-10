<template>
	<div class="project-wrap">
			<div :id="`${project.title}-screen`" class="project-image">
				<img :src="project.screen">
				<span class="side-arrow"></span>
			</div>
			<div class="project-info">
				<h1>{{project.title}}</h1>
				<p>{{ project.intro }}</p>
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
			position: absolute;
			top: 50%;
			right: 0;
			margin-top: -25px;
			margin-right: -25px;
			background-color: #fff;
			transform: rotate(45deg);
		}
		
		.project-image {
			width: 50%;
			position: relative;
			overflow: hidden;

			img {
				object-fit: cover;
				display: block;
				position: relative;
				transition: all 0.5s ease;
			}
		}

		.project-info {
			width: 50%;
			background-color: #fff;
			z-index: 5;

			h1{
				margin: 8% 5%;
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

	/***************** HOVER *****************/
	.project-wrap:hover {
		.project-info {
			background-color: #666362;
			color: #fff;
		}

		img {
			transform: scale(1.1);
		}

		.side-arrow {
			background-color: #666362;
			webkit-box-shadow: -2px 2px 25px 0px rgba(0,0,0,0.75);
			-moz-box-shadow: -2px 2px 25px 0px rgba(0,0,0,0.75);
			box-shadow: -2px 2px 25px 0px rgba(0,0,0,0.75);
		}

		.project-wrap:nth-child(odd){
			.side-arrow {
				webkit-box-shadow: 2px -2px 25px 0px rgba(0,0,0,0.75);
				-moz-box-shadow: 2px -2px 25px 0px rgba(0,0,0,0.75);
				box-shadow: 2px -2px 25px 0px rgba(0,0,0,0.75);
			}
		}
	}

	//Every other project
	.project-wrap:nth-child(odd){
		.project-image{
			order: 2
		}

		.side-arrow {
			left: 0;
			margin-left: -25px;
		}
	}

	/***************** SMALL SCREEN COLLAPSE *****************/
	@media only screen and (max-width : 926px){
		.project-wrap {
			flex-direction: column;
			overflow: hidden;
			position: relative;
			
			.project-image, .project-info {
				width: 100%;
			}

			.project-info {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				transform: translateX(-100%);
			}

			.side-arrow {
				display: none;
			}
		}

		.project-wrap:nth-child(odd){
			.project-image{
				order: 0
			}
		}

		.project-wrap:hover {
			img {
				transform: scale(1);
			}

			.project-info {
				transition: transform 0.25s ease;
				transform: translateX(0%);
			}
		}
	}
</style>