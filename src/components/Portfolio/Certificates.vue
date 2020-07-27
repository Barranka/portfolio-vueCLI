<template>
	<section>
	   <div class="container">
		   <div class="container-content">
			   <h2 class="title">Сертификаты:</h2>
			   <div class="image-icon">
				   <img :src="`${src}/img/edu.png`" alt="edu.png" >
			   </div>
			   <div class="gallery">
				   <gallery :images="images" :index="index" @close="index = null"></gallery>
				   <div
						class="image"
						v-for="(image, imageIndex) in images"
						:key="imageIndex"
						@click="index = imageIndex"
						:style="{ backgroundImage: 'url('+ image +')', width: '280px', height: '390px' }">
				   </div>
			   </div>
		   </div>
	   </div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
import VueGallery from 'vue-gallery'

export default {
   components: {
	   'gallery':VueGallery
   },
   data() {
	   return {
		   images: [
			   '/portfolio-vueCLI/img/certificate/vue.png',
			   '/portfolio-vueCLI/img/certificate/js.jpg',
			   '/portfolio-vueCLI/img/certificate/1C-admin.jpg',
			   '/portfolio-vueCLI/img/certificate/1C-content.png',
		   ],
		   index: null
	   }
   },
	 computed: {
	   ...mapState({
		   src: state => state.posts.src
	   }),
   }
}
</script>

<style lang="scss" scoped>
.container-content {
   margin-bottom: 100px;
   @media (max-width: 480px) {
	   margin-bottom: 30px;
   }
}
.gallery {
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
}
.image {
	 background-size: cover;
	 background-repeat: no-repeat;
	 background-position: center center;
	 border: 1px solid #ebebeb;
   margin: 10px;
   cursor: pointer;
}
</style>
