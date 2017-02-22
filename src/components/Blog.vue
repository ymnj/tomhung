<template>
	<div id="blog-container">
		<div v-for="post in posts" class="posts-wrap">
			<div class="featured-image">
				<img :src="post.better_featured_image.source_url">
			</div>
			<!-- <div class="excerpt">
				<h1>{{ post.title.rendered }}
				<p>{{ post.excerpt.rendered }}</p>
			</div> -->

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

				let url = 'http://localhost/wordpress-cms/wp-json/wp/v2/posts/?per_page=2';

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


<style lang="scss">
	#blog-container {
		padding: 200px 20% 0;
		background-color: #eee;
		height: 100%;
	}

	.posts-wrap	{
			background-color: salmon;

		.featured-image {
			width: 100%;
			height: auto;
			background-color: red;

			img {
				width: 100%;
				height: auto;
				display: block;
			}
		}
	}

</style>