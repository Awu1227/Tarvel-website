<template>
<div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe637;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe633;</span>
      输入城市/景点/游玩主题</div>
    <div class="header-right">三亚
      <span class="iconfont">&#xe6aa;</span>
    </div>
</div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .header{
    font-size: .37rem;
    display: flex;
    height: 1.17rem;
    background-color: $bgColor;
  }
.header-left{
  line-height: 1.17rem;
  color: #fff;
}
.header-left span {
  margin-left: 10px;
}
.header-input{
  background-color: #fff;
  color: grey;
  border-radius: 0.1rem;
  height: 0.8rem;
  line-height: 0.8rem;
  padding-left: 0.26rem;
  margin-left: 0.32rem;
  margin-right: 0.16rem;
  margin-top: 0.16rem;
  flex: 1;
}
.header-right{
  color: #fff;
  line-height: 1.17rem;
  padding-right: 0.16rem;
}
</style>
