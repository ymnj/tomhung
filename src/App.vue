<template>

	<div class="tom-layout">
		<navBar class="z-depth-0"></navBar></navBar>
		<div class="content-layout">
			<router-view></router-view>
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
		}
	}


//#A9B7C0 Gre Blue
//#C7D8C6 Minty
//#EFD9C1 Light
//#CCCBC6 Powder
</style>
