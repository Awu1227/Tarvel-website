<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>
<script>
export default {
  name: 'Alphabet'
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

</style>
