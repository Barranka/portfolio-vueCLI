<template>
	<section class="fullscreen">
		<div class="container">
			<div class="container-content">
				<h2 class="title">Контакты:</h2>
				<div class="image-icon">
					<img :src="`${src}/img/about.png`" alt="contact.png" >
				</div>
				<div class="contact">
					<div class="contact__wrapper">
						<div class="contact__item">
							<div class="contact__item-img">
								<img :src="`${src}/img/email.png`" alt="email.png">
							</div>
							<div class="contact__item-descr">
								<p class="contact__card-descr">Телефон:</p>
								<p class="contact__card-descr" v-html="'+7 (964) 575 29 30'"></p>
							</div>
						</div>
						<div class="contact__item">
							<div class="contact__item-img">
								<img :src="`${src}/img/phone.png`" alt="email.png">
							</div>
							<div class="contact__item-descr">
								<p class="contact__card-descr">Почта:</p>
								<p class="contact__card-descr">cat123_93@mail.ru</p>
							</div>
						</div>
						<div class="contact__item-link">
							<div class="contact__icon">
								<a href="https://vk.com/id5915922" target="_blank"><img :src="`${src}/img/vk2.png`" alt="vk.png"></a>
							</div>
							<div class="contact__icon">
								<a href="https://www.linkedin.com/in/ekaterina-khripunova-b19022189/" target="_blank"><img :src="`${src}/img/in.png`" alt="in.png"></a>
							</div>
							<div class="contact__icon">
								<a href="https://github.com/Barranka" target="_blank"><img :src="`${src}/img/github_icon.png`" alt="github.png"></a>
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
			src: state => state.posts.src
    	}),
	}
}
</script>

<style lang="scss" scoped>
.fullscreen {
	background: url('/img/bann.jpg') no-repeat center/90% fixed;
	min-height: 90vh;
}
.container {
	display: flex;
    justify-content: center;
    flex-direction: column;
}
</style>