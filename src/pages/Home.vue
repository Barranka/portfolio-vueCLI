<template>
  <div class="wrapper-content wrapper-content--fixed">

    <!-- Banner -->
    <section class="fullscreen">
        <div class="container">
            <div class="container-content banner-content">
              <div class="banner">
                  <p class="banner__item-A">Hello</p>
                  <p class="banner__item-B">World!</p>
              </div>
              <div class="banner-another">
                  <p class="banner-another__item-A">Hello</p>
                  <p class="banner-another__item-B">World!</p>
              </div>
            </div>
        </div>
    </section>

    <!-- Components -->
    <aboutMe />
    <skills />
    <prePortfolio />
    <certificates/>

  </div>
</template>

<script>
import aboutMe from "@/components/Portfolio/AboutMe.vue"
import skills from "@/components/Portfolio/Skills.vue"
import prePortfolio from "@/components/Portfolio/PrePortfolio.vue"
import certificates from "@/components/Portfolio/Certificates.vue"

export default {
  components: {
    aboutMe, skills, prePortfolio, certificates
  }
}
</script>
<style lang="scss" scoped>
.banner-content {
	// height: 100vh;
}
</style>