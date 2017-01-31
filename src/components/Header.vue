<template>
		<header class="mdl-layout__header mdl-layout__header--transparent">
	    <div class="mdl-layout-icon"></div>
	    <div class="mdl-layout__header-row">
	      <!-- Title -->
	      <span class="mdl-layout-title mdl-color-text--grey-900">
	      	<router-link class="mdl-navigation__link mdl-color-text--grey-900" to="/" exact>
						<img id="logo" src="../../src/assets/TH02.png">
	      	</router-link>
	      </span>
	      <!-- Add spacer, to align navigation to the right -->
	      <div class="mdl-layout-spacer"></div>
	      <!-- Navigation -->
	      <nav class="mdl-navigation">
	        <router-link class="mdl-navigation__link" to="/" active-class="is-active" exact>Home</router-link>
	       	<router-link class="mdl-navigation__link" active-class="is-active" to="/photos">Photos</router-link>
	        <router-link class="mdl-navigation__link" active-class="is-active" to="/projects">Projects</router-link>
	      </nav>
	    </div>
	  </header>
</template>

<script></script>