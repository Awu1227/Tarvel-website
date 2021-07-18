<template>
  <div>
<div class="title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  props: {
    list: Array
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top 2.6667vw
  line-height 10.6667vw
  background-color #eee
  text-indent 2.6667vw
  font-size 3.7333vw
.item
  overflow hidden
  display flex
  height 25.8vw
  .item-img
    width 36vw
    height 21.3333vw
    padding 1.3333vw
  .item-info
    flex 1
    /*让...显示出来*/
    min-width 0
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
  .item-button
    background #ff9300
    padding 0 1.3333vw
    margin-top 2.1333vw
    border-radius 0.8vw
    font-size 3.7333vw
</style>
