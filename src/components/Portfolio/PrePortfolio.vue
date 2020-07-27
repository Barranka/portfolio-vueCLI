<template>
<section>
    <div class="container">
        <div class="container-content">
			<h2 class="title">Портфолио:</h2>
			<div class="image-icon">
				<img :src="`${src}/img/port.png`" alt="port.png" >
			</div>

			<!-- slider -->
			<div class="posts">
				<carousel
            	  :perPageCustom="[[1280, 3], [980, 2], [320, 1]]"
            	  :paginationEnable="true"
				  :navigationEnabled="true"
            	  paginationColor="#b3b3b3"
            	  paginationActiveColor="#494ce8">

            	  	<slide class="post" v-for="post in posts" :key="post.title">
						<div class="post__wrapper">
							<div class="post__img">
								<img class="post__img_active" :src="`${src}${post.postWeb}`" alt="post.postWeb">
								<img class="post__img_hover" :src="`${src}${post.postWebHover}`" alt="post.postWebHover">
							</div>
							<div class="post__info">
								<div class="post__head">
									<h3 v-html="post.title" class="post__title"><strong></strong></h3>
									<div class="post__web">
										<a :href="post.gitLinks.link" class="post__link" target="_blank">
											<img :src="`${src}${post.postIcon1}`" alt="www.png" class="post__link-icon">
										</a>
										<a :href="post.gitLinks.github" class="post__link" target="_blank">
											<img :src="`${src}${post.postIcon2}`" alt="git.png" class="post__link-icon">
										</a>
									</div>
								</div>
								<hr class="hr" color="#ececec" width="320px" align="left" size="1px">
								<div class="post__props">
									<div class="card__i">
										<div class="card__i-tr"><strong>Тип:</strong></div>
										<div class="card__i-tr"><strong>Технологии:</strong></div>
									</div>
									<div class="card__i">
										<div class="card__i-td" v-html="post.postProps.type"></div>
										<div class="card__i-td" v-html="post.postProps.tech"></div>
									</div>
								</div>
								<hr class="hr" color="#ececec" width="320px" align="left" size="1px">
								<p class="post__descr">{{ post.postProps.postDescr }}</p>
							</div>
						</div>
					</slide>
            	</carousel>
			</div>
        </div>
    </div>
</section>
</template>


<script>
import { mapState } from 'vuex'
import { Carousel, Slide } from 'vue-carousel'

export default {
	components: {
		Carousel,
		Slide,
	  },
  	computed: {
    	...mapState({
			posts: state => state.posts.posts,
			src: state => state.posts.src
    }),
}
}
</script>

<style lang="scss">
.VueCarousel-inner {
	visibility: visible!important;
	flex-basis: 100%!important;
	width: 100%!important;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
	color: #267a96;
}
.VueCarousel-navigation-button[data-v-453ad8cd]:focus {
    outline: 1px solid #fff;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
    cursor: pointer;
}
</style>