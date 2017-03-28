<template>
	<div class="image-flex-wrap">
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_70,w_618/v1488168835/sea_to_sky/sea-to-sky-1.jpg`"
			srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1488168835/sea_to_sky/sea-to-sky-1 1344w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-1 926w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-1 450w" 
			lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_70/v1488168835/sea_to_sky/sea-to-sky-2.jpg`" 
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-2.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-2.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w"> 
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_70/v1488168835/sea_to_sky/sea-to-sky-4.jpg`" 
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-4.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-4.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w"> 
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_71,w_618/v1488168835/sea_to_sky/sea-to-sky-7.jpg`"
			srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1488168835/sea_to_sky/sea-to-sky-7 1344w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-7 926w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-7 450w" 
			lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_71,w_618/v1488168835/sea_to_sky/sea-to-sky-5.jpg`"
			srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1488168835/sea_to_sky/sea-to-sky-5 1344w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-5 926w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-5 450w" 
			lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_71,w_618/v1488168835/sea_to_sky/sea-to-sky-6.jpg`"
			srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1488168835/sea_to_sky/sea-to-sky-6 1344w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-6 926w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-6 450w" 
			lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_70/v1488168835/sea_to_sky/sea-to-sky-8.jpg`" 
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-8.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-8.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w"> 
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_70/v1488245225/sea_to_sky/sea-to-sky-9.jpg`" 
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488245225/sea_to_sky/sea-to-sky-9.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488245225/sea_to_sky/sea-to-sky-9.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w"> 
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_70/v1488168835/sea_to_sky/sea-to-sky-10.jpg`" 
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-10.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-10.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w"> 
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_70/v1488168835/sea_to_sky/sea-to-sky-11.jpg`" 
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-11.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-11.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w"> 
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_71,w_618/v1488168835/sea_to_sky/sea-to-sky-12.jpg`"
			srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1488168835/sea_to_sky/sea-to-sky-12 1344w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-12 926w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-12 450w" 
			lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/q_71,w_618/v1488168835/sea_to_sky/sea-to-sky-13.jpg`"
			srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1488168835/sea_to_sky/sea-to-sky-13 1344w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1488168835/sea_to_sky/sea-to-sky-13 926w,
 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1488168835/sea_to_sky/sea-to-sky-13 450w" 
			lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
</template>

<style lang="scss">
	@import './album-styles.scss';
</style>