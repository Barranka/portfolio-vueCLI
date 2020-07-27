<template>
    <footer>
		<div class="container">
              <div class="footer">
				  	<div class="footer__item">
						<div class="footer__sign">
		  					<p class="footer__sign-text">© 2020, Ekaterina Khripunova</p>
		  				</div>
		  				<div class="footer__web">
		  					<a v-for="png in links" :key="png.png" :href="png.link" target="_blank">
							  <img :src="`${src}${png.png}`" class="footer__web-link" :alt="links.png">
							</a>
		  				</div>
					</div>
			  </div>
		</div>
    </footer>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data(){
		return {
			links: [
				{png: '/img/vk.png', link: 'https://vk.com/id5915922'},
				{png: '/img/linkedin.png', link: 'https://www.linkedin.com/in/ekaterina-khripunova-b19022189/'},
				{png: '/img/github.png', link: 'https://github.com/Barranka'}
			]
		}
	},
	computed: {
    	...mapState({
			src: state => state.posts.src
    	}),
	}
}
</script>