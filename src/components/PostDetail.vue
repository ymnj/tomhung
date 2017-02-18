<template>
	<div class="single-post-wrap">
		<h1 class="title">{{ title }}</h1>
		<h5 class="date">{{ date }}</h5>
		<p v-html="excerpt"></p>
<!-- 		<p v-html="content"></p> -->
	</div>
</template>


<script>
	import moment from 'moment';

	export default {
		props: ['post'],
		data() {
			return {
				title: this.post.title.rendered,
				date: moment(this.post.date).format("DD MMM YYYY"),
				excerpt: this.post.excerpt.rendered,
				content: this.post.content.rendered
			}
		}
	}
</script>

<style lang='scss'>

	.single-post-wrap {
		background-color: #fff;
		margin-bottom: 50px;
	}

	.title {
		font-size: 2em;
		margin: 0;
	}

</style>