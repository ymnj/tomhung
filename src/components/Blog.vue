<template>
	<div id="blog-container">
		<div v-for="post in posts" class="post-wrap">
			<h2>{{post.title.rendered}}</h2>
			<p>{{post.content.rendered}}</p>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';	

	export default {
		data() {
			return {
				posts: []
			}
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
		background-color: red;
		height: 100%;
	}

	.post-wrap	{
		margin-bottom: 30px;
	}
</style>