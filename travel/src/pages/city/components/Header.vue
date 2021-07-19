<template>
  <div class="header" >
    <router-link to="/">
      <span class="iconfont header-back" >&#xe697;</span>
    </router-link>
  城市选择
  </div>
</template>
<script>
export default {
  data () {
    return {
      headerWidth: []
    }
  },
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
  font-size 4.2667vw
  .header-back
    top 0
    left 1.3333vw
    position absolute
    width 8.5333vw
    text-align center
    font-size 7.4667vw
    color #fff
</style>
