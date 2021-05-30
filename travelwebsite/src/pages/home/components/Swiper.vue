<template>
<div class="wrapper">
  <swiper :options="swiperOptions">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://static.oneplus.cn/data/attachment/forum/202105/10/111930dzo8tfce85xwl824.jpg?x-oss-process=image/resize,w_768'
      }, {
        id: '0002',
        imgUrl: 'https://static.oneplus.cn/data/attachment/forum/202105/10/111931m9z7smkmbmmm9koz.jpg?x-oss-process=image/resize,w_768'
      }, {
        id: '0003',
        imgUrl: 'https://static.oneplus.cn/data/attachment/forum/202105/10/111931i0oddg8yl8808zgi.jpg?x-oss-process=image/resize,w_768'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active{
  background #fff
}
.wrapper{
  overflow:hidden
  width:100%
  height:0
  padding-bottom :76.5%
}
.swiper-img{
  width 100%
}
</style>
