<template>
 <section class="fullscreen">
     <div class="container">
         <div class="container-content">
			<div class="info">
				<img :src="image" alt="me.jpg" class="info__avatar-adapt">
				<div class="info__text">
					<p><strong>Меня зовут Екатерина Хрипунова!</strong></p>
					<p>Проживаю в Москве. И в настоящее время нахожусь в поиске работы на позицию Frontend&nbsp;Developer (VUE).</p>
					<p>Моя цель - дальше развиваться в этом направлении и улучшать свои навыки.</p>
					<p>С моим портфолио можно ознакомиться на этом сайте. А также найти контактные данные для связи.</p>
					<p>Жду ваших предложений и всегда открыта для сотрудничества. Давайте знакомиться!</p>
				</div>
				<img :src="image"  alt="me.jpg" class="info__avatar">
			</div>
         </div>
     </div>
 </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data() {
		return {}
	},
  	computed: {
    	...mapState({
			src: state => state.posts.src
    	}),
		image() {
			return `${this.src}/img/me.jpg`;
		},
	}
}
</script>