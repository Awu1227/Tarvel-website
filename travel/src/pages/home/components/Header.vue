<template>
  <div class="header">
    <div class="header-left">
    <span class="iconfont back-icon">&#xe697;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6ac;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">{{this.city}}
      <span class="iconfont">&#xe6a6;</span>
    </div>
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
    line-height .86rem
    background  $bgColor
    display flex
    height .86rem
    color #fff
    .header-left
      width .64rem
      float left
      text-align center
      .back-icon
        font-size x-large
    .header-input
      flex 1
      line-height .64rem
      height .64rem
      margin-top .11rem
      margin-left .2rem
      padding-left .08rem
      background-color #fff
      border-radius .1rem
      color #ccc
    .header-right
      width 1.24rem
      float right
      text-align center
</style>
