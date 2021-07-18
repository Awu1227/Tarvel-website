<template>
  <div>
   <home-header></home-header>
   <home-swiper></home-swiper>
   <div>text</div>
  </div>
</template>
<script>
// 引入子组件
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
<style lang="">

</style>
