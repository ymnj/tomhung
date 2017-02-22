<template>

	<div class="tom-layout">
		<navBar class="z-depth-0"></navBar>
		<div class="content-layout">
			<transition 
				name="fade"
				enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
				<router-view></router-view>
			</transition>
		</div>
	</div>

</template>

<script>
	import NavBar from './components/NavBar.vue';
	
	export default {
		components: {
			navBar: NavBar
		}
	}

</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Ek+Mukta');

	body {
		.content-layout {
			margin-top: -64px;
			z-index: -5;
		}
	}

	// .fade-enter {
	// 	opacity: 0;
	// }

	// .fade-enter-active {
	// 	transition: opacity 2s ease;
	// }
	
	// .fade-leave {

	// }

	// .fade-leave-active {
	// 	transition: opacity 2s ease;
	// 	opacity: 0;
	// }

	

//#A9B7C0 Gre Blue
//#C7D8C6 Minty
//#EFD9C1 Light
//#CCCBC6 Powder
</style>
