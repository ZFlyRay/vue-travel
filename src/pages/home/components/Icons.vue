<template>
  <div id="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl">
          </div>
          <p class="icon-desc ignore">{{item.iconDesc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'HomeIcons',
    data() {
      return {
        iconList: [
          {
            id: 0,
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            iconDesc: '动植物园'
          },
          {
            id: 1,
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            iconDesc: '景点门票'
          },
          {
            id: 2,
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            iconDesc: '踏青赏花'
          },
          {
            id: 3,
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            iconDesc: '一日游'
          },
          {
            id: 4,
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            iconDesc: '动植物园'
          },
          {
            id: 5,
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            iconDesc: '景点门票'
          },
          {
            id: 6,
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            iconDesc: '踏青赏花'
          },
          {
            id: 7,
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            iconDesc: '一日游'
          },
          {
            id: 8,
            iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            iconDesc: '踏青赏花'
          }
        ],
        swiperOption: {}
      };
    },
    computed: {
      pages() {
        const pages = [];
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  };
</script>

<style scoped lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  @import '~style/styl/varibles.styl'
  @import '~style/styl/mixins.styl'

  #icons > > >
  .swiper-container
    height: 0
    padding-bottom: 50%

  .icon
    position: relative
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 22px
      box-sizing: border-box
      padding: 30px
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 10px
      text-align: center
      color: $darkTextColor
      ellipsis()
      &.ignore
        font-size: 14px
</style>
