<template>
	<div class="project-wrap">
			<div :id="`${project.title}-screen`" class="project-image">
				<img :src="project.screen">
			</div>
			<div class="project-info">
				<h2>{{ project.title | capitalize  }}</h2>
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
</style>