<template>
  <div>
<div class="title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://youimg1.c-ctrip.com/target/0101q12000859gshi78BE_D_480_320.jpg',
        title: '长沙海底世界',
        desc: '"观赏海洋生物夏季亲水消暑"'
      },
      {
        id: '0002',
        imgUrl: 'https://youimg1.c-ctrip.com/target/0101q12000859gshi78BE_D_480_320.jpg',
        title: '长沙海底世界',
        desc: '"观赏海洋生物夏季亲水消暑"'
      },
      {
        id: '0003',
        imgUrl: 'https://youimg1.c-ctrip.com/target/0101q12000859gshi78BE_D_480_320.jpg',
        title: '长沙海底世界',
        desc: '"观赏海洋生物夏季亲水消暑"'
      },
      {
        id: '0004',
        imgUrl: 'https://youimg1.c-ctrip.com/target/0101q12000859gshi78BE_D_480_320.jpg',
        title: '长沙海底世界',
        desc: '"观赏海洋生物夏季亲水消暑"'
      },
      {
        id: '0005',
        imgUrl: 'https://youimg1.c-ctrip.com/target/0101q12000859gshi78BE_D_480_320.jpg',
        title: '长沙海底世界',
        desc: '"观赏海洋生物夏季亲水消暑"'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height .8rem
  background-color #eee
  text-indent .2rem
.item
  overflow hidden
  display flex
  height 6.9em
  .item-img
    width 2.7rem
    height 1.6rem
    padding .1rem
  .item-info
    flex 1
    /*让...显示出来*/
    min-width 0
    padding .1rem
  .item-title
    line-height .54rem
    font-size .40rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #C8793F
    ellipsis()
  .item-button
    background #ff9300
    padding 0 .1rem
    margin-top .16rem
    border-radius .06rem
</style>
