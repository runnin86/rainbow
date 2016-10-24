
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" transition="">
    <!-- 顶部操作栏 -->
    <div>
      <a v-link="{path: '/home', replace: true}">
        <!-- <img src="/img/11/return.png"> -->
      </a>
      <strong>123</strong>
      <div>
        &nbsp;456&nbsp;
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'zepto'

  export default {
    ready () {
      $.init()
    },
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
</style>
