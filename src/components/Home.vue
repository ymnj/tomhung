<template>
	<div id="home-container">
		<div id="banner">
			<h1 class="welcomeMsg animated fadeInDown">{{ welcomeMsg.toUpperCase() }}</h1>
			<h1 class="name animated zoomIn" itemscope itemtype="http://schema.org/Person">
				<span itemprop="name">{{ name.toUpperCase() }}</span>
			</h1>
			
			<div id="icons">
				<a v-for="link in links" :href="link.link" :target="link.target"><i :class="link.icon" aria-hidden="true"></i></a>
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
						link: 'http://www.linkedin.com/in/tomhungyvr',
						target: '_blank'
					},
					{
						title: 'Github',
						icon: 'fa fa-github-alt',
						link: 'https://github.com/ymnj',
						target: '_blank'
					},
					{
						title: 'Google',
						icon: 'fa fa-google-plus',
						link: 'https://plus.google.com/u/1/103585423442230985484/about',
						target: '_blank'
					},
					{
						title: 'Instagram',
						icon: 'fa fa-instagram',
						link: 'https://www.instagram.com/ym.nj/',
						target: '_blank'
					},
					{
						title: 'Blog',
						icon: 'fa fa-commenting',
						link: 'http://www.tomhung.ca/blog',
						target: '_self'
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	/******************************* HOME *******************************/

#home-container {

	min-height: 100vh;
	background: url("/static/main-background.jpg") #fff no-repeat center center fixed;
  background-size: cover;

	/*Fix for choppy background image on CHROME. only for webkit  browsers*/
	@media screen and (-webkit-min-device-pixel-ratio:0) {
	  background-attachment: scroll;
	}

  #banner {
  	padding: 30vh 0 0 10%;

  }

	h1 {
		font-weight: lighter;
		margin: 2% 0;
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
			color: #ff4081;
			opacity: 0;
		}
		
		i.fa-linkedin-square {
			animation: fade 500ms ease-in-out forwards;
			animation-delay: 0ms;
		}

		i.fa-github-alt {
			animation: fade 500ms ease-in-out forwards;
			animation-delay: 200ms;
		}

		i.fa-google-plus {
			animation: fade 500ms ease-in-out forwards;
			animation-delay: 400ms;
		}

		i.fa-instagram {
			animation: fade 500ms ease-in-out forwards;
			animation-delay: 600ms;
		}

		i.fa-commenting {
			animation: fade 500ms ease-in-out forwards;
			animation-delay: 800ms;
		}

		@keyframes fade {
			100% { opacity: 1; }
		}
	}

	@media (max-width: 1024px){
		#banner h1 {
			font-size: 5.5vw;
		}

		#icons {
			font-size: 2vw;
		}
	}

	@media (max-width: 615px) {

		#banner h1{
			font-size: 5vw;
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