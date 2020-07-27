<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <img src="" alt="">
      <div class="container">
        <h1 class="title">Страница не найдена!</h1>
		    <p>Перейти <router-link class="link" to="/">на главную?</router-link></p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
p {
  font-size: 24px;
}

.wrapper-content {
	min-width: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
  text-align: center;
  background: url('/img/banner.jpg') center no-repeat;
}

</style>