<template>
	<div class="image-flex-wrap">
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-1.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-1.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-1.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-1.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-2.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-2.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-2.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-3.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-3.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-3.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-4.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-4.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-4.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-4.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-5.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-5.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-5.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-5.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-6.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-6.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-6.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-7.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-7.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-7.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-8.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-8.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-8.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-9.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-9.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-9.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-10.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-10.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-10.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-10.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-11.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-11.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-11.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-12.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-12.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-12.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-14.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-14.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-14.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-16.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-16.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-16.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-15.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-15.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-15.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-15.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-17.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-17.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-17.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-18.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-18.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-18.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-19.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-19.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-19.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-19.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-20.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-20.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-20.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-20.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-21.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-21.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-21.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-21.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-22.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-22.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-22.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-22.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-23.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-23.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-23.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small logo">
			<img src="../../assets/TH03.png">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-24.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-24.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-24.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-24.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-25.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-25.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-25.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-25.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-26.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-26.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-26.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-small">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/_auto,q_70/v1487481481/tofino/tofino-27.jpg`"  
					 srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-27.jpg 926w,
			 						 http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-27.jpg 450w" 
			 		  lazy="loading"  sizes="(min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
		<div class="image-large">
			<img v-lazy="`http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70/v1487481481/tofino/tofino-28.jpg`" 
						srcset="http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_1344/v1487481481/tofino/tofino-28.jpg 1344w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_926/v1487481481/tofino/tofino-28.jpg 926w,
			 							http://res.cloudinary.com/tomhung/image/upload/f_auto,q_70,w_450/v1487481481/tofino/tofino-28.jpg 450w" 
			 		    lazy="loading"  sizes="(min-width: 926px) 1344w, (min-width: 451px) 926w, (max-width: 450px) 450w">
		</div>
</template>

<style lang="scss">
	@import './album-styles.scss';
</style>