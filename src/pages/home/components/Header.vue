<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont search-icon">&#xe632;</span>
      <span class="text">输入城市/景点/游玩主题</span>
    </div>
    <div class="header-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'HomeHeader'
  };
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import '~style/styl/varibles.styl'

  .header
    display: flex
    line-height: 88px
    background: $bgColor
    color: #fff
    text-align: center
    .header-left
      width: 88px
      float: left
      .back-icon
        text-align: center
        font-size: 40px
    .header-input
      margin: 12px 0 0 20px
      padding: 0 0 0 20px
      flex: 1
      height: 64px
      line-height: 64px
      background: #fff
      border-radius: 10px
      text-align: left
      font-size: 0
      color: #ccc
      .search-icon
        display: inline-block
        vertical-align: top
        font-size: 30px
      .text
        display: inline-block
        font-size: 30px
    .header-right
      width: 124px
      float: right
      font-size: 28px
      .arrow-icon
        font-size: 20px
</style>
