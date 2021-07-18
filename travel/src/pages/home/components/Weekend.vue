<template>
  <div>
<div class="title">周末去哪儿</div>
  <ul>
    <li class="item border-bottom" v-for="item of list" :key="item.id">
      <div class="item-img-wrapper">
        <img class="item-img" :src="item.imgUrl" alt="">
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </li>
  </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  line-height 10.6667vw
  background-color #eee
  text-indent 2.6667vw
  font-size 3.7333vw
.item-img-wrapper
  border-radius 1.3333vw
  overflow hidden
  padding-bottom 67%
  height 0
.item-img
  width 100%
.item-info
  padding 1.3333vw
.item-title
  line-height 7.2vw
  font-size 5.3333vw
  ellipsis()
.item-desc
  line-height 5.3333vw
  font-size 3.7333vw
  color #C8793F
  ellipsis()
</style>
