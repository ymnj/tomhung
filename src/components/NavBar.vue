<template>
	<div class="navbar-fixed" itemscope itemtype="http://schema.org/WPHeader">
		<nav class="z-depth-0 transparent">
	    <div class="nav-wrapper" :class="{ lightNav: requireLightText }">
	    	<router-link class="brand-logo left" to="/" exact>
				<img itemprop="logo" itemscope itemtype="http://schema.org/image" id="logo" src="../../static/brand-logo.png">
	    	</router-link>
	      <ul class="right" itemscope itemtype="http://schema.org/Thing">
	          <li><router-link active-class="is-active" itemprop="url" to="/" exact>Home</router-link></li>
		       	<li><router-link active-class="is-active" itemprop="url" to="/photos">Photos</router-link></li>
		        <li><router-link active-class="is-active" itemprop="url" to="/projects">Projects</router-link></li>
	      </ul>
	    </div>
	  </nav>
  </div>
</template>

<script>
require('materialize-css/sass/materialize.scss');
const Headroom = require('headroom.js');

export default {
	data() {
		return {
			requireLightText: null
		}
	},
	watch: {
		'$route'(to, from) {
			if(to.path === '/photos/asia' || from.path === '/photos/asia'){
				this.requireLightText = !this.requireLightText;
			}
		}
	},
	mounted() {
		var el = document.querySelector(".nav-wrapper");		
		var headroom  = new Headroom(el, {
		  "offset": 64,
		  "classes": {
		    "top": "headroom--top"
		  }
		});
		// initialise
		headroom.init();

		//Changes navbar to light color on dark background
		if(this.$route.path === '/photos/asia'){
			this.requireLightText = !this.requireLightText;
		};
	}
}

</script>

<style lang="scss">

	$dark-color: #212121;
	$active-color: #ff4081;

	#logo {
		transition: width 600ms,
								height 600ms;
		width: 40px;
		height: 40px;
		margin-top: 10px;
		position: relative;
	}

	.navbar-fixed.z-depth-0 {
		min-height: 64px;
	}

	nav {
		// background: url('../assets/transparent.svg') center / cover;
		min-height: 64px;

		//Hide Nav on scroll down
		.nav-wrapper.headroom--unpinned {
			top: -64px;
			// background: url('../assets/transparent.svg') center / cover;
		}

		.nav-wrapper.headroom--pinned {
			background-color: #fff;
		}

		.nav-wrapper.headroom--top {
		 	background: url('/static/transparent.svg') center / cover;
		 	background-color: transparent;
		}

		.brand-logo.left{
			position: relative;
		}

		.nav-wrapper {
			z-index: 5;
			width: 100%;
			padding: 0 10%;
			margin: 0 auto;
			top: 0;
			transition: all 1s ease;
								
			ul.right {
				li {
					min-height: 64px;
				}

				a {
				min-height: 64px;
				padding: 0;
				margin: 0 50px;
				color: $dark-color;
			  position: relative;
			  letter-spacing: 2px;
				}

				a:last-child {
					margin-right: 0;
				}
				a:before {
				  content: "";
				  position: absolute;
				  width: 100%;
				  height: 2px;
				  top: 47px;
				  bottom: 15px;
				  left: 0;
				  background-color: $active-color;
				  visibility: hidden;
				  transform: scaleX(0);
				  transition: all 0.3s ease-in-out 0s;
				}
				a:hover:before {
				  visibility: visible;
				  transform: scaleX(1);
				}
				a:hover {
					background-color: transparent;
				}
			}

			.material-icons {
				color: #000;
			}
		}

		.nav-wrapper.lightNav.headroom--not-bottom.headroom--not-top.headroom--pinned {

			#logo {
				filter: invert(0%);
			}

			.right li a {
				color: #000;
			}
		}


		.lightNav {

			.right li a {
				color: #fff;
			}
			#logo {
				filter: invert(100%);
			}
			.material-icons {
				color: #fff;
			}
		}
	}

	.nav-up {
		top: -64px;
	}

	@media (max-width: 450px){

		img#logo {
			width: 20px;
			height: 20px;
		}

		nav .nav-wrapper ul.right {
			a {
				font-size: 1em;
				margin: 0 25px;
		  	letter-spacing: 1px;
			}
		}
	}


</style>