<template>
  <div>
  <ul class="list">
    <li class="item" v-for="item of letter" :key="item" @click="handleLetterClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" :ref="item">{{item}}</li>
  </ul>
  </div>
</template>
<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      // 标识位
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    // 把cities转换为数组
    letter () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 节流处理
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 74
          const index = Math.floor((touchY - this.startY) / 14)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('change', this.letter[index])
          }
        }, 10)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .list
    display flex
    flex-direction column
    justify-content center
    align-items center
    position absolute
    top 21.0667vw
    right 0
    bottom 0
    width 5.3333vw
    color $bgColor
    .item
      font-size 2.6667vw
      margin 0.2667vw
</style>
