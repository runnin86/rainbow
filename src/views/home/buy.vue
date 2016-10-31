
<template>
  <!-- 防止ios自动获取电话号码 -->
  <meta name = "format-detection" content = "telephone=no">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <div class="content" transition="">
    <!-- 顶部操作栏 -->
    <div class="header">
      <img src="/img/rainbow/return-btn.png"
        v-link="{path: '/home', replace: true}">
    </div>
    <div class="condition_little">
      <ul>
        <li>
          <span>{{name}}</span>
        </li>
        <li>
          <span>预期收益率&nbsp&nbsp{{exReturn}}%</span>
          <span>周期&nbsp&nbsp{{day}}天</span>
        </li>
      </ul>
    </div>

    <!-- 购买方式限制 -->
    <div class="way">
      <img src="/img/rainbow/wx-icon.png">
      <span>目前仅支持微信支付</span>
    </div>

    <!-- 金额input -->
    <div class="amount">
      <span v-if="num>0">需<font>{{num * 1000}}</font>元</span>
    </div>
    <div class="number">
      <input v-model="num"
        type="number" min=1
        class="number_input"
        onKeyPress="if(event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;"
        onKeyUp="this.value=this.value.replace(/\D/g,'')"/>
    </div>

    <!-- 起购金额限制 -->
    <div class="prompt">
      <span>一份产品1000元,可一次购买多份</span>
    </div>

    <!-- 协议 -->
    <!-- <div class="agreement_box">
      <input type="checkbox" class="agreement" name="agreement" id="agreement">
      <span for="agreement">已阅读并同意<font color="#005cac">《用户协议》</font></span>
    </div> -->

    <!-- 付款按钮 -->
    <div class="payment_btn" @click="payOrder()"
      :style="{'background-color': (paying ? '#999999' : '#005cac')}">
      <span>付款</span>
    </div>
  </div>
</template>

<script>
import $ from 'zepto'
import pingpp from 'pingpp-js'
import {api} from '../../util/service'

export default {
  ready () {
    $.init()
  },
  data () {
    return {
      paying: false,
      num: 1,
      pid: this.$route.query.pid,
      name: this.$route.query.name,
      day: this.$route.query.day,
      exReturn: this.$route.query.er
    }
  },
  methods: {
    /*
     * 支付
     */
    payOrder () {
      if (this.paying) {
        // 若正在支付则返回
        return
      }
      let openid = window.localStorage.getItem('rbOpenid')
      $.showIndicator()
      this.paying = true
      let token = window.localStorage.getItem('rbToken')
      this.$http.post(api.buy, {
        pid: this.pid,
        num: this.num,
        openid: openid
      }, {
        headers: {
          'x-token': token
        }
      })
      .then(({data: {code, data, msg}})=>{
        if (code === 1) {
          if (data.paytype === 'wx_pub') {
            let payResult = false
            pingpp.createPayment(data.charge, function (result, err) {
              if (result === 'success') {
                // 只有微信公众账号 wx_pub 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。
                $.toast('支付成功!')
                payResult = true
              }
              else if (result === 'fail') {
                // charge 不正确或者微信公众账号支付失败时会在此处返回
                $.toast('支付失败!')
              }
              else if (result === 'cancel') {
                // 微信公众账号支付取消支付
                $.toast('支付取消!')
              }
            })
            // 在支付完成后做操作
            setTimeout(function () {
              if (payResult) {
                this.$root.back()
              }
            }.bind(this), 2000)
          }
          else {
            // 账户金额支付
            $.toast(msg)
            setTimeout(function () {
              this.$root.back()
            }.bind(this), 2000)
          }
        }
        else {
          $.toast(msg)
        }
      }).catch((e)=>{
        console.error('付款提交失败:' + e)
      }).finally(()=>{
        $.hideIndicator()
        this.paying = false
      })
    }
  }
}
</script>

<style scoped>
/*顶部操作栏*/
.header{
 width: 100%;
 height: 2.4rem;
 background-color: #005cac;
 position: relative;
}
.header img:first-child{
  position: absolute;
  height: 2.4rem;
  padding: 0.8rem 0.4rem;
  left: 0rem;
  top: 0rem;
}
/*产品信息-小*/
.condition_little{
  width:100%;
  overflow: hidden;
  background-color: #005cac;
  height: 4.4rem;
}
.condition_little ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.condition_little ul li{
  width: 90%;
  margin: 0 auto;
}
.condition_little ul li:first-child span{
  font-size: 1rem;
  color: white;
  display: block;
}
.condition_little ul li:last-child span{
  width: 50%;
  display: block;
  float: left;
  margin-top: 0.6rem;
  color: #709fcd;
  font-size: 0.8rem;
}
.condition_little ul li:last-child span:first-child{
  border-right:0.05rem solid #1469b3;
}
.condition_little ul li:last-child span:last-child{
  padding-left: 0.6rem;
}
.way{
  width: 100%;
  height: 2.6rem;
  background-color: white;
}
.way img,.way span{
  display: block;
  float: left;
}
.way img{
  width: 1.2rem;
  margin-top: 0.8rem;
  margin-left: 0.8rem;
}
.way span{
  color: #666666;
  line-height: 2.6rem;
  margin-left: 0.5rem;
  font-size: 0.7rem;
}
.prompt{
  width: 100%;
  background-color: white;
  height: 1.4rem;
}
.prompt span{
  color: #cbcbcb;
  font-size: 0.6rem;
  display: block;
  margin-left: 0.8rem;
}
.amount{
  width: 100%;
  background-color: white;
  height: 2.4rem;
}
.amount span{
  width: 90%;
  margin: 0 auto;
  display: block;
  text-align: center;
  line-height: 1.4rem;
  color: #666666;
  font-size: 0.8rem;
}
.number{
  width: 100%;
  height: 2.6rem;
  background-color: white;
}
.number_input{
  width: 90%;
  height: 2rem;
  border: none;
  margin: 0 auto;
  font-size: 0.8rem;
  display: block;
  background-color: #f5f5f5;
  text-align: center;
  border-radius: 0;
}
/*.agreement_box{
  width: 100%;
  padding-left: 0.8rem;
  padding-top: 1rem;
  overflow: hidden;
}
.agreement{
  border-color: #999999;
  background-color: white;
  width: 1rem;
  height: 1rem;
  float: left;
}
.agreement_box span{
  font-size: 0.7rem;
  color: #666666;
  line-height: 1rem;
  display: block;
  float: left;
  margin-left: 0.4rem;
}*/
.payment_btn{
  width: 92%;
  margin: 1rem auto;
  border-radius: 0.1rem;
  height: 2.45rem;
  -webkit-box-shadow:0 6px 4px #dbdbdb;
  -moz-box-shadow:0 6px 4px #dbdbdb;
  box-shadow:0 6px 4px #dbdbdb;
}
.payment_btn span{
  width: 100%;
  font-size: 0.8rem;
  color: white;
  text-align: center;
  line-height: 2.45rem;
  display: block;
}
</style>
