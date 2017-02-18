<template>
	<div id="blog-container">
		<div v-for="post in posts" class="post-wrap">
			<PostDetail :post="post"></PostDetail>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';	
	import PostDetail from './PostDetail.vue';

	export default {
		data() {
			return {
				posts: []
			}
		},
		components: {
			PostDetail
		},
		methods: {
			getPosts() {
				let url = 'http://tomhung.ca/blog/wp-json/wp/v2/posts/?per_page=2';

				axios.get(url)
					.then((posts) => {
						this.posts = posts.data;
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		mounted() {
			this.getPosts();
		}
	}
</script>


<style type="scss">
	#blog-container {
		padding: 100px 10% 0;
		background-color: steelblue;
		height: 100%;
	}

	.post-wrap	{
		background-color: salmon;
		margin-bottom: 30px;
	}
</style>