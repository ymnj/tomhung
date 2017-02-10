<template>
	<nav>
    <div class="nav-wrapper" :class="{ lightNav: requireLightText }">
      <router-link class="brand-logo" to="/" exact>
				<img id="logo" src="../../src/assets/TH03.png">
    	</router-link>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
          <li><router-link active-class="is-active" to="/" exact>Home</router-link></li>
	       	<li><router-link active-class="is-active" to="/photos">Photos</router-link><li>
	        <li><router-link active-class="is-active" to="/projects">Projects</router-link><li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
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
		margin: 10px 0 0 15px;
	}

	nav {
		background: url('../assets/transparent.svg') center / cover;
		min-height: 64px;
		height: 100%
	}

	nav {
		.nav-wrapper {
			li a {
				padding: 0;
				margin: 0 15px;
				color: $dark-color;
			}
			a:hover {
				background-color: transparent;
			}
		}
		.lightNav {
			li a {
				color: #fff;
			}
			#logo {
				filter: invert(100%);
			}
		}

		a {
		  position: relative;
		}
		a:before {
		  content: "";
		  position: absolute;
		  width: 100%;
		  height: 2px;
		  bottom: 0;
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
	}


</style>