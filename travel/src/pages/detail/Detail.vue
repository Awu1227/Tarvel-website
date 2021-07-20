<template>
  <div>
    <DetailBanner/>
    <DetailHeader/>
    <div class="content"></div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>
<style lang="stylus" scoped>
.content
  height 200vw
</style>
