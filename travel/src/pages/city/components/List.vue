<template>
<div class="list" ref="wrapper">
  <div>
  <div class="area">
    <div class="title border-topbottom">当前城市</div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">
          上海
        </div>
      </div>
    </div>
  </div>
  <div class="area">
    <div class="title border-topbottom">热门城市</div>
    <div class="button-list">
      <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
        <div class="button">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
  <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
    <div class="title border-topbottom">{{key}}</div>
    <div class="item-list">
      <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  // 监听letter变化
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]// 本来是一个数组，需要转换加[0]
        this.scroll.scrollToElement(element)
      }
      console.log(this.letter)
    }
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
          font-size 1.8667vw
    .item-list
      .item
        line-height 10.1333vw
        color #666
        padding-left 2.6667vw
        font-size 1.8667vw
</style>
