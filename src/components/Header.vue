<template>
	
	<nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul>
    </div>
  </nav>

		<!-- <header class="mdl-layout__header mdl-layout__header--transparent">
	    <div class="mdl-layout-icon"></div>
	    <div class="mdl-layout__header-row" :class="{ lightNav: requireLightText }">
	      
	      <span class="mdl-layout-title mdl-color-text--grey-900">
	      	<router-link class="mdl-navigation__link mdl-color-text--grey-900" to="/" exact>
						<img id="logo" src="../../src/assets/TH03.png">
	      	</router-link>
	      </span>
	     
	      <div class="mdl-layout-spacer"></div>
	      
	      <nav class="mdl-navigation">
	        <router-link class="mdl-navigation__link" active-class="is-active" to="/" exact>Home</router-link>
	       	<router-link class="mdl-navigation__link" active-class="is-active" to="/photos">Photos</router-link>
	        <router-link class="mdl-navigation__link" active-class="is-active" to="/projects">Projects</router-link>
	      </nav>
	    </div>
	  </header> -->
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

	// $dark-color: #212121;
	// $active-color: #ff4081;

	// #logo {
	// 	width: 40px;
	// 	height: 40px;
	// }

	// nav {
	// 	a {
	// 	  position: relative;
	// 	}
	// 	a:before {
	// 	  content: "";
	// 	  position: absolute;
	// 	  width: 100%;
	// 	  height: 2px;
	// 	  bottom: 0;
	// 	  left: 0;
	// 	  background-color: $active-color;
	// 	  visibility: hidden;
	// 	  -webkit-transform: scaleX(0);
	// 	  transform: scaleX(0);
	// 	  -webkit-transition: all 0.3s ease-in-out 0s;
	// 	  transition: all 0.3s ease-in-out 0s;
	// 	}
	// 	a:hover:before {
	// 	  visibility: visible;
	// 	  -webkit-transform: scaleX(1);
	// 	  transform: scaleX(1);
	// 	}
	// }

	// .mdl-layout__header-row nav a.mdl-navigation__link {
	// 	padding: 0;
	// 	margin: 0 24px;
	// 	color: $dark-color;
	// }

	// .mdl-layout__header-row nav a.mdl-navigation__link:last-child {
	// 	margin-right: 0;
	// }

	// .mdl-layout__header-row nav a.mdl-navigation__link.is-active {
	// 	color: $active-color;
	// }

	// .lightNav {
	// 	nav a.mdl-navigation__link {
	// 	color: white;
	// }

	// 	#logo {
	// 		-webkit-filter: invert(100%);
	// 	}
	// }
</style>