<template>
 <section>
    <div class="container">
        <div class="container-content">
			<h2 class="title">Навыки:</h2>
			<div class="image-icon">
				<img :src="`${src}/img/skill.png`" alt="skills.png" >
			</div>

			<div class="skills">
				<div class="skills__wrapper">
					<div class="skills__card">
						<h3  class="skills__card-title">Frontend Development:</h3>
						<p class="skills__card-descr" v-html="frontend"></p>
					</div>
				</div>
				<div class="skills__wrapper">
					<div class="skills__card">
						<h3 class="skills__card-title">Сборка:</h3>
						<p class="skills__card-descr" v-html="assembly"></p>
					</div>
				</div>
				<div class="skills__wrapper">
					<div class="skills__card">
						<h3 class="skills__card-title">Other:</h3>
						<p class="skills__card-descr" v-html="other"></p>
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
        frontend: state => state.skills.skills.frontend,
		assembly: state => state.skills.skills.assembly,
		design: state => state.skills.skills.design,
		other: state => state.skills.skills.other,
		src: state => state.posts.src
    }),
}
}
</script>