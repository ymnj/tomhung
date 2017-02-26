<template>
	<nav>
    <div class="nav-wrapper" :class="{ lightNav: requireLightText }">
      <router-link class="brand-logo" to="/" exact>
				<img id="logo" src="../../src/assets/TH03.png">
    	</router-link>
      <a href="#" data-activates="mobile" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
          <li><router-link active-class="is-active" to="/" exact>Home</router-link></li>
	       	<li><router-link active-class="is-active" to="/photos">Photos</router-link><li>
	        <li><router-link active-class="is-active" to="/projects">Projects</router-link><li>
      </ul>
      <ul class="side-nav" id="mobile">
        <li><router-link active-class="is-active" to="/" exact>Home</router-link></li>
       	<li><router-link active-class="is-active" to="/photos">Photos</router-link><li>
        <li><router-link active-class="is-active" to="/projects">Projects</router-link><li>
      </ul>
    </div>
  </nav>
</template>

<script>
window.$ = window.jQuery = require('materialize-css/node_modules/jquery/dist/jquery.js'); 
require('materialize-css');

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
		$('.button-collapse').sideNav();
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
		width: 40px;
		height: 40px;
		margin-top: 10px;
	}

	nav {
		padding-top: 40px;
		background: url('../assets/transparent.svg') center / cover;
		min-height: 64px;
		height: 100%;

		.nav-wrapper {
			z-index: 5;
			width: 80%;
			margin: 0 auto;
						
			ul.right {
				a {
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
				  bottom: 15px;
				  left: 0;
				  background-color: $active-color;
				  visibility: hidden;
				  -webkit-transform: scaleX(0);
				  transform: scaleX(0);
				  -webkit-transition: all 0.3s ease-in-out 0s;
				  transition: all 0.3s ease-in-out 0s;
				}
				a:hover:before {
				  visibility: visible;
				  -webkit-transform: scaleX(1);
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


</style>