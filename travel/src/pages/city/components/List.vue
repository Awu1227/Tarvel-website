<template>
<div class="list" ref="wrapper">
  <div>
  <div class="area">
    <div class="title border-topbottom">当前城市</div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">
          北京
        </div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">热门城市</div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">
          北京
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">
          成都
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">
          南京
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">
          杭州
        </div>
      </div>
      <div class="button-wrapper">
        <div class="button">
          哈尔滨
        </div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
      <div class="item border-bottom">阿拉尔</div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow hidden
    position absolute
    top 21.0667vw
    left 0
    right 0
    bottom 0
    .title
      line-height 7.2vw
      color #666
      background-color #eee
      padding-left 2.6667vw
      font-size 3.4667vw
    .button-list
      overflow hidden
      padding 1.3333vw 8vw 1.3333vw 1.3333vw
      .button-wrapper
        width 33.33%
        float left
        .button
          text-align center
          margin 1.3333vw 1.3333vw
          padding 1.3333vw 0
          border 0.2667vw solid #ccc
          border-radius 0.8vw
    .item-list
      .item
        line-height 10.1333vw
        color #666
        padding-left 2.6667vw
</style>
