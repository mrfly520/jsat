<template>

  <flexbox orient="vertical">
    <flexbox-item><div class="flex-demo">1</div></flexbox-item>
    <flexbox-item><div class="flex-demo">2</div></flexbox-item>
  </flexbox>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'ListView',
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>

<style scoped>

  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>
