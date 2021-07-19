<template>
<div>
  <div class="search">
    <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
  <div class="search-content" ref="search" v-show="keyword">
    <ul>
      <li @click="handleCityClick(item.name )" v-for="item of list" :key="item.id" class="search-item border-bottom">{{item.name}}</li>
      <li class="search-item border-bottom" v-show="hasNoData">没有找到该城市</li>
    </ul>
  </div>
</div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'City-search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {click: true})
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
  height 9.6vw
  padding 0 1.3333vw
  background $bgColor
  .search-input
    box-sizing border-box
    height 8.2667vw
    line-height 8.2667vw
    padding 0 1.3333vw
    width 100%
    text-align center
    border-radius 0.8vw
    font-size 3.7333vw
    color #666
.search-content
  position absolute
  top 21.2vw
  left 0
  right 0
  bottom 0
  background-color #eee
  font-size 2.1333vw
  z-index 1
  .search-item
    line-height 8.2667vw
    padding-left 2.6667vw
    background #fff
    color #666
</style>
