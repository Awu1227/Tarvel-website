<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://youimg1.c-ctrip.com/target/01032120008oxvoqa16D3_D_750_420.jpg?proc=autoorient" />
      <div class="banner-info">
        <div class="banner-tittle">
          长沙生态动物园(AAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe604;</span>
          3
        </div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://youimg1.c-ctrip.com/target/01032120008oxvoqa16D3.jpg', 'https://youimg1.c-ctrip.com/target/100313000000v8lqh970A.jpg', 'https://youimg1.c-ctrip.com/target/030691200087hxt4mC533_C_380_286.jpg?proc=autoorient']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: 8vw
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: 4.2667vw
        padding: 0 2.6667vw
      .banner-number
        height: 4.2667vw
        line-height: 4.2667vw
        margin-top: 1.8667vw
        padding: 0 5.3333vw
        border-radius: 2.6667vw
        background: rgba(0, 0, 0, .8)
        font-size: 3.2vw
        .banner-icon
          font-size: .0.032vw
</style>
