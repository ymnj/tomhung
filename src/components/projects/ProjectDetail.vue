<template>
	<div class="project-wrap">
			<div :id="`${project.title}-screen`" class="project-image">
				<img :src="project.screen">
				<span class="side-arrow"></span>
			</div>
			<div class="project-info">
				<h1>{{project.title}}</h1>
				<ul class="link-icons">
					<li v-for="link in project.links" v-html="link"></li>
				</ul>
				<p>{{ project.intro }}</p>
				<ul class="framework-icons">
					<li v-for="framework in project.frameworks" v-html="framework"></li>
				</ul>
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

		.side-arrow {
			width: 50px;
			height: 50px;
			position: absolute;
			top: 50%;
			right: 0;
			margin-top: -25px;
			margin-right: -35px;
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
				margin: 8% 5% 0;
				padding-left: 2.5%;
				border-left: 5px solid #ff4081;
				font-size: 1.5em;
				text-transform: uppercase;
			}

			p {
				margin: 0 5%;
				line-height: 1.8em;
			}

			.link-icons, .framework-icons {
				margin-left: 5%;

				a {
					color: inherit;
					font-size: 1.5em;
				}

				li {
					padding-right: 2.5%;
					display: inline-block;
				}
			}

			.framework-icons {
				font-size: 2em;
			}
		}
	}

	/***************** HOVER *****************/
	.project-wrap:hover {
		.project-info {
			background-color: #666362;
			color: #fff;
			transition: background-color 0.5s ease;
		}

		img {
			transform: scale(1.1);
		}

		.link-icons a:hover {
			color: #ff4081;
		}
		.side-arrow {
			background-color: #666362;
			margin-right: -25px;
			transition: all 0.5s ease;
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
			margin-left: -35px;
		}
	}

	.project-wrap:nth-child(odd):hover {
		.side-arrow {
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