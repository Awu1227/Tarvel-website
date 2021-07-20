<template>
  <div>
    <router-link to="/" v-show="showAbs">
    <div class="header-abs">
      <span class="iconfont header-abs-back" >&#xe697;</span>
      </div>
      </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
    <router-link to="/">
      <span class="iconfont header-fixed-back" >&#xe697;</span>
    </router-link>
          景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: 0
    }
  },
  methods: {
    // 实现渐隐渐现效果
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 利用钩子对全局事件进行解绑
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left 2.6667vw
  top 2.6667vw
  width 10.6667vw
  height 10.6667vw
  border-radius 5.3333vw
  background rgba(0,0,0,0.8)
  text-align center
  line-height 10.6667vw
  .header-abs-back
    color #fff
    font-size 5.3333vw
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #fff
  background-color $bgColor
  font-size 4.2667vw
  .header-fixed-back
    top 0
    left 1.3333vw
    position absolute
    width 8.5333vw
    text-align center
    font-size 7.4667vw
    color #fff
</style>
