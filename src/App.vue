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

	html {
		height: 100%;
		max-width: 100%;
    overflow-x: hidden;
	}

	body {

		height: 100%;

		.content-layout {
			margin-top: -64px;
			height: 100%;
			width: 100%;
			z-index: -5;
		}
	}	

.fade-enter {
	opacity: 0;
}

.fade-enter-active {
	transition: opacity 0.5s ease;
}

.fade-leave {
}

.fade-leave-active {
}

</style>
