<template>
  <div>
<div class="title">周末去哪儿</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://dimg02.c-ctrip.com/images/02069120008c1fjvfF421_D_480_320_R5.jpg',
        title: '南京紫金山庄',
        desc: '湖畔美居 人气热搜 精品酒店'
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
.item-img-wrapper
  overflow hidden
  padding-bottom 63.9%
  height 0
.item-img
  width 100%
.item-info
  padding .1rem
.item-title
  line-height .54rem
  font-size .40rem
  ellipsis()
.item-desc
  line-height .4rem
  color #C8793F
  ellipsis()
</style>
