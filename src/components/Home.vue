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


<!-- <a href="http://www.linkedin.com/in/tomhungyvr" target="_blank"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
							<a href="https://github.com/ymnj" target="_blank"><i class="fa fa-github-alt" aria-hidden="true"></i></a>
							<a href="https://plus.google.com/u/1/103585423442230985484/about" target="_blank"><i class="fa fa-google-plus"></i></a>
							<a href="https://www.instagram.com/ym.nj/" target="_blank"><i class="fa fa-instagram"></i></a> -->