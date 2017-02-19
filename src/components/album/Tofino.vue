<template>
	<div class="image-flex-wrap">
		<div class="image-cell">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_10/v1487481481/tofino/tofino-1.jpg`" lazy="loading">
		</div>
	</div>
</template>

<style lang="scss">
	@import './album-styles.scss';
</style>