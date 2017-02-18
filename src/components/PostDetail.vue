<template>
<div>
	<h2>{{ post.id }}</h2>
	<div v-html="content"></div>
	</div>
</template>


<script>
	export default {
		props: ['post'],
		data() {
			return {
				content: this.post.content.rendered
			}
		}
	}
</script>