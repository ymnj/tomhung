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
		},
		methods: {
			setHomeBackgroundImage() {
				let body = document.body;
				body.style.background = "url('/static/main-background.jpg') #fff no-repeat center center fixed";
				body.style.backgroundSize = "cover";
			}
		},
		watch: {
			'$route'(to, from) {
				if(to.path === '/') {
					this.setHomeBackgroundImage();
				} else {
					let body = document.body;
					body.style.background = "#fff";
				}
			}
		},
		mounted() {
			if(this.$route.name === 'Home'){
				this.setHomeBackgroundImage();
			}
		}
	}

</script>

<style lang="scss">

html {
	height: 100%;
	max-width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
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

.fade-enter, .fade-leave-active {
  opacity: 0
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: 200ms;
}

.fade-enter-active {
  transition-delay: 100ms;
}

</style>
