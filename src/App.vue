<template>

	<div class="tom-layout">
		<navBar class="z-depth-0"></navBar>
		<div class="content-layout">
			<transition name="fade">
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

		// overflow: hidden;

		.content-layout {
			margin-top: -64px;
			width: 100%;
			z-index: -5;
		}
	}	


.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 1s;
}

.fade-enter-active {
  transition-delay: 1s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

// .fade-enter {
// 	opacity: 0;
// 	// position: absolute;
// 	// margin-top: 100%;
// }

// .fade-enter-active {
// 	transition: opacity 1s ease;
// 	// 						margin 0.5s ease-out;
// }

// .fade-leave {

// }

// .fade-leave-active {
// 	// margin-top: 100%;
// 	transition: opacity 1s ease;
// 	opacity: 0;
// 	// 						margin 0.9s ease-out;
// }





//#A9B7C0 Gre Blue
//#C7D8C6 Minty
//#EFD9C1 Light
//#CCCBC6 Powder
</style>
