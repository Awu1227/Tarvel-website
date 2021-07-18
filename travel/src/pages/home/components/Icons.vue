<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png',
        desc: '景点门票'
      },
      {
        id: '0002',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png',
        desc: '度假'
      },
      {
        id: '0003',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png',
        desc: '火车票'
      },
      {
        id: '0004',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png',
        desc: '机票'
      },
      {
        id: '0005',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png',
        desc: '酒店'
      },
      {
        id: '0006',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },
      {
        id: '0007',
        imgUrl: 'https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png',
        desc: '攻略'
      },
      {
        id: '0008',
        imgUrl: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
        desc: '低价机票'
      },
      {
        id: '0009',
        imgUrl: 'https://picbed.qunarzz.com/c65b3bb7571a6bd62df669213e44b84d.png',
        desc: '一日游'
      }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height 0
  padding-bottom: 50%
.icons
  margin-top .2rem
  .icon
    position relative
    overflow hidden
    float left
    height 0
    width 25%
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center
      ellipsis()
</style>
