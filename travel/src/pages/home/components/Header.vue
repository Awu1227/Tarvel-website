<template>
  <div class="header">
    <div class="header-left">
    <span class="iconfont back-icon">&#xe697;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6ac;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont ">&#xe6a6;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
/* 引入CSS文件，在@符号之前需要加波浪线 */
  @import '~styles/varibles.styl'
  .header
    line-height $headerHeight
    background  $bgColor
    display flex
    line-height 11.4667vw
    height 11.4667vw
    color #fff
    .header-left
      width 8.5333vw
      float left
      text-align center
      .iconfont
        font-size 7.4667vw
    .header-input
      flex 1
      line-height 8.5333vw
      height 8.5333vw
      margin-top 1.4667vw
      margin-left 2.6667vw
      padding-left 1.0667vw
      background-color #fff
      border-radius 1.3333vw
      font-size 3.7333vw
      color #ccc
    .header-right
      color #fff
      width 16.5333vw
      float right
      text-align center
      .iconfont
        font-size 7.4667vw
</style>
