<template>
		<header class="mdl-layout__header mdl-layout__header--scroll">
	    <div class="mdl-layout-icon"></div>
	    <div class="mdl-layout__header-row" :class="{ lightNav: requireLightText }">
	      <!-- Title -->
	      <span class="mdl-layout-title mdl-color-text--grey-900">
	      	<router-link class="mdl-navigation__link mdl-color-text--grey-900" to="/" exact>
						<img id="logo" src="../../src/assets/TH03.png">
	      	</router-link>
	      </span>
	      <!-- Add spacer, to align navigation to the right -->
	      <div class="mdl-layout-spacer"></div>
	      <!-- Navigation -->
	      <nav class="mdl-navigation">
	        <router-link class="mdl-navigation__link" active-class="is-active" to="/" exact>Home</router-link>
	       	<router-link class="mdl-navigation__link" active-class="is-active" to="/photos">Photos</router-link>
	        <router-link class="mdl-navigation__link" active-class="is-active" to="/projects">Projects</router-link>
	      </nav>
	    </div>
	  </header>
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

			// if(from.path === '/photos/asia'){
			// 	this.requireLightText = !this.requireLightText;
			// }
		}
	},
	mounted() {

	}
}
</script>

<style lang="scss">

	$dark-color: #212121;
	$active-color: #ff4081;

	#logo {
		width: 40px;
		height: 40px;
	}

	nav {
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

	.mdl-layout__header-row nav a.mdl-navigation__link {
		padding: 0;
		margin: 0 24px;
		color: $dark-color;
	}

	.mdl-layout__header-row nav a.mdl-navigation__link:last-child {
		margin-right: 0;
	}

	.mdl-layout__header-row nav a.mdl-navigation__link.is-active {
		color: $active-color;
	}

	.lightNav {
		nav a.mdl-navigation__link {
		color: white;
	}

		#logo {
			height: 100px;
		}
	}
</style>