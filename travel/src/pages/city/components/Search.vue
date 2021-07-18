<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: 'City-search'
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
</style>
