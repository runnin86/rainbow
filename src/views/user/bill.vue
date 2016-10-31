
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content white_bg" transition="">
    <!-- 顶部操作栏 -->
    <div class="header blue_bg width_full o_h">
      <img src="/img/rainbow/return-btn.png"
        v-link="{path: '/user', replace: true}">
      <span><font color="white">账单</font></span>
      <div class="order_options width_full o_h">
        <span @click="this.showTabs = 1"
          :class="this.showTabs===1?'options_focus':'light_blue'">
        购买</span>
        <span @click="this.showTabs = 2"
          :class="this.showTabs===2?'options_focus':'light_blue'">
        盈利</span>
        <span @click="this.showTabs = 3"
          :class="this.showTabs===3?'options_focus':'light_blue'">
        提现</span>
      </div>
    </div>
    <div class="order_box white_bg width_full o_h">
      <div class="buy text_color width_full o_h"
        :class="this.showTabs===1?'':'module_hide'">
        <ul>
          <li>金额</li>
          <li>日期</li>
          <li>产品名称</li>
        </ul>
        <ul>
          <li>2000.00</li>
          <li>10/24</li>
          <li>中盛阳光001彩红计划</li>
        </ul>
      </div>
      <div class="profit text_color width_full o_h"
        :class="this.showTabs===2?'':'module_hide'">
        <ul>
          <li>金额</li>
          <li>日期</li>
          <li>产品名称</li>
        </ul>
        <ul>
          <li>1220.00</li>
          <li>10/12</li>
          <li>中盛阳光001彩红计划</li>
        </ul>
      </div>
      <div class="withdrawal text_color width_full o_h"
        :class="this.showTabs===3?'':'module_hide'">
        <ul>
          <li>金额</li>
          <li>日期</li>
          <li>状态</li>
        </ul>
        <ul>
          <li>880.00</li>
          <li>10/17</li>
          <li>提现申请已提交</li>
        </ul>
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
        showTabs: 1
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
span,img{
  display: block;
}
.light_blue{
  color: #709fcd
}
.blue_bg{
  background-color: #005cac;
}
.white_bg{
  background-color: white;
}
.text_color{
  color: #666666;
}
.cancel_float{
  clear:both;
}
.width_full{
  width: 100%;
}
.module_hide{
  display: none;
}
.o_h{
  overflow: hidden
}
/*顶部操作栏*/
.header{
 position: relative;
}
.header img:first-child{
  position: absolute;
  top: 0;
  height: 2.4rem;
  padding: 0.8rem 0.4rem;
  left: 0rem;
}
.header span{
  line-height: 2.4rem;
  text-align: center;
  font-size: 0.8rem;
}
.order_options{
  width: 92%;
  margin: 0 4%;
}
.order_options span{
  float: left;
  width: 33.33%;
  text-align: center;
  line-height: 2.4rem;
  font-size: 0.8rem;
}
.options_focus{
  color: white;
}
ul{
  width: 100%;
  margin: 0;
  list-style-type: none;
  padding: 0;
  overflow: hidden;
  border-bottom: 0.05rem solid #f5f5f5;
}
ul li{
  font-size: 0.7rem;
  line-height: 2.4rem;
  text-align: center;
  color: #666666;
  float: left;
}
ul li:first-child,ul li:nth-child(2){
  width: 26%;
}
ul li:last-child,ul li:last-child{
  width: 48%;
}
</style>
