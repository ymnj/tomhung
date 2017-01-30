<template>

	<div id="main" class="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button">
		<appHeader></appHeader>
		<div class="mdl-layout__drawer">
	    <span class="mdl-layout-title">Title</span>
	    <nav class="mdl-navigation">
	      <a class="mdl-navigation__link" href="">Home</a>
        <a class="mdl-navigation__link" href="">Photo</a>
        <a class="mdl-navigation__link" href="">Portfolio</a>
	    </nav>
	  </div>

	  <main class="mdl-layout__content">
	  	<router-view></router-view>
	  </main>
	</div>

</template>

<script>
	import Header from './components/Header.vue';
	export default {
		components: {
			appHeader: Header
		}
	}
</script>

<style>

</style>
