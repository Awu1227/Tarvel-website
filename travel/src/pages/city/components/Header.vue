<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont header-back" >&#xe697;</span>
    </router-link>
  城市选择
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background-color $bgColor
  font-size .32rem
  .header-back
    top 0
    left .1rem
    position absolute
    width 0.64em
    text-align center
    font-size .4rem
    color #fff
</style>
