<template>

	<div id="tom-layout">
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
		
		.content-layout {
			margin-top: -64px;
			width: 100%;
			z-index: -5;
		}
	}	

.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 0.75s ease;
	transition-delay: 0.25s;
}

.fade-leave {
}

.fade-leave-active {
	transition: opacity 0.25s ease;
	opacity: 0;
}



// .fade-enter-active, .fade-leave-active {
//   transition-property: opacity;
//   transition-duration: 0.25s;
// }

// .fade-enter-active {
//   transition-delay: 0.25s;
// }

// .fade-enter, .fade-leave-active {
//   opacity: 0;
// }



//#A9B7C0 Gre Blue
//#C7D8C6 Minty
//#EFD9C1 Light
//#CCCBC6 Powder
</style>
