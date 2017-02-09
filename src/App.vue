<template>

<!-- 	<div id="main" class="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button">
		<appHeader></appHeader>
		<appHeaderDrawer></appHeaderDrawer>
		<main class="mdl-layout__content">
	  	<router-view></router-view>
	  </main>
	</div> -->
	<div class="tom-layout">
		<navBar class="z-depth-0"></navBar></navBar>
		<div class="content-layout">
			<router-view></router-view>
		</div>
	</div>

</template>

<script>
	import NavBar from './components/NavBar.vue';
	import HeaderDrawer from './components/HeaderDrawer.vue';

	export default {
		components: {
			navBar: NavBar
		},
		watch: {
			$route() {
				// document.getElementById('main').scrollTop = 0;
			}
		}
	}

</script>

<style lang="scss">


	body {
		background-color: green;

		.content-layout {
			margin-top: -64px;
		}
		
		h1, ul, li {
			margin: 0;
			padding: 0;
		}
	}

	// #main {
	// 	list-style-type: none;

	// 	h1 {
	// 		margin: 0;
	// 	}
	// 	ul {
	// 		list-style-type: none;
	// 		margin: 0;
	// 	}

	// 	.mdl-layout__header {
	// 		z-index: 1;
	// 	}
	
	// 	.mdl-layout__header-row {
	//   	width: 80%;
	//   	margin: 0 auto;
	// 		padding: 64px 0 0;
	// 	}

	// 	.mdl-layout-title a {
	// 		padding: 0;
	// 	}

	// 	.mdl-layout__content {
	// 		z-index: 0;
	// 		margin-top: -64px;
	// 	};
	// }


//#A9B7C0 Gre Blue
//#C7D8C6 Minty
//#EFD9C1 Light
//#CCCBC6 Powder
</style>
