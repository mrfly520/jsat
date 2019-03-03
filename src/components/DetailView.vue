<template>
  <div>
    <table id="head" style="top: 100px ; width: 100%">
      <tr>
        <td>项目编号</td>
        <td style="float: right">{{project_id}}</td>
      </tr>
      <tr>
        <td>项目名称</td>
        <td style="float: right">{{project_name}}</td>
      </tr>
      <tr>
        <td>主机出厂编号</td>
        <td style="float: right">{{computer_id}}</td>
      </tr>
    </table>
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
    <popover placement="bottom" style="margin: 20px;">
      <div slot="content" class="popover-demo-content">
        hello world
      </div>
      <button class="btn btn-default">=</button>
    </popover>
    <ul>
      <li>
        <div><badge text="一、现场方案跟文件确认"></badge></div>
        <div>
          <ul>
            <li>1、整线方案</li>
            <li>2、设备清单</li>
          </ul>
        </div>
      </li>
      <li>
        <div><badge text="二、现场环境确认"></badge></div>
        <div>
          <ul>
            <li>1、内外包间压差</li>
            <li>2、内包温湿度</li>
            <li>3、异常振动</li>
          </ul>
        </div>
      </li>
      <li>
        <div><badge text="三、设备静态状态确认"></badge></div>
        <div>
          <ul>
            <li>1、内外包间压差</li>
            <li>2、内包温湿度</li>
            <li>3、异常振动</li>
          </ul>
        </div>
      </li>
    </ul>
    <div style="position: fixed; bottom: 0">
      共有80条点检项；未完成5条
    </div>
  </div>
</template>

<script>
  import { Popover, Badge, Search } from 'vux'

  export default {
    name: 'DetailView.vue',
    components: {
      Popover,
      Search,
      Badge
    },
    data () {
      return {
        project_id: 'zbfj12343453434',
        project_name: '江西*********************项目',
        computer_id: '1111111111111111111'
      }
    }
  }
</script>

<style scoped>

  li{
    line-height: 30px;
  }
</style>
