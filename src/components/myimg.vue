<template>
    <div>
      <img src="src" @touchstart="gtouchstart" @touchmove="touchmove" @touchend="touchend"/>
    </div>

</template>

<script>
  export default {
    name: 'myimg',
    data: function () {
      return {
        timeOutEvent: 0
      }
    },
    props: ['src'],
    methods: {
      gtouchstart: function (e) {
        this.timeOutEvent = setTimeout(this.longPress, 500)
        e.preventDefault()
      },
      touchmove: function () {
        clearTimeout(this.timeOutEvent)
        this.timeOutEvent = 0
      },
      touchend: function () {
        clearTimeout(this.timeOutEvent)
        if (this.timeOutEvent !== 0) {
          alert('单击')
        }
        return false
      },
      longPress () {
        this.timeOutEvent = 0
        alert('长按')
      },
      cli () {
        setTimeout(dos, 5000)
        function dos () {
          alert('dddd')
        }
      }
    }
  }
</script>

<style scoped>

</style>
