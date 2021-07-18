<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for = "item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // 增加轮播底部按钮
        pagination: '.swiper-pagination',
        // 循环展示轮播
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://static.699pic.com/images/lvyou/slide-shanghai.jpg'
      },
      {
        id: '0002',
        imgUrl: 'https://static.699pic.com/images/lvyou/slide-zhangjiajie.jpg'
      },
      {
        id: '0003',
        imgUrl: 'https://static.699pic.com/images/lvyou/slide-sanya.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: #fff !important;
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 64%
  background #eee
  .swiper-img
    width 100%
</style>
