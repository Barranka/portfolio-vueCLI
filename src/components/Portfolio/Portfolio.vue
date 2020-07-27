 <template>
 <section>
    <div class="container">
        <div class="container-content">
			<h2 class="title">Портфолио:</h2>
			<div class="image-icon">
				<img :src="`${src}/img/port.png`" alt="port.png" >
			</div>
			<div class="cards">
              	<div class="cards__wrapper" v-for="post in posts" :key="post.title">
					<div class="card">
						<div class="card__img">
							<img class="card__img_active" :src="`${src}${post.postWeb}`" alt="post.postWeb">
							<img class="card__img_hover" :src="`${src}${post.postWebHover}`" alt="post.postWebHover">
						</div>
						<div class="card__info">
							<div class="card__head">
								<h3 v-html="post.title" class="card__title"><strong></strong></h3>
								<div class="card__web">
									<a :href="post.gitLinks.github" class="card__link" target="_blank">
										<img :src="`${src}${post.postIcon2}`" alt="git.png" class="card__link-icon">
									</a>
									<a :href="post.gitLinks.link" class="card__link" target="_blank">
										<img :src="`${src}${post.postIcon1}`" alt="www.png" class="card__link-icon">
									</a>
								</div>
							</div>
							<hr color="#ececec" width="320px" align="left" size="1px">
							<div class="card__props">
								<div class="card__i">
									<div class="card__i-tr"><strong>Тип:</strong></div>
									<div class="card__i-tr"><strong>Технологии:</strong></div>

								</div>
								<div class="card__i">
									<div class="card__i-td" v-html="post.postProps.type"></div>
									<div class="card__i-td" v-html="post.postProps.tech"></div>
								</div>
							</div>
							<hr color="#ececec" width="320px" align="left" size="1px">
							<p class="card__descr"> {{ post.postProps.postDescr }} </p>
						</div>
					</div>
				</div>
			</div>
        </div>

    </div>
 </section>
</template>


<script>
import { mapState } from 'vuex'

export default {
  	computed: {
    	...mapState({
			posts: state => state.posts.posts,
			src: state => state.posts.src
    	}),
	}
}
</script>
