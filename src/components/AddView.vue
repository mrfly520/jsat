<template>
  <div>
    <group>
      <cell title="检查项目" value="主机供料量检查"/>
    </group>
    <group title="检查标准">
      <cell-box>
        物料上料量满足设备需求量,不存在主机等料时间，记录上料时间及上料间隔时间
      </cell-box>
    </group>
    <group title="验证方式">
      <cell-box>
        上料耗时:<br/>
        上料间隔时间:
      </cell-box>
    </group>
    <group title="备注">
      <cell-box>
        无
      </cell-box>
    </group>
    <group-title>现场图片视频</group-title>

    <div id="app">
      <input type="file" @change="getFile($event)"/>
      <button @click="upload">上传</button>
      <div>{{ result }}</div>
    </div>
<!--    <flexbox :gutter="10" wrap="wrap">
      <flexbox-item  v-for="(item, index) in list">
        <img :src="item.src" height="100px"  class="image" @touchstart="gtouchstart(v)" @touchmove="gtouchmove()" @touchend="gtouchend(v)" >
      </flexbox-item>
    </flexbox>-->
    <!--<myimg src="src"></myimg>-->
    <!--<previewer :list="list" ref="previewer" :options="options" @on-index-change="logIndexChange"></previewer>-->
  </div>
</template>

<i18n>
  placeholder:
  zh-CN: 提示
  hide counter:
  zh-CN: 备注
</i18n>


<script>
  import {XTextarea, Badge, XSwitch, Group, Cell, XButton, CellBox
  , Grid, GridItem, Previewer, Flexbox, FlexboxItem} from 'vux'
  export default {
    components: {
      Flexbox,
      FlexboxItem,
      Grid,
      GridItem,
      CellBox,
      XTextarea,
      XButton,
      Badge,
      XSwitch,
      Group,
      Cell,
      Previewer
    },
    name: 'AddView',
    methods: {
      upload: function () {
        var zipFormData = new FormData()
        zipFormData.append('filename', this.upath)// filename是键，file是值，就是要传的文件，test.zip是要传的文件名
        let config = {headers: {'Content-Type': 'multipart/form-data'}}

        this.$http.post('http://localhost:42565/home/up', zipFormData, config).then(function (response) {
          console.log(response)
          console.log(response.data)
          console.log(response.bodyText)

          var resultobj = response.data

          this.result = resultobj.msg
        })
      },
      getFile: function (even) {
        this.upath = event.target.files[0]
      },
      logIndexChange (arg) {
        console.log(arg)
      },
      show (index) {
        this.$refs.previewer.show(index)
      }
    },
    data () {
      return {
        src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
        result: 'zbfj12343453434',
        list: [{
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg',
          w: 800,
          h: 400
        }, {
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg',
          w: 1200,
          h: 900
        }, {
          src: 'http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg'
        }],
        options: {
          getThumbBoundsFn (index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.image')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        }
      }
    }
  }
</script>

<style scoped>
.image-group{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}


</style>
