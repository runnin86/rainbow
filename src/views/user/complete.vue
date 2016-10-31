
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content blue_bg" transition="">
    <!-- 顶部操作栏 -->
    <div class="header">
      <img src="/img/rainbow/return-btn.png"
        v-link="{path: '/user', replace: true}">
    </div>
    <div class="complete_icon">
      <img src="/img/rainbow/Symbol.png">
    </div>
    <div class="complete_text">
      <span>提现成功</span>
      <span>stonecookpapa@163.com&nbsp-&nbsp880.00元</span>
      <span>3个工作日内到账</span>
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
        message: 1
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
.blue_bg{
 background-color: #005cac;
}
/*顶部操作栏*/
.header{
 width: 100%;
 height: 2.4rem;

 position: relative;
}
.header img:first-child{
  position: absolute;
  height: 2.4rem;
  padding: 0.8rem 0.4rem;
  left: 0rem;
  top: 0rem;
}
.complete_icon img{
  display: block;
  background-size: 100%;
  width: 100%;
}
.complete_icon{
  width: 54%;
  overflow: hidden;
  margin: 3rem auto;
}
.complete_text{
  width: 100%;
  overflow: hidden;
  position: fixed;
  bottom: 1rem;
}
.complete_text span:first-child{
  font-size: 1.2rem;
  color: white;
  text-align: center;
  display: block;
}
.complete_text span:nth-child(2),.complete_text span:nth-child(3){
  display: block;
  color: #709fcd;
  text-align: center;
  font-size: 0.6rem;
}
</style>
