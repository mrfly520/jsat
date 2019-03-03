<template>
  <div>
    <search
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      placeholder="搜索提示"
      @result-click="resultClick"
      @on-change="getResult"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
    </search>

    <div style="position: absolute;top:100px;width: 100%">
     <div  style="position: relative;width: 100%" v-for="item in results">
        <flexbox style="height: 78px;width:100%;border-top: gainsboro 1px solid" >
          <flexbox-item :span="1/5">
            <img  class="pic" src="https://sinacloud.net/vue-wechat/images/headers/header01.png" />
          </flexbox-item>
          <flexbox-item >
            <div > {{item.title}}<badge text="8"></badge></div>
            <div style="color: #9B9B9B" > {{item.title}}</div>
          </flexbox-item>
          <flexbox-item :span="1/12">
            <span ><x-icon type="ios-arrow-right"></x-icon></span>
          </flexbox-item>
          <divider/>
        </flexbox>

      </div>
    </div>

  </div>
</template>

<script>
  import { Badge, Grid, GridItem, Search, Group, Cell, XButton, Flexbox, FlexboxItem, Divider } from 'vux'

  export default {
    name: 'SearchBox',
    components: {
      Search,
      Group,
      Cell,
      XButton,
      Flexbox,
      FlexboxItem,
      Grid,
      GridItem,
      Badge,
      Divider
    },
    methods: {
      setFocus () {
        // this.$refs.search.setFocus()
      },
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
      },
      onCancel () {
        console.log('on cancel')
      }
    },
    data () {
      return {
        results: [],
        value: '',
        filterTask: [
          {
            text: 'Vue.js - 是一套构建用户界面的渐进式框架',
            complete: false
          },
          {
            text: 'Bootstrap 响应式布局',
            complete: false
          }
        ]
      }
    }
  }

  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style scoped>

  .pic{
    height: 68px;
    width: 68px;
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 5px;
  }

  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>
