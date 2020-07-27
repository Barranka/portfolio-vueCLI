<template>
  <div class="wrapper">

    <!-- header -->
    <header>
      <div class="navbar">
          <div class="container">
            <div class="navbar-content">
              <a href="./" class="logo-link"><div class="logo-link__title" v-html="'Ekaterina&nbsp;Khripunova'"></div></a>

              <!-- burger-lines -->
              <div class="burger" :class="{ active: isActive}" @click="isActive = !isActive">
                <span class="burger__line"></span>
                <span class="burger__line"></span>
                <span class="burger__line"></span>
              </div>

              <!-- navbar-menu-main -->
              <ul class="navbar-list">
                <li class="navbar-item" v-for="link in links" :key="link.title">
                  <router-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</router-link>
                </li>
              </ul>

              <div class="menu-wrapper" v-if="isActive" @click.self="closeMenu()">
                <!-- burger-menu -->
                <ul class="menu-nav" v-if="isActive" :class="{ menuActive: isActive}" >
                  <li class="menu-nav__item" v-for="link in links" :key="link.title" @click="isActive = !isActive">
                    <router-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </header>


    <router-view></router-view>

    <footerComp />


  </div>
</template>

<script>
import footerComp from "@/components/Portfolio/FooterComp.vue"
export default {
  components: {
    footerComp
  },
  data () {
    return {
      links: [
        {title: 'Главная', url: '/'},
        {title: 'Портфолио', url: '/portfolio'},
        {title: 'Контакты', url: '/contact'}
      ],
      isActive: false
    }
  },
  methods: {
    closeMenu() {
      this.isActive = false
    }
  }
};
</script>