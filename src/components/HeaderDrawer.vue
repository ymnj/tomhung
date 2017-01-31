<template>
	<div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation">
      <router-link class="mdl-navigation__link" to="/" active-class="is-active" exact>Home</router-link>
      <router-link class="mdl-navigation__link" active-class="is-active" to="/photos">Photos</router-link>
      <router-link class="mdl-navigation__link" active-class="is-active" to="/projects">Projects</router-link>
    </nav>
  </div>
</template>
<!-- 
<router-link class="mdl-navigation__link" to="/" active-class="is-active" exact>Home</router-link>
	   	<router-link class="mdl-navigation__link" active-class="is-active" to="/photos">Photos</router-link>
	    <router-link class="mdl-navigation__link" active-class="is-active" to="/portfolio">Portfolio</router-link> -->