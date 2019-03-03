<template>
  <div id="app">
    <div style="height:100%;">
      <view-box ref="viewBox">
        <x-header slot="header" style="width:100%;position:fixed;left:0;top:0;z-index:100;">
          <span>{{title}}</span>
          <x-icon type="navicon" size="35" slot="right" style="fill:#fff;position:relative;top:-8px;"></x-icon>
          <x-icon type="ios-plus-empty" size="35" slot="right" style="fill:#fff;position:relative;top:-8px;"></x-icon>
        </x-header>
        <div style="height: 40px;"/>

        <router-view></router-view>
      </view-box>
    </div>
  </div>
</template>

<script>
  import {XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem, ViewBox} from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      ViewBox,
      XHeader,
      Actionsheet,
      ButtonTab,
      ButtonTabItem
    },
    data () {
      return {
        menus: {
          menu1: 'Take Photo',
          menu2: 'Choose from photos'
        },
        title: '项目JSAP点检单',
        showMenus: false
      }
    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  #title-bar {
    background-color: lightgreen;
    height: 40px;
  }



</style>
