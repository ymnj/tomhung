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

<style src="./styles/styles.scss" lang="scss"></style>
