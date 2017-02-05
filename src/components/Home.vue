<template>
	<div id="home-container">
		<div id="banner">
			<h1 class="welcomeMsg">{{ welcomeMsg.toUpperCase() }}</h1>
			<h1 class="name">{{ name.toUpperCase() }}</h1>
			
			<div id="icons">
				<a :href="link.link" target="_blank" v-for="link in links"><i :class="link.icon" aria-hidden="true"></i></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				welcomeMsg: 'Hello, I\'m',
				name: 'Tom Hung',
				links: [
					{
						title: 'LinkedIn',
						icon: 'fa fa-linkedin-square',
						link: 'http://www.linkedin.com/in/tomhungyvr'
					},
					{
						title: 'Github',
						icon: 'fa fa-github-alt',
						link: 'https://github.com/ymnj'
					},
					{
						title: 'Google',
						icon: 'fa fa-google-plus',
						link: 'https://plus.google.com/u/1/103585423442230985484/about'
					},
					{
						title: 'Instagram',
						icon: 'fa fa-instagram',
						link: 'https://www.instagram.com/ym.nj/'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	/******************************* HOME *******************************/

#home-container {

	padding-top: 10%;

	@media (max-width: 1024px) {
		margin-top: 116px;
	}	

	h1 {
		margin: 0;
		font-weight: lighter;
	}
	
	h1.name {
		letter-spacing: 0.4em;
		font-weight: bold;
	}

	#icons {

		padding-top: 15px;

		a {
			margin: 12px;
		}
		a:first-child {
			margin-left: 8px;
		}
		i {
			font-size: 1.5em;
		}
	}

	@media (max-width: 615px) {
		#banner h1{
			font-size: 9vw;
		}
	}

	@media (max-width: 400px){
		#icons {
			a:first-child {
				margin-left: 2px;
			} 
		}	
	}

}
</style>