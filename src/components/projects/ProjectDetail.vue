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
			<p v-html="project.intro"></p>
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
		transition: margin 700ms ease;
		display: flex;
		height: 480px;
		margin: 0 10%;
		
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
			height: 100%;
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
			max-height: 480px;
			background-color: #fff;
			z-index: 5;

			h1{
				margin: 5% 5% 0;
				padding-left: 2.5%;
				border-left: 5px solid #ff4081;
				font-size: 1.5em;
				text-transform: uppercase;
			}

			p {
				margin: 0 5%;
				line-height: 1.8em;
			}


			i.read-more {
				text-align: center;
				display: block;
			}

			.link-icons, .framework-icons {
				margin-left: 5%;
				margin-bottom: 0;

				a {
					color: inherit;
					font-size: 1.5em;
				}

				li {
					padding-right: 2.5%;
					display: inline-block;
				}
			}

			.link-icons, .read-more {
				color: steelblue;
			}
	
			.framework-icons {
				font-size: 1.8em;
			}
		}

	}

	/***************** HOVER *****************/
	.project-wrap:hover {
		.project-info {
			background-color: #666362;
			color: #fff;
			transition: background-color 0.5s ease;

			.link-icons, .read-more {
				color: LightSkyBlue;
			}
		}

		img {
			transform: scale(1.1);
		}

		.link-icons a:hover, .read-more:hover {
			color: #ff4081;
		}
		.side-arrow {
			background-color: #666362;
			margin-right: -25px;
			transition: all 0.5s ease;
			box-shadow: -2px 2px 25px 0px rgba(0,0,0,0.75);
		}

		.project-wrap:nth-child(odd){
			.side-arrow {
				box-shadow: 2px -2px 25px 0px rgba(0,0,0,0.75);
			}
		}
	}

	//Every other project
	.project-wrap:nth-child(odd){
		.project-image{
			order: 2
		}

		h1, .link-icons, .framework-icons {
			text-align: right;
		}

		.link-icons, .framework-icons {
			margin-right: 5%;
		}

		li:last-child {
			padding-right: 0;
		}

		h1 {
			padding-right: 2.5%;
			border-right: 5px solid #ff4081;
			border-left: 0;
			font-size: 1.5em;
			text-transform: uppercase;
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
	@media only screen and (max-width : 1550px){
		.project-wrap .project-info p {
			line-height: 1.5em;
		}
	}

	@media only screen and (max-width : 1450px){
		.project-info p{
			font-size: 0.95em;
		}

		.project-info .framework-icons {
			margin-top: 2.5%;
		}
	}


	@media only screen and (max-width : 1080px){
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

				p {
					line-height: 1.8em;
				}
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

	@media only screen and (max-width : 926px){
		.project-wrap {
			margin: 0;
		}
	}

	@media only screen and (max-width : 450px){

		.project-wrap .project-info p {
			line-height: 1.8em;
			font-size: 0.85em;
		}
	}

</style>