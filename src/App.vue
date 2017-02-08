<template>

	<div id="main" class="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button">
		<appHeader></appHeader>
		<appHeaderDrawer></appHeaderDrawer>
		<main class="mdl-layout__content">
	  	<router-view></router-view>
	  </main>
	</div>

</template>

<script>
	import Header from './components/Header.vue';
	import HeaderDrawer from './components/HeaderDrawer.vue';

	export default {
		components: {
			appHeader: Header,
			appHeaderDrawer: HeaderDrawer
		}
	}

</script>

<style lang="scss">
	$dark-color: #212121;
	$active-color: #ff4081;
	$red: red;

	body {
		background-color: green;
	}

	#main {
		list-style-type: none;
		
		h1 {
			margin: 0;
		}
		ul {
			list-style-type: none;
		}

		.mdl-layout__header {
			z-index: 1;
			background: url('assets/transparent.svg') center / cover;
		}
	
		.mdl-layout__content {
			z-index: 0;
			position: relative;
			margin-top: -64px;

		}

		.mdl-layout__header-row {
	  	width: 80%;
	  	margin: 0 auto;
			padding: 0;
		}

		.mdl-layout-title a {
			padding: 0;
		}

	}

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


//#A9B7C0 Gre Blue
//#C7D8C6 Minty
//#EFD9C1 Light
//#CCCBC6 Powder
</style>
