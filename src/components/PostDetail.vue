<template>
	<div class="single-post-wrap">
		<h1 class="title">{{ post.title.rendered }}</h1>
		<h5 class="date">{{ date }}</h5>
		<p v-html="content"></p>
	</div>
</template>


<script>
	import moment from 'moment';

	export default {
		props: ['post'],
		data() {
			return {
				date: moment().format("DD MMM YYYY"),
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