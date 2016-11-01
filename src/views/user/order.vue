
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" transition="" style="background-color:white">
    <!-- 顶部操作栏 -->
    <div class="header blue_bg width_full">
      <img src="/img/rainbow/return-btn.png"
        v-link="{path: '/user', replace: true}">
      <span>{{order.Name}}</span>
    </div>

    <!-- 产品进行状态 -->
    <div class="order_box blue_bg width_full">
      <span>总金额(元)</span>
      <span>{{order.totalMount}}</span>
      <span>
        产品收益(元)
        <font color="white">
        &nbsp{{order.acProfit * order.totalMount | currency ''}}&nbsp
        </font>
        剩余{{order.lastdays}}天
      </span>
    </div>

    <!-- 专家操盘记录 -->
    <div class="record">
      <span>专家操盘记录</span>
      <!-- <span>上传日期&nbsp2016/10/27&nbsp11:22</span> -->
      <img v-for="ig in order.operateRecords | orderBy 'sdateTime' -1" track-by="$index"
        :src="'http://img.zqsml.com/sublott/'+ig.picUrl">
    </div>
  </div>
</template>

<script>
import $ from 'zepto'
import {api} from '../../util/service'

export default {
  ready () {
    $.init()
    this.getOrder()
  },
  data () {
    return {
      pid: this.$route.query.pid,
      order: []
    }
  },
  methods: {
    /*
     * 获取账户信息
     */
    getOrder () {
      let token = window.localStorage.getItem('rbToken')
      this.$http.post(api.operateRecords, {
        pid: this.pid
      }, {
        headers: {
          'x-token': token
        }
      })
      .then(({data: {code, data, msg}})=>{
        if (code === 1) {
          this.order = data
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('获取计划详情信息失败:' + e)
      })
    }
  }
}
</script>

<style scoped>
span,img{
  display: block;
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
/*顶部操作栏*/
.header{
 height: 2.4rem;
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
  color: white;
  line-height: 2.4rem;
  text-align: center;
  font-size: 0.8rem;
}
.order_box{
  height: 6.5rem;
}
.order_box{
  text-align: center
}
.order_box span:first-child,.order_box span:last-child{
  color: #79a8d2;
  font-size: 0.8rem;
}
.order_box span:nth-child(2){
  color: white;
  font-size: 1.8rem;
  line-height: 3rem;
}
.record span:first-child{
  color: #666666;
  line-height: 2.4rem;
  text-align: center;
  font-size: 0.8rem;
  width: 92%;
  margin: 0 4%;
  border-bottom: 0.05rem solid #f5f5f5;
}
.record span:nth-child(2){
  color: #cbcbcb;
  line-height: 1rem;
  font-size: 0.7rem;
  width: 92%;
  margin: 1rem 4%;
}
.record img{
  width: 92%;
  margin: 0.6rem 4%;
  background-size: 100%;
  background-repeat: no-repeat;
  border: 0.05rem solid #f5f5f5;
}
</style>
