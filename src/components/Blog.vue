<template>
	<div id="blog-container">
		<div v-for="post in posts" class="posts-wrap">
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
				//GET request for all the current posts. ?per_page=1 to limit response to 1 post.

				let url = 'http://tomhung.ca/api/blog/wp-json/wp/v2/posts/?per_page=2';

				axios.get(url)
					.then((posts) => {
						this.posts = posts.data;
						console.log(this.posts);
						
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

	.posts-wrap	{
		background-color: salmon;
	}
</style>